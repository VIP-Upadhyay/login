import React, { useState } from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from '../Components/login'
import Signup from '../Components/Signup'
import HomePage from '../Components/HomePage';
const SignInOutContainer = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }
    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const paperStyle = { width: 340, margin: "20px auto" }
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }
    return (
    <div>
        {isLoggedIn ? (
         <HomePage handleLogout={handleLogout}  />
         ) : (
        <div>   
        <h1 align='center'>Health Insurance Portal</h1>
        <Paper elevation={20} style={paperStyle}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                aria-label="disabled tabs example"
            >
                <Tab label="Login" />
                <Tab label="Sign Up" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Login handleLogin={handleLogin} handleChange={handleChange} />
            </TabPanel>

            <TabPanel value={value} index={1}>
                <Signup />
            </TabPanel>
        </Paper>
        </div>
        )}
    </div>
        
    )
}
export default SignInOutContainer;