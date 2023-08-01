import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import dayjs from 'dayjs';

const Appointments = ({ date }) => {
    // Data load for login users 
    const {user} = useAuth();
     // More appointments, default value array
    const [appointments, setAppointments] = useState([]); 

    const dateWithFormat = dayjs(date).format('DD/MM/YYYY')
    

    // For data load used useEffect 
    useEffect(() => {
        const url = `http://localhost:5000/appointments?email=${user.email}&date=${dateWithFormat}`;
        fetch(url)
            .then( res => res.json())
            .then( data => setAppointments(data));

    }, [date, user.email, dateWithFormat]);

    return (
        <>
        <h2>Appointments : {appointments.length}</h2>

        <TableContainer component={Paper}>
      <Table aria-label="Appointments Table">
        <TableHead>
          <TableRow>
            <TableCell> Name </TableCell>
            <TableCell align="right">Time </TableCell>
            <TableCell align="right">Service </TableCell>
            <TableCell align="right"> Action </TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patientName} 
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.serviceName}</TableCell> 
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    );
};

export default Appointments;