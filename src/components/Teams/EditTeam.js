import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import TeamForm from './TeamForm'

const EditTeam = ({ user }) => {
  const [team, setTeam] = useState({ team_name: '', sport: '' })

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/teams/:id`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
      data: { team }
    })
      .then(() => alert({ heading: 'Success', message: 'You updated a book', variant: 'success' }))
      .then(() => history.push(`/teams/${match.params.id}`))
      .catch(() => alert({ heading: 'you failed', message: 'something went wrong', variant: 'danger' }))
  })
}

export default EditTeam
