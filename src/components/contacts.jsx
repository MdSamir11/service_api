import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import DeleteIcon from '@mui/icons-material/Delete';
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Edit } from "@mui/icons-material";
import {Link,useHistory} from 'react-router-dom';
import { BounceLoader } from "react-spinners";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  // const history = useHistory(); 
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#089bab",
    color: theme.palette.common.white,
    textAlign:'center'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const Contacts = () => {
  const [contact,setContact] = useState([]);
  const history=useHistory()
  useEffect(async() => {
    var token = localStorage.getItem("Token");
    console.log("token-->",token);
    axios({
      method: 'get',
      url: 'http://54.219.23.63:3000/serviceapp/api/customer',
      headers: {'x-access-token': token}
    }).then(res=>{
      console.log(res.data.response);
      setContact(res.data.response)
    }).catch((err)=>{
      console.log(err)
    });
  }, []);
  const logout = () =>{
    var tCnfrm= window.confirm("Are yoy sure want to log Out");
    if(!tCnfrm)
    { 
      return;
    }
    console.log("Logout")
    localStorage.clear();
    history.push("/")
  }
  return (
    <Container style={{ padding: "4em" }}>
      <h1 className="text-center">Contact Details       <button type="button" className="btn btn-danger" onClick={logout} style={{float:'right'}}>Logout</button></h1> 
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Serial No</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">emailid</StyledTableCell>
              <StyledTableCell align="right">City</StyledTableCell>
              <StyledTableCell align="right">Contact</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contact.map((user,index) => {
              return(
                user.customercode?
              <StyledTableRow key={user.customercode}>
                <StyledTableCell component="th" align="center" scope="row">
                  {index+1}
                </StyledTableCell>
                <StyledTableCell align="center">{user.customername?user.customername:''}</StyledTableCell>
                <StyledTableCell align="center">{user.emailid?user.emailid:''}</StyledTableCell>
                <StyledTableCell align="center">{user.location?user.location:''}</StyledTableCell>
                <StyledTableCell align="center">{user.contactno?user.contactno:''}</StyledTableCell>
              </StyledTableRow>:''
            )})}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
