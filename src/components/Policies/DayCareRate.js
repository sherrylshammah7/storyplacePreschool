import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
   fontSize:'16px',
   color:'#A456BB',
   fontWeight: 'bold',
   fontstyle: 'italic',
   textDecorationLine: 'underline',
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(days, monthlyrate) {
  return { days, monthlyrate};
}
function createData1(days,beforerate, afterrate) {
    return { days,  beforerate, afterrate };
  }

const rows = [
  createData('5 Days','$800.00'),
  createData('3 Days','$575.00'),
  createData('2 Days','$440.00'),
  createData('1 Day','NA'),
];

const rows1 = [
    createData1('5 Days','$250.00','$400.00'),
    createData1('3 Days','$180.00','$300.00'),
    createData1('2 Days','$120.00','$225.00'),
    createData1('1 Day','$30.00','$50.00'),
  ];

  const rows2 = [
    createData('5 Days','$1250.00'),
    createData('3 Days','$950.00'),
    createData('2 Days','$700.00'),
    createData('1 Day','NA'),
  ];

const useStyles = makeStyles({
  table: {
    width:'100%',
    border:'2px solid #E5CFEB',
    fontSize:16
  },
  tableheading:{
    textAlign:'center',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize:16
  },
  font:{
    fontSize:18
  }
});

export default function DayCareRate() {
  const classes = useStyles();

  return (
      <div>
          <Card>
              <CardContent>
                  <p></p>
            <Typography className={classes.font}>
            Our number one priority has always been and always will be providing quality and
               affordable childcare for families in our community. As you will see in the chart below,
                children who are enrolled in the full day program will receive a Full Time Discounted Rate.
If you have any questions or concerns, please feel free to contact us.
            </Typography>
            
             
              <div><p></p></div>
              <div><p></p></div>
              <Typography className={classes.tableheading}>
              PRESCHOOL: (9AM-2:00 PM)
            </Typography>
            <div><p></p></div>
              <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Days</StyledTableCell>
            <StyledTableCell align="center">Monthly Rate</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.days}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.days}
              </StyledTableCell>
              <StyledTableCell align="center">{row.monthlyrate}</StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
              </CardContent>
                   </Card>
                    <Card>
              <CardContent>
              <div><p></p></div>
              <div><p></p></div>
              <Typography className={classes.tableheading}>
              PRESCHOOL BEFORE and AFTER CARE: (Before Care 7:00 am-9:00 am After Care 2:00 pm-5:00 pm)
            </Typography>
            <div><p></p></div>
              <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Days</StyledTableCell>
            <StyledTableCell align="center">Before Care Rate</StyledTableCell>
            <StyledTableCell align="center">After Care Rate</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows1.map((row) => (
            <StyledTableRow key={row.days}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.days}
              </StyledTableCell>
              <StyledTableCell align="center">{row.beforerate}</StyledTableCell>
              <StyledTableCell align="center">{row.afterrate}</StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
              </CardContent>
                 </Card>
          <Card>
              <CardContent>             
              <div><p></p></div>
              <div><p></p></div>
              <Typography className={classes.tableheading}>
              FULL DAY OPTION DISCOUNTED RATE: (7:00 am-5:00 pm)
            </Typography>
            <div><p></p></div>
              <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Days</StyledTableCell>
            <StyledTableCell align="center">Monthly Rate</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map((row) => (
            <StyledTableRow key={row.days}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.days}
              </StyledTableCell>
              <StyledTableCell align="center">{row.monthlyrate}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
              </CardContent>
                   </Card>
      </div>
    
  );
}
