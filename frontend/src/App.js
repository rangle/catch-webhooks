import React, { useState, useEffect } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import './App.css';
import { jsonReceivedAction, setWebhookTitleAction, setWebhookSummaryAction, clearAllAction } from './store/store'
import { connect } from 'react-redux'
import WebhookItem from "./components/WebhookItem"
import styled from 'styled-components'
import axios from 'axios'

import 'react-vertical-timeline-component/style.min.css';

// const ws = new WebSocket(`ws://${window.location.host}`);
const ws = new WebSocket(((window.location.protocol === "https:") ? "wss://" : "ws://") + window.location.host);

const Button = styled.button`
  padding:1em;
  display:block;
  border-radius:.5em;
  font-weight:bold;
  background: linear-gradient(135deg, white, #EFF);
  border: 1px solid #DDD;
  box-shadow: 1px 1px 4px #888;
  margin-top:1em;
  cursor:pointer;
  height: 4em;
`
 
const HelpHint = styled.span`
  margin-top: 1em;
  color: #888;
`

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`

const Title = styled.div`
  font-size: 1.5em;
  font-family: Open Sans, Arial;
  margin: 0em 1em;
  color: #999;
  padding-top: 1em;
`





const app = ({ 
  dispatchJsonReceived,
  onTitleChange,
  onSummaryChange,
  onClear,
  events 
}) => {

  const [url, setURL] = useState({ url: null })
  
  ws.onopen = () => {
    ws.onmessage = (ev) => {
      dispatchJsonReceived(JSON.parse(ev.data))
      console.log("Received ", ev.data)
    }
  };

  useEffect(() => {
    const loadPublicURL = async () => {
      try {
        setURL((await axios.get("/url")).data)
      } catch (e) {
        console.log(e)
      }
    }
    loadPublicURL()
  }, [])
  
  const items = []
  for (const [idx, event] of events.entries()) {
    items.push(
      <WebhookItem key={idx} index={idx} 
        title={event.title}
        summary={event.summary}
        date={event.date} json={event.json} 
        onTitleChange={onTitleChange}
        onSummaryChange={onSummaryChange}
      />
    )
  }
  console.log(url)
  return (
    <div className="App">
      <FlexCenter>
        <Title>Webhook Catcher</Title>
        <Button type="text" onClick={onClear}>Clear</Button>
      </FlexCenter>
      <FlexCenter>
        <HelpHint>Use this pattern for your webhook URLs: {url.url}/webhook/*</HelpHint>
      </FlexCenter>
      <VerticalTimeline layout={'2-columns'}>
        {items}
      </VerticalTimeline>
    </div>
  );
};


export default connect(
  state => ({
    events : state.events
  }),
  dispatch => ({
    onClear : (event) => {
      dispatch(clearAllAction())
      event.preventDefault()
    },
    onTitleChange :   (index, text) => dispatch(setWebhookTitleAction(index, text)),
    onSummaryChange : (index, text) => dispatch(setWebhookSummaryAction(index, text)),
    dispatchJsonReceived :     json => dispatch(jsonReceivedAction(json))
  })
)(app)