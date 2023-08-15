import React, { useState } from 'react'
import AppBar from '../AppBar/AppBar'
import ChooseProfilePage from '../ChooseProfilePage/ChooseProfilePage'
import MatchListPage from '../MatchListPage/MatchListPage'
import styled from 'styled-components'

const MainContainer = styled.div`
    border: 1px solid black;
    border-radius: 3px;
    width: 430px;
    height: 790px;
    margin: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 5px 5px 15px 0px #3B3B3B;
`

function Main() {
    const [selectedPage, setSelectedPage] = useState('choose-profile')

    const renderSelectedPage = () => {
        switch(selectedPage) {
            case 'choose-profile':
                return <ChooseProfilePage />
            case 'match-list':
                return <MatchListPage />
            default:
                return <ChooseProfilePage />
        }
    }

    const goToChooseProfilePage = () => {
        setSelectedPage('choose-profile')
    }

    const goToMatchListPage = () => {
        setSelectedPage('match-list')
    }

    return (
        <MainContainer>
            <AppBar 
                goToChooseProfilePage={goToChooseProfilePage}
                goToMatchListPage={goToMatchListPage}
            />
            {renderSelectedPage()}
            
        </MainContainer>
    )
}

export default Main