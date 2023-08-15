import React from 'react'
import styled from 'styled-components'
import astromatch from '../../assets/astromatch.png'
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded'
import RecentActorsRoundedIcon from '@mui/icons-material/RecentActorsRounded';

const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  align-items: center;
  padding: 0 10px;
`

const Image = styled.img`
  width: 150px;
  margin: 5px;
`

const IconButton = styled.button`
  background-color: white;
  padding: 0;
  border: none;

  :hover {
    cursor: pointer;
  }
`

function AppBar(props) {
  return (
    <AppBarContainer>
      <IconButton onClick={props.goToChooseProfilePage}>
        <RecentActorsRoundedIcon sx={{ fontSize: 40, color: 'navy' }} />
      </IconButton>
      <Image src={astromatch} />
      <IconButton onClick={props.goToMatchListPage}>
        <ViewListRoundedIcon sx={{ fontSize: 40, color: 'navy' }} />
      </IconButton>
    </AppBarContainer>
  )
}

export default AppBar