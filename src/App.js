import React from "react";
import {Form,FormControl,Button} from 'react-bootstrap';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Form inline>
        <FormControl type="date">
        </FormControl>
        {' '}
        <Button>Submit</Button>
      </Form>
      
    </div>
  );
  }
}

export default App;
