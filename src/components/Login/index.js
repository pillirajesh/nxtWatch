import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

const status = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failed: 'FAILED',
}

class Login extends Component {
  state = {
    username: '',
    password: '',
    apiStatus: status.initial,
    isTrue: false,
    errorMsg: '',
    check: true,
  }

  loginFailed = error => {
    this.setState({errorMsg: error})
  }

  loginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  getUserName = event => {
    this.setState({username: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({check: !prevState.check}))
  }

  submitLoginDetails = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const apiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.loginSuccess(data.jwt_token)
    } else {
      this.loginFailed(data.error_msg)
      this.setState({isTrue: true})
    }
  }

  render() {
    const {username, password, isTrue, errorMsg, check} = this.state
    return (
      <div className="login-container">
        <form onSubmit={this.submitLoginDetails}>
          <div className="login-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
              className="logo"
            />
            <div className="input-container">
              <label htmlFor="username" className="label">
                USERNAME
              </label>
              <br />
              <input
                type="text"
                id="username"
                className="input"
                onChange={this.getUserName}
                value={username}
              />
              <br />

              <label htmlFor="password" className="label">
                PASSWORD
              </label>
              <br />
              {check ? (
                <input
                  type="password"
                  id="password"
                  className="input"
                  onChange={this.getPassword}
                  value={password}
                />
              ) : (
                <input
                  type="text"
                  id="password"
                  className="input"
                  onChange={this.getPassword}
                  value={password}
                />
              )}
              <br />

              <input
                type="checkbox"
                id="checkbox"
                onClick={this.onChangeCheckbox}
              />
              <label htmlFor="checkbox" className="password">
                Show Password
              </label>
              <br />
              <button className="login-button" type="submit">
                Login
              </button>
              {isTrue && <p className="error">{errorMsg}</p>}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
