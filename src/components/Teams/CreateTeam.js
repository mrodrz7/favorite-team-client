import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import TeamForm from './TeamForm'

const CreateTeam = ({ user, alerts }) => {
  const teamObject = {
    _id: '',
    team_name: '',
    sport: '',
    trophies: ''
  }

  const [created, setCreated] = useState(false)
  const [team, setTeam] = useState(teamObject)

  const handleChange = event => {
    setTeam(team => ({ ...team, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      method: 'POST',
      url: `${apiUrl}/teams`,
      headers: {
        'Authorization': `Bearer=${user.token}`
      },
      data: { team }
    })
      .then(responseData => setCreated(responseData.data.team._id))
      .catch(console.error)
  }

  if (created) {
    return <Redirect to={`/teams/${created}`} />
  }

  return (
    <TeamForm
      team={team}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default CreateTeam
