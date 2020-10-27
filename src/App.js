import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';
import gucci from './guccigucci.jpg';
import wu from './wu.jpg';
import kn from './kobe-nippsey.jpg';
import pc from './pimp.jpg';
import uwu from './rei.jpg';
import misato from './misato.jpeg';
import ld from './young-LD.png';
import akarin from './akari.jpg';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "grey"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.50)), 
    url('https://images.unsplash.com/photo-1575426220089-9e2ef7b0c9f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`,
    height: "700px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#f44336",
    fontSize: "4em",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      fontSize: "4em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "auto",
  },
  media: {
    height: 230
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="red" >
            So Icy Blog Entertainment!
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>Hip Hop Blogspot</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h3" className={classes.blogTitle}>
          Articles
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={gucci}
                  title="El Gato The Human Glacier"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Gucci Two Times
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Gucci go so hard some times I be like god damn where I get all those lines flow so fuckin crazy
                    I dun lost my mind, I'm icy as a POLAR BEAR look i am not lyin
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src={misato} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Misato
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      March 22, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={wu}
                  title="36 Chambers of Death"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    36 Chambers of Death Kid
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Three Hundred and Sixty Degrees of prefected styles.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src={uwu}/>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Rei
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      March 03, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={kn}
                  title="The most underrated."
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Mamba Mentality
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  “We psyche ourselves up too much. Like if you try to talk yourself into, ‘Oh, this is a big moment,
                   this is a big shot,’ you’re putting a lot of pressure on yourself. 
                   You shot that shot hundreds and thousands of times. Just shoot another one.” 
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src={akarin} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Akarin
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      April 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={pc}
                  title="UGK"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Big Pimpin'
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Big paper I'm foldin' Hoes is on my mutherfuckin' jock
                    For all this dick I be holdin'
                    His lyricism, creativity and flow went off to reach whole new levels, and the verse is still, to this day, used to measure up against Bun B’s new material. 
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src={ld} />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Young LD
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Oct 26, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </div>
  );
}
export default App;