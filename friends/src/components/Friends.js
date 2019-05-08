import React from 'react'
import './Friends.css';
import PostFriend from './PostFriend';

function Friends(props) {
  return (
    <div>
      <h1>Friends List</h1>
      {props.friends.map(friend => (
        <div>
          <p><strong>Name: {friend.name}</strong></p>
          <p>Age: {friend.age}</p>
          <p>Email: {friend.email}</p>
        </div>
      ))}
      <PostFriend postFriend={props.postFriend}/>
    </div>
  )
}

export default Friends;