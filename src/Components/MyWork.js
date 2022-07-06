import { Link, makeStyles, Typography, Grid, CardContent,Card, CardMedia } from '@material-ui/core'
import mockData from "../mockData"
import image1 from "../images/fondo2.jpg";


export const MyWork = ({title, dark, id}) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
          <Typography className={classes.skil} variant="h3">{title} </Typography>
          <Grid container className={classes.grid}>
            {
              mockData.map(({tittle,image,link}, index)=>(
                <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia image={image} className={classes.cover} titulo="cover"/>
                  <CardContent>
                    <Link href={link} color ="primary" target="_blank" rel="noopener noreferrer">
                      {tittle}
                    </Link>
                  </CardContent>
                </Card>
                </Grid>

              ))
            }
          </Grid>
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
    background: "#333",
    color: "#fff",
  },
  sectioncontent:{
    maxWidth: "80vw",
    margin: "0 auto",
    padding: theme.spacing(5)
    
  },
  grid:{
    marginTop: theme.spacing(10)
  },
  card: {
    maxWidth: 345,
    minHeight: 275,
    margin: theme.spacing(3),
  },

  cover:{
    height: 20,
    paddingTop: '56.25%',
  },
  skil:{
    fontSize: "30px",
    color: "#fff",
    fontWeight: 600,
    display: "grid",
    placeContent: "center",
  }
}))