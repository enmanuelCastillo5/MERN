import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Collection, CollectionItem, TextInput } from 'react-materialize';
class createUser extends Component {
  state = {
      users: [],
      username: ''
  }
    async componentDidMount(){
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({ users: res.data })
        console.log(this.state.users)
    }

    onChangeUsername = (e) => {
     this.setState({
         username: e.target.value
     })
    }
    render(){
        return(
            <div className="row">

                <div className="col s6">
                   <h3>create New User</h3>
                   <form>
                    <br/>
                    <TextInput
                        id="TextInput-4"
                        placeholder="userName"
                        onChange={this.onChangeUsername} />
                    </form>
                </div>

                <div className="col s6">
                    <Row>
                        <Col m={6} s={12}>
                            <Collection>
                            {this.state.users.map(user => (
                                <CollectionItem  key={user._id}>
                                    {user.username}
                                </CollectionItem>
                            ))}
                            </Collection>
                        </Col>
                        </Row>
                </div>
            </div>
        )
    }
}

export default createUser;