import { Card, CardHeader, Checkbox, CardContent, FormControlLabel, TextField, Typography, InputLabel, Select, MenuItem, CardActions, Button } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';

import React from 'react'
import Navbar from '../Navbar/Navbar';

const NewUser = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Typography variant='h2' >Create New User </Typography>
        <div className='card'>
          <div className='card-header'>
            <h2> New Employee Registration Form</h2>
          </div>
          <div className='card-body row'>
            <div className='col-6'>

              <TextField variant='standard' fullWidth placeholder='Employee Name' label='Employee Name' margin='dense' />
              <TextField variant='standard' fullWidth placeholder='Employee Address' label='Employee Address' margin='dense' />
              <TextField variant='standard' fullWidth placeholder='Area' label='Area' margin='dense' />
              <TextField variant='standard' fullWidth placeholder='City' label='City' margin='dense' />
              <TextField variant='standard' type={'number'} fullWidth placeholder='Contact Number' label='Contact Number' margin='dense' />

              <TextField variant='standard' type={'number'} fullWidth placeholder='Branch' label='Branch' margin='dense' />
              <TextField variant='standard' type={'number'} fullWidth placeholder='Type' label='Type' margin='dense' />
            </div>
            <div className='col-6'>
              <div className='me-5'>
                <Card>
                  <CardHeader title="Login Details">


                  </CardHeader>
                  <CardContent>
                    <FormControlLabel
                      label="Give Access to Software"
                      control={
                        <Checkbox color='info' label="some levl" />} />
                    <TextField variant='standard' fullWidth label={'Username'} margin='normal' />
                    <TextField variant='standard' type={'password'} fullWidth label={'Password'} margin='normal' />
                    <TextField variant='standard' type={'password'} fullWidth label={'Recovery Code'} margin='normal' />
                    <InputLabel id="demo-simple-select-label">User Type</InputLabel>

                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      variant='standard'
                      label="Age"
                      fullWidth
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </CardContent>
                  <CardActions>
                    <Button variant='contained' startIcon={<SaveIcon />} >Save</Button>
                  </CardActions>

                </Card>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default NewUser
