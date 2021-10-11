import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import "./Login.scss";
import { FormattedMessage } from "react-intl";

class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-center row ">
            <div className="col-12  text-login">Login</div>
            <div className="col-12 form-group login-input ">
              <label>UserName</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Name "
              />
            </div>
            <div className="col-12 form-group login-input ">
              <label>PassWord</label>
              <div className="custom-input-password">
                <input
                  className="form-control"
                  placeholder="Enter your Password"
                />
              </div>
            </div>

            <div className="col-12 ">
              <button className="btn-login">Login</button>
            </div>

            <div className="col-12">
              <span className="forgot-password">Forgot your password ?</span>
            </div>
            <div className="col-12 text-center mt-3">
              <span className="text-other-login">or Login with: </span>
            </div>
            <div className="col-12 social-login ">
              <i className="fab fa-google-plus-g google"></i>
              <i className="fab fa-facebook-f facebooke"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
    // userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
