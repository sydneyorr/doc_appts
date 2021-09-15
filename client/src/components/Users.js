import axios from "axios";
import React, { useEffect, useState } from "react"
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=> {
    getUsers()
  }, [])

  const getUsers = async () => {
    try {
      let res = await axios.get("/api/users");
      setUsers(res.data)
    } catch (err) {

    }
  }
  return (
    <div>
      <h1>Users</h1>
      {users.map((user)=> {
        return (
          <User user={user} />
        )
      }
      )}
    </div>
  )
}

export default Users