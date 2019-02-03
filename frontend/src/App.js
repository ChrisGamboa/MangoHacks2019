import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class App extends Component {

   state = {
    checkedUdemy: true,
    checkedLynda: true,
    checkedSkillShare: true,
    checkedEdX: true,
    checkedCoursera: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <div className="App">

      <div className="card">
          <h1>Compare Skills</h1>
        <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedUdemy}
              onChange={this.handleChange('checkedUdemy')}
              value="checkedUdemy"
            />
          }
          label="Udemy"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedLynda}
              onChange={this.handleChange('checkedLynda')}
              value="checkedLynda"
            />
          }
          label="Lynda"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedSkillShare}
              onChange={this.handleChange('checkedSkillShare')}
              value="checkedSkillShare"
            />
          }
          label="SkillShare"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedEdX}
              onChange={this.handleChange('checkedEdX')}
              value="checkedEdX"
            />
          }
          label="EdX"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedCoursera}
              onChange={this.handleChange('checkedCoursera')}
              value="checkedCoursera"
            />
          }
          label="Coursera"
        />
        <br />
        <TextField id="text" type="text" />
        <br />
        <br />
        <Button>Search!</Button> <br />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
