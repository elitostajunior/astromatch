import React from 'react'
import styled from 'styled-components'

const ProfileCardContainer = styled.div`
  margin: 8px;
  margin-bottom: 16px;
  border: 1px solid black;
  background-color: whitesmoke;
`

const ProfilePicture = styled.img`
  width: 100%;
  height: 480px;
  display: block;
  object-fit: cover;
  object-position: 50% 20%;
`

const ProfileInfo = styled.div`
  padding: 0 16px;
  height: 120px;
  border-top: 1px solid black;
`

function ProfileCard(props) {
  const profile = props.profile  
  return (
    <ProfileCardContainer>
      <ProfilePicture src={profile.photo} />
      <ProfileInfo>
        <h3>{profile.name}, {profile.age}</h3>
        <p>{profile.bio}</p>
      </ProfileInfo>
    </ProfileCardContainer>
  )
}

export default ProfileCard