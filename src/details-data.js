import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
 
  },
  styleHead:{
      height: 70,
      backgroundColor: "#f5f5f0",
  },
  styleRow:{
      height: 60
  }
});

function createData(name, calories, fat) {
  return { name, calories, fat};
}

const rows = [
createData('-0b77d529e27d55ec0', '-', '172.31.31.116'),
  
];

export default function DetailsTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table" >
        <TableHead>
          <TableRow className={classes.styleHead} >
            <TableCell>Instance ID</TableCell>
            <TableCell >Public IPv4 address</TableCell>
            <TableCell >Private IPv4 addresses</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} className={classes.styleRow}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell  >{row.calories}</TableCell>
              <TableCell  >{row.fat}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
