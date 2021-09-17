import React, { Component } from 'react';

class UserInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      id: ""
    };
    this.props.keycloak.loadUserInfo().then(userInfo => {
        this.setState({name: userInfo.name, email: userInfo.email, id: userInfo.sub})
    });
  }

  render() {
    return (
      <div className="UserInfo">
        <p>Full Name: {this.state.name}</p>
        <p>Email address: {this.state.email}</p>
      </div>
    );
  }
}

export default UserInfo;
