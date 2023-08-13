import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCard'
import ChooseButtons from './ChooseButtons'
import axios from 'axios'

function ChooseProfilePage() {
  const [profileToChoose, setProfileToChoose] = useState({})

  const getProfileToChoose = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eli-junior-joy/person')
    .then(response => {
      setProfileToChoose(response.data.profile)
    })
  }

  const chooseProfile = (choice) => {
    const body = {
      choice: choice,
      id: profileToChoose.id
    }

    axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eli-junior-joy/choose-person', body)
    .then(response => {
      console.log(response)
      getProfileToChoose()
    })
  }

  useEffect(() => {
    getProfileToChoose()
  }, [])

  const onClickNo = () => {
    chooseProfile(false)
  }

  const onClickYes = () => {
    chooseProfile(true)
  }

  return (
    <div>
      <ProfileCard profile={profileToChoose} />
      <ChooseButtons 
        onClickNo={onClickNo}
        onClickYes={onClickYes}
      />
    </div>
  )
}

export default ChooseProfilePage