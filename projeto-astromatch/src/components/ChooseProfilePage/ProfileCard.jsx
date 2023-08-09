import React from 'react'
import styled from 'styled-components'

const ProfileCardContainer = styled.div`
  margin: 16px;
  border: 1px solid black;
`

const ProfilePicture = styled.img`
  width: 100%;
  display: block;
`

const ProfileInfo = styled.div`
  padding: 0 16px;
`

function ProfileCard() {
  return (
    <ProfileCardContainer>
      <ProfilePicture src={'https://picsum.photos/300/300'} />
      <ProfileInfo>
        <p>Nome da pessoa, 20</p>
        <p>Descrição da pessoa</p>
      </ProfileInfo>
    </ProfileCardContainer>
  )
}

export default ProfileCard