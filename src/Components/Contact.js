import { makeStyles, Paper, Radio, TextField, Typography, Button} from '@material-ui/core';
import React, {useState} from 'react'
import image1 from "../images/fondo2.jpg";

export const Contact = ({title, dark, id}) => {
  const classes = useStyles();
  const [value, setValue] = useState("Say Hi")

  const handleChange = (e) => {
    setValue(e.target.value)
  }
    return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
          <Typography className={classes.conta}  variant="h3">{title} </Typography>
        <Paper className={classes.root}>
          <div className={classes.titleandchoices}>
          <Typography variant="h5">Contact me 📞</Typography>
          <div className={classes.choices}>
            <span>Say Hello</span>
            <Radio 
            value="Say Hi"
            checked={value === "Say Hi"}
            color="primary"
            onChange={handleChange}
            />
            <span>Get a Quote</span>
            <Radio 
            value="Get a Quote"
            checked={value === "Get a Quote"}
            color="primary"
            onChange={handleChange}
            />
          </div>
          </div>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField label="Your name"/>
            <TextField label="Your e-mail"/>
            {
              value === "Get a Quote" ? (
              <>
              <TextField label="Needed Services"/>
            <TextField label="Estimated Budget"/>
              </>
              ) : null
            }
            <TextField label="Write a message"/>
          </form>
          <Button variant="contained">Submit</Button>
        </Paper>
        </div>
      </div>
  )
}


const useStyles = makeStyles((theme) =>({
  section:{
    backgroundImage: `url(${image1})`,
    backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        height: '110vh',
        weight : '100vh',
        display: "grid",
    placeContent: "center",
   
  },
  sectiondark:{
    background: "#4AA0D5",
    color: "#fff",
  },
  conta:{
    fontSize: "30px",
    color: "#fff",
    fontWeight: 600,
    display: "grid",
    placeContent: "center",

  },
  root:{
    marginTop: theme.spacing(4),
    background: "#316192",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: theme.spacing(4),
    "& button":{
      backgroundColor: "#fff",
      color: "#316192",
      fontWeight: 900,
      fontSize: "1.2rem",
      marginTop: theme.spacing(4)
    },
    "& button:hover":{
      backgroundColor: [500],
      color: "#fff",
    }
  },
  sectioncontent: {
    maxWidth: "80vw",
    fontSize: "1.2rem",
    display: "grid",
    placeContent: "center",
  },
  titleandchoices: {
   "& h5": {
    marginTop: theme.spacing(1),
   }    
  },
  form: {
    display: "flex",
    flexDirection: "column",
    "& input":{
      marginBottom: theme.spacing(1)
    }
  }
}))