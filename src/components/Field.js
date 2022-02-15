import React, {Component} from 'react';

class Field extends Component{
  constructor(props){
    super(props);

    this.updateData = this.updateData.bind(this);
  }

  updateData(e){
    this.props.update(this.props.keyobj,e.target.value);
  }
  render(){
    // isedit defval update keyobj  opt: id
    if (this.props.isEdit)
      return <input type="text" defaultValue={this.props.defval} onChange={this.updateData} />

    return <span>{this.props.defval}</span>;
  }
}

export default Field;
