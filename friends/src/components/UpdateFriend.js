import React from 'react'

class UpdateFriend extends React.Component {
    state = {
      item: this.props.activeItem
    };
  
    changeHandler = ev => {
      ev.persist();
      let value = ev.target.value;
  
      this.setState(prevState => ({
        item: {
          ...prevState.item,
          [ev.target.name]: value
        }
      }));
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.updateFriend(this.state.item);
    };
  
    render() {
      return (
        <div>
          <h2>Update Item</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              onChange={this.changeHandler}
              placeholder="Name"
              value={this.state.item.name}
            />
            <div />
  
            <input
              type="text"
              name="age"
              onChange={this.changeHandler}
              placeholder="Age"
              value={this.state.item.age}
            />
            <div />
  
            <input
              type="text"
              name="email"
              onChange={this.changeHandler}
              placeholder="Email"
              value={this.state.item.email}
            />
            <div />
  
            <button type="submit">Update</button>
          </form>
        </div>
      );
    }
  }

export default UpdateFriend;