import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { withRouter } from 'react-router-dom'

const Team = ({ user, alerts, match }) => {
  const [team, setTeam] = useState(null)
  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/teams/${match.params.id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(responseData => setTeam(responseData.data.team))
      .then(console.log(team))
      .catch(console.error)
  }, [])

  if (!team) {
    return <p>Loading....</p>
  }

  return (
    <div>
      <h1>Teams</h1>
      <p>Team: {team.team_name}</p>
    </div>
  )
}

export default withRouter(Team)
