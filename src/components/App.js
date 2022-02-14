import React, {Component} from 'react';
import General from './General';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      general: {fname: 'Margaret', lname: 'Smith', email: 'yourmail@prov', phone: '643-756-123'},
    };

    this.updateGeneral = this.updateGeneral.bind(this);
  }
  updateGeneral(key,val) {
    this.setState(prevState => ({
        general: {                   // object that we want to update
          ...prevState.general,    // keep all other key-value pairs
          [key]: val       // update the value of specific key
      }
  }))
  }
  render() {
    return (
      <div>
        <General data={this.state.general} update={this.updateGeneral}/>
      </div>
    );
  }
  
}

export default App;
