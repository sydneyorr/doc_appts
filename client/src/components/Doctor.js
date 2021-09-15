import React from "react"
import { Card } from "semantic-ui-react";

const Doctor = (props) => {
  const {doctor} = props;
  return (
    <Card>
      <Card.Content>
      <p>Doctor: {doctor.name} </p>
      <p>Specialty: {doctor.specialty}</p>
      </Card.Content>
    </Card>
  )
}

export default Doctor;