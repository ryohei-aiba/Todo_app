import React from "react";

class Completed extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      toggle: true,
    };
  }
  render() {
    const {completedTodos} = this.props
    if(this.state.toggle){
      return(
        <div>
            <button onClick={this.handleToggle}>{this.state.toggle ? "表示"　: "非表示"}</button>
            {completedTodos.map((completedTodo) => (
              <li key={completedTodo.id}>
                  {completedTodo.text}
              </li>  
            ))}
        </div>
      );}
    else{
      return(
        <div>
            <button onClick={this.handleToggle}>{this.state.toggle ? "表示"　: "非表示"}</button>           
        </div>
      );
    }
    
  };


  handleToggle = () =>{
    const {completedTodos} = this.props
    if (completedTodos.length === 0) return;
    this.setState({toggle: !this.state.toggle})
  };

}

export default Completed;