import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCard'
import ChooseButtons from './ChooseButtons'
import axios from 'axios'

function ChooseProfilePage() {
  const [profileToChoose, setProfileToChoose] = useState({})

  useEffect(() => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eli-junior-joy/person')
    .then(response => {
      setProfileToChoose(response.data.profile)
    })
  }, [])

  return (
    <div>
      <ProfileCard profile={profileToChoose} />
      <ChooseButtons />
    </div>
  )
}

export default ChooseProfilePage