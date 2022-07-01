import { Card, CardContent, Container } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "../style/Styles.styles";
import {Link} from 'react-router-dom';

export const AddContact = () => {
  // const history=useHistory();
  const classes = styles();
  var allPhones =[];
  const [contacts, setContacts] = useState([]);
  const [inputField, setInputField] = useState({ username: "", password: "" });
  const [view, setView] = useState(false);
  const [usernameValidation,setuserNameValidation] = useState();
  const [passwordValidation,setPasswordValidation] = useState();
  var history = useHistory();
  
  let name, value;
  const inputHandler = (e) => {
    e.preventDefault();
    setuserNameValidation(false);
    setPasswordValidation(false);
    name = e.target.name;
    value = e.target.value;
    setInputField({ ...inputField, [name]: value });
    if(inputField.phone && inputField.phone.length>4){
      for(var elem of contacts)
      {
        if(elem.phone.includes(inputField.phone))
        {
          console.log("Exist")
          setView(true);
        }else{
          console.log("Not exist")
          // setView(false);
        }
      }}
  };
  // useEffect(async() => {
  //   const header ={
  //     "Accept":"*/*",
  //     "Accept-Encoding":"gzib,deflate,br",
  //     "Connection":"keep-alive",
  //     "x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjU2NTY5MTA0LCJleHAiOjE2NTY2NTU1MDR9.qYmELN-CJbXcvxmuXFiNwdMLFMbNfruosluCQsCnj6o"
  //   }
  //   axios.get("http://54.219.23.63:3000/serviceapp/api/customer",header)
  //     .then(res=>{
  //       console.log("48-->",res)
  //     })
  // }, []);
  const submit = async (e) => {
    e.preventDefault();
    console.log("28-->",inputField);
    console.log(contacts);
    if(inputField.username ==="" && inputField.password==="")
    {
      setuserNameValidation(true);
      setPasswordValidation(true);
      return;
    }
    if(inputField.username ==="")
    {
      setuserNameValidation(true);
      return;
    }
    if(inputField.password ==="")
    {
      setPasswordValidation(true);
      return;
    }
      await axios
        .post("http://54.219.23.63:3000/serviceapp/api/techniciansignin", inputField)
        .then((res) => {
          if (res.data.accessToken) {
            localStorage.setItem("Token",res.data.accessToken)
            alert("Login Success");
            history.push("/all-contacts")
          } else {
            alert("Something went wrong");
          }
        });
  };
  return (
    <>
      <Container className={classes.container}>
        <Card className={classes.card1}>
          <CardContent className={classes.content}>
            <p className={classes.heading}>Login</p>
            <label htmlFor="username" className={classes.label}>
              Username:
            </label>
            <input type="text" name="username" className={classes.form_control} onChange={inputHandler} value={inputField.username}
            /><br />
            {usernameValidation?<p className="text-danger">This field is required</p>:""}
            <div className={classes.division}>
              <label htmlFor="password" className={classes.label}>
                Password:
              </label>
              <input type="password" name="password" className={classes.form_control} onChange={inputHandler} value={inputField.password}
              />
              <br />
              {passwordValidation?<p className="text-danger">This field is required</p>:""}
            </div>
            <div className={classes.division}>
              <button className={classes.button} onClick={submit} disabled={usernameValidation || passwordValidation}>
                Sign In
              </button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};
