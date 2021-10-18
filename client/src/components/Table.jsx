import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Divider } from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('All content', <CheckRoundedIcon fontSize='large'/> , <CheckRoundedIcon fontSize='large'/>),
  createData('Watch on TV or Laptop', <CheckRoundedIcon fontSize='large'/>, <CheckRoundedIcon fontSize='large'/>),
  createData('Ads free movies and shows (except sports)', <ClearRoundedIcon fontSize='large'/> , <CheckRoundedIcon fontSize='large'/>),
  createData('Number of devices that can be logged in', 2, 4),
  createData('Max video quality', 'Full HD (1080p)', '4K (2160p)'),
  createData('Max audio quality', 'Dolby 5.1', 'Dolby 5.1'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} style={{
        backgroundColor:'transparent',
        color:'white',
    }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">Super</TableCell>
            <TableCell align="center">Premium</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
              <>
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
            </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
