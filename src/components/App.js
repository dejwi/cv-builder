import React, {Component} from 'react';
import General from './General';
import uniqid from "uniqid";
import Education from './Education';
import Experience from './Experience';
import '../styles/main.scss';
import Summary from './Summary';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolores porro doloremque architecto ex sapiente dicta quos voluptatum aliquam aliquid?',
      general: {fname: 'Margaret', lname: 'Smith', email: 'yourmail@prov', phone: '643-756-123'},
      education: [{id: uniqid(), syear: 2010, eyear: 2020, school: 'College', info: 'Bachelors'},{id: uniqid(), syear: 2004, eyear: 2008, school: 'Some School', info: 'something'}],
      experience: [{id: uniqid(), syear: 2010, eyear: 2020, company: 'Google', position: 'Manager', info: 'i was the best sleeper'},{id: uniqid(), syear: 2004, eyear: 2008, company: 'Facebook', position: 'floor cleaner', info: 'clean as my ass'}],
    };

    this.updateGeneral = this.updateGeneral.bind(this);
    this.updateEducation = this.updateEducation.bind(this);
    this.updateExperience = this.updateExperience.bind(this);
    this.updateSummary = this.updateSummary.bind(this);
    this.remove = this.remove.bind(this);
    this.addButton = this.addButton.bind(this);
  }
  remove(id){
    const tempedu = [...this.state.education].filter(e =>{
      if (e.id === id) return false;
      return true;
    });
    const tempexp = [...this.state.experience].filter(e =>{
      if (e.id === id) return false;
      return true;
    });
    this.setState({education: tempedu, experience: tempexp});
  }
  updateSummary(val) {
    this.setState({summary: val});
  }
  updateGeneral(key,val) {
    this.setState(prevState => ({
        general: {                   // object that we want to update
          ...prevState.general,    // keep all other key-value pairs
          [key]: val       // update the value of specific key
      }
    }));
  }
  updateEducation(id,key,val) {
    const temp = [...this.state.education];
    const index = temp.findIndex(obj => obj.id === id);
    temp[index][key] = val;
    this.setState({education: [...temp]});
  }
  updateExperience(id,key,val) {
    const temp = [...this.state.experience];
    const index = temp.findIndex(obj => obj.id === id);
    temp[index][key] = val;
    this.setState({experience: [...temp]});
  }
  addButton(key){
    this.setState({[key]: [...this.state[key],{id: uniqid()}]});
  }
  render() {
    const educationcards = this.state.education.map(e => <Education data={e} update={this.updateEducation} key={e.id} remove={this.remove}/>);
    const experiencecards = this.state.experience.map(e => <Experience data={e} update={this.updateExperience} key={e.id} remove={this.remove}/>);
    return (
      <div>
        <aside>
          <h2>General</h2>
          <General data={this.state.general} update={this.updateGeneral}/>
        </aside>
        <main>
          <div className="summary">
            <h2>About me</h2>
            <Summary data={this.state.summary} update={this.updateSummary}/>
          </div>

          <div className='education'>
            <h2>Education</h2>
            {educationcards}
            <button onClick={()=>this.addButton('education')}>Add</button>
          </div>
          
          <div className="exp">
            <h2>Experience</h2>
            {experiencecards}
            <button onClick={()=>this.addButton('experience')}>Add</button>
          </div>
        </main>
      </div>
    );
  }
  
}

export default App;
