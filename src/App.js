import { makeStyles } from "@material-ui/core";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { MyWork } from "./Components/MyWork";
import { Navbar } from "./Components/Navbar";
import { Skills } from "./Components/Skills";

function App() {
  const classes = useStyles();


  return (

     <div className={classes.root}>
    <Navbar/> 
    <About title="About me" id="about" variant="h6" className={classes.tittle}/>
    <Skills title="My Skills" id="skills" className={classes.tittles2} />
    <MyWork title="My work" id="work" className={classes.tittle} />
    <Contact title="Get in touch" id="contact" dark={false} className={classes.tittle}/>
    </div> 
  );
}

const useStyles = makeStyles((theme) =>({
  root:{
    padding: "auto",
    margin: "0",

  },
  tittle: {
    font: "1000px",
    color:"#ffff"
  },
  tittles2: {
      
  }
}))

export default App;
