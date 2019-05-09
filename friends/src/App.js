import React from 'react';
import './App.css';
import axios from 'axios';
import Friends from './components/Friends';
import { Route } from 'react-router-dom';
import PostFriend from './components/PostFriend';
import UpdateFriend from'./components/UpdateFriend';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      activeItem: null
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  postFriend = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => 
        console.log(err));
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}` )
      .then(res => this.setState({ friends: res.data }))
      .catch(err => 
        console.log(err));
  };

  updateFriend = updatedFriend => {
    axios
      .put(`http://localhost:5000/friends/${updatedFriend.id}`, updatedFriend)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => 
        console.log(err));
  };

  setUpdateForm = item => {
    this.setState({ activeItem: item });
    this.props.history.push('/update-form');
  };

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => (
            <Friends
              {...props}
              friends={this.state.friends} 
              deleteFriend={this.deleteFriend}
              setUpdateForm={this.setUpdateForm}
         />
         )}
        />
        <Route exact path="/" render={() => <PostFriend  postFriend={this.postFriend} />} />
        <Route
         path="/update-form"
          render={props => (
            <UpdateFriend
              {...props}
              updateFriend={this.updateFriend}
              activeItem={this.state.activeItem}
            />
          )}
        />
      </div>
    );
  }
}


export default App;