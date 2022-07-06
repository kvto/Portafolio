import { Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator} from '@material-ui/lab';
import javaicono from '../images/javaicono.png';
import javascripticono from '../images/javascripticono.png';
import postgreicono from '../images/postgresicono.png';
import reacticono from '../images/reacticono.png';
import reduxicono from '../images/redux.png';
import { makeStyles, Paper, Typography} from '@material-ui/core';
import StarRating from '../Components/StarRating'
export const Tecnologies = () => {
const classes = useStyles()
    const skills = [
        {
            year: "2016",
            src: javaicono,
            titles: "Java",
            stars: 4,
        },
        {
            year: "2016",
            src: postgreicono,
            titles: "PostgresSQL",
            stars: 5,
        },
        {
            year: "2019",
            src: javascripticono,
            titles: "Javascript ES6",
            stars: 5,
        },
        {
            year: "2020",
            src: reacticono,
            titles: "React Js",
            stars: 5,
        },
        {
            year: "2020",
            src: reduxicono,
            titles: "Redux",
            stars: 5,
        },
    ]
  return (
    <Timeline align="center" className={classes.timeline}>
        {
            skills.map(({year, src, titles, stars},index)=>(
                <TimelineItem key={index}>
                    <TimelineOppositeContent>
                        <Typography className={classes.timeline}variant="h6" color="#316192">
                            {year}
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                         <img src = {src} alt={titles}  className={classes.customlogo}></img>   
                    <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={8} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                 {titles}                           
                            </Typography>
                            <StarRating variant="h6"stars={stars}/>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            ))
        }
        </Timeline>
  )
}

const useStyles = makeStyles((theme) =>({
    customlogo:{
      width: "45px",
      marginTop: "10px"
    },
    paper:{
        padding: "6px 14px",
        maxWidth: "150px",
        background: "#316192",
        "& h6": {
            color: "#316192",
            [theme.breakpoints.down("sm")]:{
                
              }
            }
    },
    timeline:{
        marginTop: theme.spacing(5),
        marginLeft: "-20px",
        "& h6": {
            color: "#316192",
            [theme.breakpoints.down("sm")]:{
                minWidth: "20px",
              }
            }
          },
  }))

export default Tecnologies
