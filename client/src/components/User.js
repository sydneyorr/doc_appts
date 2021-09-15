import React from "react"
import { Card, CardContent } from "semantic-ui-react"

const User = (props) => {
  const {user} = props;
  return (
    <Card>
      <Card.Content>
        <p>{user.name}</p>
      </Card.Content>
    </Card>
  )
}

export default User