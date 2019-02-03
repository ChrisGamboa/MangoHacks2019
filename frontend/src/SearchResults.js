import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import LinkIcon from '@material-ui/icons/Link';
import ButtonAppBar from './ButtonAppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

const axios = require('axios');

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

class SearchResults extends Component {

  //states
  constructor(props) {
    super(props);

    this.state = {
      listoflinks: [],
      searchString: ''
    };
  }

  //fetch data
  // async componentDidMount() {
  //   const {data} = await axios({
  //     method: 'get',
  //     url: 'http://localhost:3000/'
  //   })
  //   console.log(data)
  // }

  

  async componentDidMount(){

    const searchId = this.props.match.params.id
    this.state.searchString = searchId
    console.log(searchId)
    await axios.get(`http://localhost:3001/${searchId}`)
    .then(res => {
      const { data: listoflinks } = res;
      console.log(listoflinks)
      this.setState({listoflinks});
      console.log(this.state)
    })
  }

  render() {
    return (
      <div className="SearchResults">
      <ButtonAppBar></ButtonAppBar>
        <h1 style={{color: 'white'}}>Search Results for "{this.props.match.params.id}"</h1>

        {
          this.state.listoflinks.map((link, key) => {
            return(
          <Card key={key} style={{width: 300, margin: 20, display: 'inline-block'}}>
          <CardContent>
            <Typography style={{fontSize: 25, color: 'black'}}>Machine Learning Fundamentals</Typography>
            <Typography style={{color: 'gray', fontSize: 23}}>edX</Typography>
            <Typography style={{color: 'black', fontSize: 20}}>$350</Typography>
            <Typography style={{color: 'black', fontSize: 20}}>8–10 hours</Typography>
            <a href={link} target="_blank"><Button variant="contained" color="primary">Visit Website</Button></a>
          </CardContent>
          </Card>
            )
          })
        }

        {/* <Card style={{width: 500}}>
          <CardContent>
            <Typography style={{fontSize: 25, color: 'black'}}>Machine Learning Fundamentals</Typography>
            <Typography style={{color: 'gray', fontSize: 23}}>edX</Typography>
            <Typography style={{color: 'black', fontSize: 20}}>$350</Typography>
            <Typography style={{color: 'black', fontSize: 20}}>8–10 hours</Typography>
            <Button variant="contained" color="primary">Visit Website</Button>
          </CardContent>
        </Card> */}
        

        {/* <List>
        {
          this.state.listoflinks.map((link, key) => {
            return (
              <ListItem key={key}>
              <ListItemText primary={link} />
              <ListItemSecondaryAction>
              <IconButton aria-label="Info">
                <InfoIcon />
              </IconButton>
              <a href={link}>
                <IconButton aria-label="Link">
                  <LinkIcon />
                </IconButton>
              </a>
              </ListItemSecondaryAction>
            </ListItem>
            )
          })
        }
        </List> */}
      </div>
    );
  }
}

export default SearchResults;
