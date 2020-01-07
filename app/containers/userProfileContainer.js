import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  getUserData, updateUsername,
  updateUserSocial, updateUserPassword,
  updateUserEmail, updateUserAvatar
} from '../actions';
import UserProfileComponent from '../components/userProfileComponent';

class UserProfileContainer extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getUserData();
  }

  render() {

    if(this.props.user !== null) {
      return (
        <UserProfileComponent {...this.props}/>
      )
    }
    else {
      return (
        <h1>Loading ... </h1>
      )
    }
  }
}

const bindActionCreatorsToProps = (dispatch) => {

  return bindActionCreators({
    getUserData,
    updateUsername,
    updateUserEmail,
    updateUserPassword,
    updateUserAvatar,
    updateUserSocial
  }, dispatch)
}

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(UserProfileContainer);
