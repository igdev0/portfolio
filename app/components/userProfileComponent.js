import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reduxForm, Form, Field} from 'redux-form';
import cropperjs from 'cropperjs';
import CropperWrapper from './cropperComponent';

import './userProfileComponent.less';

class AvatarField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: React.createRef(),
      default_img_src: window.origin + '/api/uploads/user.jpg',
      preview_img_src: null,
      display_cropper: false

    }

    this.onClick = this.onClick.bind(this);
    this.toggleCropper = this.toggleCropper.bind(this);
    this.triggerInputClick = this.triggerInputClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getBlobData = this.getBlobData.bind(this);
    this.getPreviewURL = this.getPreviewURL.bind(this);
  }

  getBlobData(data) {
  this.props.updateUserAvatar(this.props.user._id, data);

  }

  getPreviewURL(url) {
    this.setState({
      preview_img_src: url
    })
  }

  onClick() {
    this.toggleCropper();
  }

  onChange(e) {

    const {state: {file: {current: {files}}}} = this;
    const fileReader = new FileReader();

    fileReader.onload = (file) => {
      this.setState({
        preview_img_src: file.currentTarget.result,
      })

      this.setState({
        display_cropper: true
      })
    }

    fileReader.readAsDataURL(files[0]);
    files.currentTarget = this.state.cropped_data;

  }

  toggleCropper() {

    this.setState({
      display_cropper: !this.state.display_cropper
    })

  }

  triggerInputClick() {

    this.state.file.current.click();
  }

  render() {
    return (
      <div className="avatar-input-field">
        <h5>Profile image</h5>
        {
          !this.state.display_cropper ?
          <div className="preview__img">
            {
              this.state.preview_img_src && this.state.display_cropper?
              <img src={this.state.preview_img_src} onClick={this.triggerInputClick}/>
              :
              <img src={this.props.user.avatar_url} onClick={this.triggerInputClick}/>
            }
          </div>
        :
        <CropperWrapper
          src={this.state.preview_img_src}
          getPreviewURL={this.getPreviewURL}
          getBlobData={this.getBlobData}
          toggleCropper={this.toggleCropper}
          triggerInputClick={this.triggerInputClick}
        />
        }
        <input type="file" onChange={this.onChange} ref={this.state.file}/>
      </div>
    )
  }
}

// Text Field component =======
// =========================
const TextFieldComponent = ({
  input,
  label,
  type,
  disabled,
  meta: {
    touched,
    error
  }
}) => {

  return (
    <div className="input__wrapper">
     <input type={type} disabled={disabled} placeholder={label} {...input}/>
     <div className="input-error">
      {
        touched && (error && <span>{error}</span>)
      }
     </div>
    </div>
  )
}


// forms ====================
// ==========================

const UserNameComponent = (props) => {
  return (
    <Form className="settings__info-username" onSubmit={props.handleSubmit((data) => {
        props.updateUsername(props.user._id, data.username);
        props.toggleDisabledField('username');
      })}>
      <h5>User name</h5>
      <div className="settings__info__username">
        <Field type="text" disabled={props.username} name="username" label="E.g: John Doe" component={TextFieldComponent}/>
      </div>
        {
          !props.username ?
          <div>
            <button type="submit" className="btn btn-success">Save</button>
            <button type="button" className="btn btn-danger" onClick={() => {props.toggleDisabledField('username')}}>Cancel</button>
          </div>
          :
          <a href="#" className="btn btn-primary" onClick={() => {props.toggleDisabledField('username')}}>Change</a>
        }
    </Form>
  )
}

const UserEmailComponent = (props) => {

  return (
    <Form className="settings__info-email" onSubmit={props.handleSubmit((data) => {
        props.updateUserEmail(props.user._id, data.email);
        props.toggleDisabledField('email');
      })}>
      <h5>Email</h5>
      <div className="settings__info__email">
        <Field type="email" disabled={props.email} className="email" name="email" label="email" component={TextFieldComponent}/>
      </div>
      {
        !props.email ?
        <div>
          <button type="submit" className="btn btn-success">Save</button>
          <button type="button" className="btn btn-danger" onClick={() => {props.toggleDisabledField('email')}}>Cancel</button>
        </div>
        :
        <a href="#" className="btn btn-primary" onClick={() => {props.toggleDisabledField('email')}}>Change</a>
      }
    </Form>
  )
}

const UserSocialComponent = (props) => {

  return (
    <Form className="settings__info-social" onSubmit={props.handleSubmit((data) => {
        props.updateUserSocial(props.user._id, data);
        props.toggleDisabledField('social')
      })}>
      <h5>Social network.</h5>
      <div className="settings__info__social">
        <Field type="text" disabled={props.social} name="github" className="social" label="github url" component={TextFieldComponent}/>
        <Field type="text" disabled={props.social} name="linkedin" className="social" label="linkedin url" component={TextFieldComponent}/>
        <Field type="text" disabled={props.social} name="facebook" className="social" label="facebook url" component={TextFieldComponent}/>
      </div>
      {
        !props.social ?
        <div>
          <button type="submit" className="btn btn-success">Save</button>
          <button type="button" className="btn btn-danger" onClick={() => {props.toggleDisabledField('social')}}>Cancel</button>
        </div>
        :
        <a href="#" className="btn btn-primary" onClick={() => {props.toggleDisabledField('social')}}>Change</a>
      }
    </Form>
  )
}

