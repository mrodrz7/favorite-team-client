import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Teams = ({ user, alerts }) => {
  console.log(user, alerts)

  const [teams, setTeams] = useState([])
  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/teams`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(responseData => setTeams(responseData.data.teams))
      .then(console.log)
      .catch(console.error)
  }, [])

  const teamsJsx = teams.map(team => (
    <p key={team._id}>
      <Link to={`/teams/${team._id}`}>{team.team_name}</Link>
    </p>
  ))

  return (
    <div>
      <h1>Teams</h1>
      {teamsJsx}
    </div>
  )
}

export default withRouter(Teams)
