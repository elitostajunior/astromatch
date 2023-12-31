import React from 'react'
import styled from 'styled-components'

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 8px;
  height: 35px;
  width: 35px;
  object-fit: cover;
  object-position: 50% 20%;
`

function MatchListItem(props) {
  const profile = props.profile
  return (
    <ListItemContainer>
        <Avatar src={profile.photo} />
        <p>{profile.name}</p>
    </ListItemContainer>
  )
}

export default MatchListItem