const UserPasswordComponent = (props) => {

  return (
    <Form className="settings__info-password" onSubmit={props.handleSubmit((data) => {
        props.updateUserPassword(props.user._id, data)
        props.toggleDisabledField('password');
      })}>
      <h5>Password</h5>
      <div className="settings__info__password">
        <Field type="password" disabled={props.password} name="current_password" label="Current password" component={TextFieldComponent}/>
        <Field type="password" disabled={props.password} name="new_password" label="New password" component={TextFieldComponent}/>
        <Field type="password" disabled={props.password} name="repeat_password" label="Repeat password" component={TextFieldComponent}/>
      </div>
      {
        !props.password ?
        <div>
          <button type="submit" className="btn btn-success">Save</button>
          <button type="button" className="btn btn-danger" onClick={() => {props.toggleDisabledField('password')}}>Cancel</button>
        </div>
        :
        <a href="#" className="btn btn-primary" onClick={() => {props.toggleDisabledField('password')}}>Change</a>
      }
    </Form>
  )
}

const validateUserName = (values) => {
  const errors = {};

  if(!values.username) {

    errors.username = "This field is necessary.";
  }
  return errors;
};

const validateUserEmail = (values) => {
  const errors = {};

  if(!values.email) {
    errors.email = "This field is necessary";
  }
  return errors;
}

const validateUserSocial = (values) => {
  const errors ={};

  if(!values.github) {
    errors.github = 'This field is necessary.';
  }

  if(!values.facebook) {
    errors.facebook = 'This field is necessary.';
  }

  if(!values.linkedin) {
    errors.linkedin = 'This field is necessary.';
  }

  return errors;
}

const validateUserPassword = (values) => {
  const errors = {};

  if(!values.current_password) {
    errors.current_password = 'This field is necessary.';
  }

  if(!values.new_password) {
    errors.new_password = 'This field is necessary.';
  }

  if(!values.repeat_password) {
    errors.repeat_password = 'This field is necessary.';
  }

  if(values.new_password !== values.repeat_password) {
    errors.repeat_password = 'The password are not equal.'
  }

  return errors;
}

let UserNameForm = reduxForm({form: 'user_name', validate: validateUserName, })(UserNameComponent);
let UserEmailForm = reduxForm({form: 'user_email', validate: validateUserEmail})(UserEmailComponent);
let UserSocialForm = reduxForm({form: 'user_social', validate: validateUserSocial})(UserSocialComponent);
let UserPasswordForm = reduxForm({form: 'user_password', validate: validateUserPassword})(UserPasswordComponent);

const userNameFormInitialValues = ({user}) => {
  return {
    initialValues: {
      username: user.username
    }
  }
}

const userEmailFormInitialValues = ({user}) => {
  return {
    initialValues: {
      email: user.email
    }
  }
}

const userSocialFormInitialValues = ({user}) => {
  return {
    initialValues: {
      linkedin: user.linkedin_url,
      facebook: user.facebook_url,
      github: user.github_url
    }
  }
}

UserNameForm = connect(userNameFormInitialValues, null)(UserNameForm);
UserEmailForm = connect(userEmailFormInitialValues, null)(UserEmailForm);
UserSocialForm = connect(userSocialFormInitialValues, null)(UserSocialForm);

class UserProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: true,
        password: true,
        email: true,
        social: true
    }

    this.toggleDisabledField = this.toggleDisabledField.bind(this);

  }

  toggleDisabledField(name){
    this.setState({
        [name]: !this.state[name]
    })
  }

  render() {
      return (
        <div className="settings">
           <div className="settings-info">
             <UserNameForm {...this.props} {...this.state} toggleDisabledField={this.toggleDisabledField}/>
             <UserEmailForm {...this.props} {...this.state} toggleDisabledField={this.toggleDisabledField}/>
             <UserSocialForm {...this.props} {...this.state} toggleDisabledField={this.toggleDisabledField}/>
             <UserPasswordForm {...this.props} {...this.state} toggleDisabledField={this.toggleDisabledField}/>
           </div>
          <AvatarField updateUserAvatar={this.props.updateUserAvatar} user={this.props.user}/>
        </div>
      )
  }

}

// const bindActionCreatorstoProps = ({dispatch}) => {
//
//   return bindActionCreators({
//
//   }, dispatch)
// }
//
// const mapStateToProps = ({user}) => {
//   return {user};
// }


export default UserProfileComponent;
