import React from 'react'
import AppBar from '../AppBar/AppBar'
import ChooseProfilePage from '../ChooseProfilePage/ChooseProfilePage'
import MatchListPage from '../MatchListPage/MatchListPage'

function Main() {
    return (
        <div>
            <AppBar />
            <ChooseProfilePage />
            {/* <MatchListPage /> */}
        </div>
    )
}

export default Main