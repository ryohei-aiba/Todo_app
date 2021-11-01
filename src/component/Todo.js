import React from "react";

class Todo extends React.Component{
  render() {
    const { text } = this.props
    return(
      <div>
        <p onClick={this.handleEdit}>{text}</p>
        <p>
          <button onClick={this.handleClickCompleted}>完了</button>
          <button onClick={this.handleClickDelete}>削除</button>
        </p>
      </div>
    )
  };

  handleEdit = ()=> {
    const {text, onEdit, id} = this.props;
    onEdit(text, id);
  };

  handleClickCompleted = () => {
    const{onCompleted, id} = this.props;
    onCompleted(id);
  };

  handleClickDelete = () =>{
    const{onDelete, id} = this.props;
    onDelete(id);
  };

}

export default Todo;
