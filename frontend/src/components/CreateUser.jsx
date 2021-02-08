import React, { Component } from 'react';
import axios from 'axios';
// import { TextInput, Button, Icon } from 'react-materialize';
class createUser extends Component {
  state = {
      users: [],
      username: ''
  }
    async componentDidMount(){
        this.getUsers();
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({ users: res.data })
    }

    onChangeUsername = (e) => {
     this.setState({
         username: e.target.value
     })
    }
    onSubmit = async (e) => {
        e.preventDefault();
        const res =  await axios.post('http://localhost:4000/api/users', {
            username: this.state.username
        })
        this.setState({username: ''})
        this.getUsers();
        console.log(res);
    }

    deleteUser = async (id) => {
        await axios.delete(`http://localhost:4000/api/users/${id}`)
        this.getUsers()
    }
    render(){
        return(
            <div className="row">
                <div className="col s12 m6 l6 ">
                        <h3>Create New User</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    className="input-field col s12 m6 l6"
                                    placeholder="username"
                                    value={this.state.username}
                                    type="text"
                                    onChange={this.onChangeUsername}
                                />
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <button type="submit" className="btn waves-effect waves-light">
                                Save
                            </button>
                        </form>
                </div>

                <div className="col s12 m6 l6">
                    <ul className="collection with-header">
                        <li className="collection-header"><h4>USERNAME</h4></li>
                        {
                            this.state.users.map(user => (
                                <a href='#!' className="collection-item"
                                    key={user._id}
                                    onDoubleClick={() => this.deleteUser(user._id)}>
                                    {user.username}
                                </a>
                            ))
                        }
                    </ul>
                </div>
             </div>
        )
    }
}

export default createUser;