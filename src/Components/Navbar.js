import { AppBar, List, makeStyles, Toolbar, IconButton, Drawer, Divider, ListItem, ListItemIcon } from '@material-ui/core'
import logo from "../images/logo.png"
import {Link, animateScroll as scroll} from 'react-scroll'
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone"
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone'
import BuildTwoToneIcon from '@material-ui/icons/BuildTwoTone'
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone'
import MenuIcon from '@material-ui/icons/Menu';
import {useState} from 'react';
import CancelIcon from '@material-ui/icons/Cancel';

export const Navbar = () => {

  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const links = [
    {
      id: "about",
      text: "About me",
      icon: <InfoTwoToneIcon fontSize="large" className={classes.light}/>
    },
    {
      id: "skills",
      text: "Skills",
      icon: <EmojiObjectsTwoToneIcon fontSize="large" className={classes.light}/>
    },
    {
      id: "work",
      text: "My Work",
      icon: <BuildTwoToneIcon fontSize="large" className={classes.light}/>
    },
    {
      id: "contact",
      text: "Get in touch",
      icon: <ContactMailTwoToneIcon fontSize="large" className={classes.light}/>
    },
  ]
  const scrollToTop = () =>{
    scroll.scrollToTop()
  }
  return (
    <>
    <AppBar position="sticky" className={classes.root}>
      <Toolbar className={classes.tool}>
        <img 
        src={logo} 
        className={classes.logo} 
        alt='Logo'
        onclick={scrollToTop}
        />
        <List className={classes.menu}>
          {
            links.map(({id, text}, index)=>(
              <Link key={index} 
              to={id} 
              spy={true} 
              smooth={true} 
              activeClass="active" 
              duration={500} 
              offset={-70}>
              {text}
              </Link>
            ))
          }
        </List>
        <IconButton edge="ende" 
        className={classes.menubutton} 
        onClick={()=>setOpen(!open)}>

        <MenuIcon fontSize="large"/>  
        </IconButton>
        
      </Toolbar>
    </AppBar>
    <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
          <IconButton onClick={()=>setOpen(false)} className={classes.cancelicon}>
              <CancelIcon fontSize="large"/>
          </IconButton>
         <Divider />
         {
            links.map(({id, text, icon}, index)=>(
              <Link key={index} 
              className={classes.sidebar}
              to={id} 
              spy={true} 
              smooth={true} 
              activeClass="active" 
              duration={500} 
              offset={-70}>
              <ListItem component="h5">
                <spa>
                  <ListItemIcon>
                      {icon}
                  </ListItemIcon>
                </spa> {text}
              </ListItem>
              </Link>
            ))
          }
    </Drawer>
    </>
  )
}


const useStyles = makeStyles((theme) =>({
  root: {
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    overflow: "hidden"
  },
  logo:{
    height: "10vh",
    objectFit: "contain",
    "&:hover":{
      cursor: "pointer"
    }
  },
  tool:{
    background: "#454553",
    color: "#fff",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  menu:{
    [theme.breakpoints.down("sm")]:{
      display: "none",
      
  
    },
    "& a":{
        fontSize: "1.4rem",
        fontWeight: "bold",
        marginLeft: theme.spacing(3),
    },
    "& a:hover":{
        cursor: "pointer",
        color: "#4AA0D5",
        borderBottom: "3px solid #4AA0D5"
    },
  },
  menubutton:{
      display: "none",
      [theme.breakpoints.down("sm")]:{
        display: "block",
        color: "#4AA0D5",
        position: "absolute",
        top: 0,
        right: 10,
      }
  },
  cancelicon:{
    color: "#4AA0D5",
    position: "abosulte",
    top: 0,
    right: 10,

  },
  light:{
    color:"#4AA0D5"
  },
  sidebar:{
    width: "40vw",
    [theme.breakpoints.down("sm")]:{
      width: "60vw",
    },
    "& h5":{
      margin: theme.spacing(10, 0, 0, 4),
      fontSize: "1.4rem",
      color: "#333",
      fontWeight: "bold",
    },
    "& h5:hover":{
      color:"#4AA0D5",
      cursor: "pointer"
    }
  },
}))

export default Navbar;