import axios from "axios";
import React, { useEffect, useState } from "react"
import { Card, List } from "semantic-ui-react";
import useAxiosOnMount from "./Hooks/useAxiosOnMount";
import ListLoader from "./ListLoader";
import User from "./User";

const Users = () => {
  // const {data: users, loading, error } = useAxiosOnMount("/api/users");

  // const renderUsers = () => {
  //   console.log(users)
  //   return users.map((user)=> {
  //       return (
  //         <User user={user} />
  //       )
  //     }
  //     )
  // }
  // return (
  //   <div>
  //     <h1>Users</h1>
  //     {renderUsers()}
  //   </div>
  // )
  return (
    <div>
      <ListLoader 
      header={"Users"}
      url="/api/users"
      renderData={(user)=> {
        return (
          <Card>
            {user.name}
          </Card>
        )
      }}
      />
    </div>
  )
}

export default Users