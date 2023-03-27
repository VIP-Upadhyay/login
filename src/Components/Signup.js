import { Checkbox, Avatar, Grid, Paper, TextField, Typography, Button, FormControl, RadioGroup, FormControlLabel, FormLabel } from '@material-ui/core';
import React, { useState } from 'react'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);

    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 10 }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            name: name,
            email: email,
            gender: gender,
            phoneNo: phone,
            password: password,
            //confirmPassword: confirmPassword,
            //acceptTerms: acceptTerms
        };
        const response = await fetch('http://localhost:8080/user/createUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            const result = await response.json();
            console.log(result);
            alert("User Register Successfully now you can login");
        } else {
            console.error(response.statusText);
        }
    }

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}> <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account!</Typography>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField fullWidth label='Name' placeholder="Enter Name" value={name} onChange={(event) => setName(event.target.value)} />

                    <TextField fullWidth label='Email' placeholder="Enter Email id" value={email} onChange={(event) => setEmail(event.target.value)} />

                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }} value={gender} onChange={(event) => setGender(event.target.value)}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Phone' value={phone} onChange={(event) => setPhone(event.target.value)} />
                    <TextField fullWidth label='Password' type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    <TextField fullWidth label='Confirm Password' type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
                    <FormControlLabel
                        control={<Checkbox  name="terms" checked={acceptTerms} onChange={() => setAcceptTerms(!acceptTerms)} label="I accept the terms and conditions." />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='Submit' variant='contained' color='primary'onClick={handleSubmit}>Sign Up</Button>
                </form>
            </Paper>
        </Grid>
    )
}
export default Signup;
