import React from 'react'
import './Friends.css';

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  deleteFriend = (e, id) => {
    e.preventDefault();
    this.props.deleteFriend(id);
  };

  updateForm = (e, id) => {
    e.preventDefault();
    this.props.setUpdateForm(id);
  };

  render() {
    return (
      <div>
        <h1>Friends List</h1>
        {this.props.friends.map(friend => (
          <div>
            <p className="name"><strong>Name: {friend.name}</strong></p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            <button type="submit" onClick={(e) => this.deleteFriend(e, friend.id)}><strong>Delete Friend</strong></button>
            <button type="submit" onClick={(e) => this.updateForm(e, friend.id)}><strong>UpdateFriend</strong></button>
          </div>
        ))}
      </div>
    )
  }
}

export default Friends;