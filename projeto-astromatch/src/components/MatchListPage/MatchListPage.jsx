import React from 'react'
import MatchListItem from './MatchListItem'
import styled from 'styled-components'

const ListContainer = styled.div`
  padding: 8px;
`

function MatchListPage() {
  const matches = [
    {
      "id": "71gMbZs2txS9LDvGK5Ew",
      "age": 26,
      "name": "Anitta",
      "photo": "https://www.polemicaparaiba.com.br/wp-content/uploads/2023/02/anitta-perde-artista-revelacao-grammy-2023.jpg",
      "bio": "Amo cachorros e sair para dançar. Procuro alguém animado e sem neuras."
    }
  ]

  return (
    <ListContainer>
      {matches.map((profile) => {
        return <MatchListItem profile={profile} />
      })}
    </ListContainer>
  )
}

export default MatchListPage