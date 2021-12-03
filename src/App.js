import React from "react";
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';
import AgeStats from './components/AgeStats';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      newDate: '',
      birthDay: '2018-09-01'

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState({
      newDate: e.target.value
    })

  }
  handleClick() {
    console.log(this.state);
    this.setState({
      birthDay: this.state.newDate
    })

  }

  render() {
    return (
      <div className="App">
        <h2>Age of students</h2>
        <Form inline>
          <FormControl type="date" onChange={this.handleChange}>
          </FormControl>
          {' '}

        </Form>
        <Button onClick={this.handleClick}>Submit</Button>
        <AgeStats date={this.state.birthDay} />
      </div>
    );
  }
}

export default App;
