import React from 'react'
import styled from 'styled-components'

const Title = styled.input`
display:block;
font-size:1.25em;
border: 1px solid #DDD;
padding: .25em;
border-radius:.25em;
margin: .5em 0;
`

const TitleInput = ({onChange, value}) => {
  return (<Title type='text' placeholder="Title" onChange={onChange} value={value}></Title>)
}

export default TitleInput