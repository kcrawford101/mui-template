import React from "react";
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';

function Login() {

    const paperStyle={padding: 20, height: 'fit-content', width: 400, margin: '20px auto'}
    const avatarStyle={backgroundColor: 'green'}
    const btnStyle={margin:'8px 0'}

    return(

        <Grid>            
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>                                
                <h2>Sign In</h2>
                </Grid>
                <TextField label='Email' placeholder='Enter Email' fullWidth required/>
                <TextField label='Password' placeholder='Enter Password' type='password'fullWidth required/>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Remember me" />                    
                </FormGroup>
                <Button type='submit' color='primary' variant='contained' style={btnStyle} fullWidth>Sign In</Button>
                <Typography align='center'><Link href="#" >Forgot my password</Link></Typography>
            </Paper>
        </Grid>
    )
};

export default Login;