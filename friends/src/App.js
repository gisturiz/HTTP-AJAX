import React from 'react';
import './App.css';
import axios from 'axios';
import Friends from './components/Friends';
import { Route } from 'react-router-dom';
import PostFriend from './components/PostFriend';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
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
      .then(response => this.setState({ friends: response.data }))
      .catch(err => 
        console.log(err));
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
         />
         )}
        />
        <PostFriend postFriend={this.postFriend}/>
      </div>
    );
  }
}

export default App;