import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const TeamForm = ({ team, handleChange, handleSubmit }) => {
  const cancelPath = team._id ? `#/teams/${team._id}` : '#teams'

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="team">
        <Form.Label>Team</Form.Label>
        <Form.Control
          type="text"
          placeholder="Team Name"
          name="team"
          onChange={handleChange}
          value={team.team_name}
          required
        />
      </Form.Group>
      <Form.Group controlId="sport">
        <Form.Label>Sport</Form.Label>
        <Form.Control
          type="text"
          placeholder="Sport"
          name="sport"
          onChange={handleChange}
          value={team.sport}
          required
        />
      </Form.Group>
      <Form.Group controlId="trophies">
        <Form.Label>Trophies</Form.Label>
        <Form.Control
          type="text"
          placeholder="Trophies/Awards"
          name="trophies"
          onChange={handleChange}
          value={team.trophies}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
      <Button variant="secondary" href={cancelPath} className="ml-2">Cancel</Button>
    </Form>
  )
}

export default TeamForm
