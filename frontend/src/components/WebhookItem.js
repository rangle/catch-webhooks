import React from 'react'
import TitleInput from "./TitleInput"
import SummaryInput from "./SummaryInput"
import JsonTree from './JsonTree'
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import styled from 'styled-components'


const EventReceived = styled.span`
  color: #777;
`

const CustomVerticalTimelineElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element-content {
    box-shadow: 2px 4px 8px 2px rgba(50, 50, 93, 0.15), 3px 5px 10px 3px rgba(112, 157, 199, 0.15);
    background: linear-gradient(135deg, #F8F8F8, #E8F8F8);
    text-align: left;
  }
`;

const WebhookItem = ({index, date, json, title, summary, onTitleChange, onSummaryChange}) => {

  const onChangeTitle = (event) => {
    onTitleChange(index, event.target.value)
    event.preventDefault()
  }

  const onChangeSummary = (event) => {
    onSummaryChange(index, event.target.value)
    event.preventDefault()
  }

  return (
    <CustomVerticalTimelineElement
          key={index}
          date={date ? date.toString() : ""}>
        <EventReceived>event received</EventReceived>
        <TitleInput   onChange={ onChangeTitle }   value={title} />
        <SummaryInput onChange={ onChangeSummary } value={summary} />
        <div>
          <JsonTree json={json} />
        </div>
    </CustomVerticalTimelineElement>
  )
}

export default WebhookItem