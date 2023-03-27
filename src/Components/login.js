import React, { useState } from 'react';
import { Avatar, Grid, Paper, TextField, Button, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Login = ({ handleLogin }) => {
  const paperStyle = { padding: 20, height: '73vh', width: 300, margin: "0 auto" };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnstyle = { margin: '8px 0' };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = { username: username, password: password };
    const response = await fetch('http://localhost:8080/api/authenticate?username='+data.username+'&password='+data.password, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        const result = await response.json();
        console.log(result);
        localStorage.setItem("token", result.token); // Store token in local storage
        handleLogin();
    } else {
        if(response.status == 403){
          alert("Invalid Username or Password");
        }
        console.error(response.statusText);
    }
  }

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
          <h2>Login</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField label='Username' placeholder=' Enter username' fullWidth required
            value={username} onChange={(e) => setUsername(e.target.value)} />
          <TextField label='Password' placeholder=' Enter password' type='password' fullWidth required
            value={password} onChange={(e) => setPassword(e.target.value)} />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Login</Button>
        </form>
        <Typography>
          <Link href="#" >
            Forgot password?
          </Link>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default Login;
