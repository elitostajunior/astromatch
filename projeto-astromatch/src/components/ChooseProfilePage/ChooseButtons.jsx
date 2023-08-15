import React from 'react'
import styled from 'styled-components'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded'
import FavoriteIcon from '@mui/icons-material/Favorite'

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const ChooseButtonYes = styled.button`
  border: 2px solid red;
  background-color: white;
  border-radius: 50px;
  padding: 8px;

  :hover {
    cursor: pointer;
  }
`

const ChooseButtonNo = styled.button`
  border: 2px solid green;
  background-color: white;
  border-radius: 50px;
  padding: 8px;

  :hover {
    cursor: pointer;
  }
`

function ChooseButtons(props) {
  return (
    <ButtonsContainer>
      <ChooseButtonYes onClick={props.onClickNo}>
        <ClearRoundedIcon sx={{ fontSize: 50, color: 'red' }} />
      </ChooseButtonYes>
      <ChooseButtonNo onClick={props.onClickYes}>
        <FavoriteIcon sx={{ fontSize: 50, color: 'green' }} />
      </ChooseButtonNo>
    </ButtonsContainer>
  )
}

export default ChooseButtons