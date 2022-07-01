import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  card1: {
    borderRadius: "20px",
  },
  form_control: {
    height: "2rem",
    width: "95%",
    lineHeight: "40px",
    background: "transparent",
    border: "1px solid #d7dbda",
    fontSize: "14px",
    color: "#a09e9e",
    borderRadius: "10px",
    paddingLeft: "0 0 20px 0",
    "&:focus":{
      outline:"none",
    },
  },
  label: {
    color: "#3f414d",
    fontWeight: "normal",
    padding: "1% 0 1% 3%",
  },
  button: {
    display: "block",
    width: "100%",
    height: "2rem",
    backgroundColor: "#089bab",
    border: "none",
    borderRadius: "10px",
    color: "#ffffff",
    fontSize: "1rem",
    "&:focus":{
      outline:'none'
    },
  },
  // template
  container: {
    paddingLeft: "25em",
    paddingRight: "25em",
    paddingTop: "5em",
    [theme.breakpoints.down("sm")]: {
      padding: 7,
    },
  },
  form_control: {
    height: "2.5rem",
    width: "100%",
    lineHeight: "45px",
    background: "transparent",
    border: "1px solid #d7dbda",
    fontSize: "14px",
    color: "#a09e9e",
    borderRadius: "10px",
    paddingLeft: "15px",
    fontSize:'15px',
    "&:focus":{
      border:"1px solid #3f51b5",
      outline:'none'
    },
  },
  heading:{
    color: "#3f414d",fontSize: "2rem",textAlign: "center",
  },
  label: {
    color: "#3f414d",
    fontWeight: "normal",
    padding: "1% 0 1% 3%",
    float:'left'
  },
  division: {
    paddingTop: theme.spacing(3),
  },
  button: {
    display: "block",
    width: "100%",
    height: "2rem",
    backgroundColor: "#089bab",
    border: "none",
    borderRadius: "10px",
    color: "#ffffff",
    fontSize: "1rem",
    "&:focus":{
      outline:'none'
    },
  },
}));

export default styles;
