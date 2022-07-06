import { makeStyles, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';
import React from 'react'
import kevin from "../images/perfil.jpg";
import TypeWriterEffect from "react-typewriter-effect"
import pdf from "../images/CVKMFinal.pdf";
import image from "../images/fondo2.jpg";
import cine from "../images/cinema.gif";
import gaming from "../images/gaming.gif";
import healthy from "../images/healthy.gif";
import music from "../images/music.gif";
import sports from "../images/sports.gif";

export const About = ({title, dark, id}) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
        <div className={classes.sectioncontent} id={id}>
          <Typography className={classes.about} variant="h3">{title} 
         <Typography className={classes.gif}> 
         <Typography className={classes.car}>Hobbies:
         <img className={classes.ico}src={cine} alt="cine"></img>
         <img className={classes.ico}src={gaming} alt="gaming"></img>
         <img className={classes.ico}src={healthy} alt="healthy"></img>
         <img className={classes.ico}src={music} alt="music"></img>
         <img className={classes.ico}src={sports} alt="sports"></img> 
         </Typography>
         </Typography> 
         </Typography>
          <Card className={classes.card}>
            <CardMedia image={kevin} className={classes.cardmedia} title="picture"/>
            <CardContent className={classes.cardcontent}>
              <TypeWriterEffect variante="h3" className={classes.type}
                text="Hi, my name is Kevin Montero"
                textStyle={{fontSize: "1.6rem" ,fontWeight: "700px", color:"#4AA0D5"}}
                startDelay={100}
                cursoColor="black"
                typeSpeed={100}
              />
              <TypeWriterEffect className={classes.type}
                text="and I'm an Engineer of Systems"
                textStyle={{fontSize: "1.8rem",fontWeight: "700px", color:"#4AA0D5"}}
                startDelay={100}
                cursoColor="black"
                typeSpeed={100}
              />
              <Typography variant="h6" color="textSecondary">
              <Typography variant="h5" color="textSecondary">
               Systems engineer with capacity to 
              work as a team, proactive and with great
              tolerance for work under pressure.
              </Typography>
              <Typography variant="h5" color="textSecondary">
              Highly
              trained to perform well
              Responsible and with a great desire to excel.
              </Typography>
              <Typography variant="h5" color="textSecondary">
              I have experience in database management.
              SQL data, creation of web pages, management of
              Backend and Frontend
              </Typography>
              <Typography variant="h5" color="textSecondary">
              Using Javascript, HTML,
              React, Rebux, Nodejs, Sequelize; like
              knowledge in Wordpress
              </Typography>
              <Typography variant="h5" color="textSecondary">
              Through templates
              like Divi, Flatsome, I also have
              Basic knowledge in graphic design.
              </Typography>
              </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" className={classes.pdfbutton}>
                  <a href={pdf} download>
                     Download CV
                  </a>
                </Button>
            </CardActions>
          </Card>
        </div>
      </div>
  )
}



const useStyles = makeStyles((theme) =>({
  about:{
    fontSize: "30px",
    color: "#fff",
    fontWeight: 600,
    display: "grid",
    placeContent: "center",
    
   
  },  
  gif: {
    position: "center",
    borderRadius: "10px",
    left: "590px",
    marginTop: "5px",
    fontSize: "20px",
    fontWeight: 600,
    display: "grid",
     placeContent: "center",
     
  },
  ico: {
    position: "relative",
    width: "50px",
    top: "15px"
  },
  section:{
    backgroundImage: `url(${image})`,
    position: "abosulte",
    backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        height: '110vh',
        weight : '100vh'
    
    },
    sectiondark:{
      background: "#333",
      color: "#fff",
    },
    sectioncontent:{
      maxWidth: "80vw",
      margin: "0 auto",
      padding: theme.spacing(5)
    },
    cardmedia:{
      width: "250px",
      height: "auto",
      objectFit: "cover",
      borderRadius: "10px",
      margin: theme.spacing(5),
    },

    cardcontent:{
      marginTop: theme.spacing(3),
      "& h6": {
        marginTop: theme.spacing(3),
        fontSize: "0.4rem",
        [theme.breakpoints.down("sm")]:{
          display: "none",
        }
      },
        "& h5": {
          marginTop: theme.spacing(0.5),
          fontSize: "0.9rem",
          [theme.breakpoints.down("sm")]:{
            display: "none",
          },
      },
      
    },
    card:{
      height: "70vh",
      display: "flex",
      marginTop: theme.spacing(6),
      position: "relative",

    },
    pdfbutton:{
      position: "absolute",
      bottom: "5rem",
      right: "4rem",
      border: "2px solid",
      cursor: "pointer",
      
      [theme.breakpoints.down("sm")]:{
        bottom: "2rem",
        right: "1rem",
        height: "20px",
        weigth: "5px",
        fontSize: "10px"
      },
      background: "#4AA0D5",
      padding: theme.spacing(3),
      "&:hover":{
        background: "#333",
      },
      "& a":{
        color: "#fff",
        textDecoration: "none",
        fontWeight: 900,

      },
      "& a:hover":{
        color: "#4AA0D5"
      }
    }, 
    type:{
      "& h3":{
        [theme.breakpoints.down("sm")]:{
          fontSize: "0px"
        }
       }
    }
  }))