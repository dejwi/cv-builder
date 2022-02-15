import React, {Component} from 'react';
import Field from './Field';

class General extends Component{
  constructor(props){
    super(props);

    this.switchEdit = this.switchEdit.bind(this);
    this.state = {isEdit: false};
  }

  switchEdit(e){
    const newState = !this.state.isEdit;
    this.setState({isEdit: newState});
    e.target.textContent = newState ? 'Sumbit' : 'Edit';
  }

  render(){
    const elements = Object.entries(this.props.data).map(entr => 
      <Field defval={entr[1]} key={entr[0]} keyobj={entr[0]} isEdit={this.state.isEdit} update={this.props.update}/>);
    return ( 
    <div>
      {elements}
      <button onClick={this.switchEdit}>Edit</button>
    </div> );
  }
}

export default General;
