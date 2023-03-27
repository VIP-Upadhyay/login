import React from 'react'
import { Typography } from '@material-ui/core'
import UserTable from './UserTable';
const HomePage = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  return (
    <div>
      <Typography variant='h3'>Welcome to our website!</Typography>
      <UserTable/>
    </div>
  )
}

export default HomePage;
