import React from 'react'

class PostFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: {
                name: '',
                age: '',
                email: ''
            }
        };
    }

    handleChange = e => {
        this.setState({
            friends: {
                ...this.state.friends,
                [e.target.name]: e.target.value
            }
        });
    };

    postFriend = e => {
        e.preventDefault();
        this.props.postFriend(this.state.friends);
    };

    render() {
        return (

            <div>
                <form onSubmit={this.postFriend}>
                    <input type="text" name="name"placeholder="Name" onChange={this.handleChange} value={this.state.friends.name} />
                    <input type="text" name="age" placeholder="Age" onChange={this.handleChange} value={this.state.friends.age} />
                    <input type="text" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.friends.email} />
                    <button type="submit"><strong>Add Friend</strong></button>
                </form>
            </div>
        )
    }
}

export default PostFriend;