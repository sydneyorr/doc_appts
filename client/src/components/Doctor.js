import React from "react"
import { Button, Card } from "semantic-ui-react";

const Doctor = (props) => {
  const {doctor, deleteDoctor} = props;
  return (
    <Card>
      <Card.Content>
      <p>Doctor: {doctor.name} </p>
      <Button onClick={()=>{deleteDoctor(doctor.id)}} color="red">Delete</Button>
      </Card.Content>
    </Card>
  )
}

export default Doctor;