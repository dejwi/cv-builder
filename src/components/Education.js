import React, {Component} from 'react';

class Education extends Component{
  constructor(props){
    // data update
    super(props);

    this.switchEdit = this.switchEdit.bind(this);
    this.state = {isEdit: false};
  }

  switchEdit(){
    this.setState({isEdit: !this.state.isEdit});
  }

  render(){
    const data = this.props.data;
    if (this.state.isEdit) {
      return (
        <div>
          <button onClick={this.switchEdit}>Sumbit</button>
          <label >
            Start year:
            <input type="number" defaultValue={data.syear} onChange={(e)=>this.props.update(data.id,'syear',e.target.value)}/>
          </label>
          <label>
            End year:
            <input type="number" defaultValue={data.eyear} onChange={(e)=>this.props.update(data.id,'eyear',e.target.value)}/>
          </label>
          <label>
            Degree/info:
            <input type="text" defaultValue={data.info} onChange={(e)=>this.props.update(data.id,'info',e.target.value)}/>
          </label>
          <label>
            School name:
            <input type="text" defaultValue={data.school} onChange={(e)=>this.props.update(data.id,'school',e.target.value)}/>
          </label>
        </div>
      );
    }
    return (
    <div>
      <button onClick={this.switchEdit}>Edit</button>
      <span>{data.syear} - {data.eyear}</span>
        <div>
          <h3>{data.info}</h3>
          <p>{data.school}</p>
        </div>
    </div> );
  }
}
export default Education;
