import { makeStyles, Typography} from '@material-ui/core';
import React from 'react'
import Technologies from '../Components/Tecnologies.js'
import image1 from "../images/fondo2.jpg";
import cloud from "../images/cloud.gif";
import design from "../images/design.gif";
import pivate from "../images/pivate.gif";
import serve from "../images/server.gif";

export const Skills = ({title, dark, id}) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
        <div className={classes.sectioncontent} variant="h3"id={id}>
          <Typography className={classes.skil}>{title}</Typography> 
          <Typography className={classes.car}>
            <Typography className={classes.gif}> Other Skills:
            <img className={classes.ico}src={cloud} alt="cloud"></img>
         <img className={classes.ico}src={design} alt="design"></img>
         <img className={classes.ico}src={pivate} alt="pivate"></img>
         <img className={classes.ico}src={serve} alt="server"></img></Typography>
          </Typography>
         <Technologies className={classes.titles2}/>
        </div>  
      </div>
  )
}


const useStyles = makeStyles((theme) =>({
  section:{
    backgroundImage: `url(${image1})`,
    position: "abosulte",
    backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        height: '110vh',
        weight : '100vh'
  },
  sectiondark:{
    color: "#fff",
    
  },
    card:{
      height: "40vh",
      weight: "4vh",
      color: "#333",
      marginTop: theme.spacing(6),
      
    },
  sectioncontent:{
    maxWidth: "80vw",
    color: "#fff",
    padding: theme.spacing(5),
    "& h3": {
      color: "#316192",
      [theme.breakpoints.down("sm")]:{
          display: "none"
        }
      }
  
  },
  skil:{
     display: "grid",
     placeContent: "center",
    fontSize: "30px",
    left: "550px",
    position: "center",
    fontWeight: 600,
    marginTop: "10px",
  },
  gif: {
    placeContent: "center",
    borderRadius: "10px",
    left: "450px",
    marginTop: "10px",
    fontSize: "20px",
    fontWeight: 600
  },
  ico: {
    position: "relative",
    width: "50px",
    top: "15px"
  },
  car: {
    display: "grid",
     placeContent: "center",
     opacity: "60",

  }
}))