import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ResetButtonStyle = styled.div`
  display: flex;
  margin-top: 3vh;
  justify-content: center;
`

function ResetButton() {
  const onClickReset = () => {
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eli-junior-joy/clear')
    .then(response => {
      console.log(response)
    })
  }

  return (
    <ResetButtonStyle>
      <button onClick={onClickReset}>Resetar curtidas e matches</button>
    </ResetButtonStyle>
  )
}

export default ResetButton