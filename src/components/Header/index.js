import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
<<<<<<< HEAD
import './index.css'

const Header = props => {
  const {history} = props
=======
import {BiSun} from 'react-icons/bi'
import './index.css'
import {HeaderContainer} from './styledComponents'

const Header = props => {
  const {history, changeBackgroundTheme, themeChange} = props

>>>>>>> modiifed
  const logout = () => {
    const jwtToken = Cookies.remove()
    if (jwtToken === undefined) {
      history.replace('/login')
    }
  }
<<<<<<< HEAD
  return (
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="logo"
        className="header-logo"
      />
      <div className="header-login-button-container">
        <FaMoon />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
          className="profile"
        />
        <button type="button" className="logout-button" onClick={logout}>
          Logout
        </button>
      </div>
=======

  const changeTheme = () => {
    changeBackgroundTheme()
  }

  return (
    <div>
      {themeChange ? (
        <HeaderContainer>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
            alt="logo"
            className="header-logo"
          />
          <div className="header-login-button-container">
            <button
              className="theme-button"
              type="button"
              onClick={changeTheme}
            >
              <BiSun className="sun" />
            </button>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
              className="profile"
            />
            <button type="button" className="logout-button" onClick={logout}>
              Logout
            </button>
          </div>
        </HeaderContainer>
      ) : (
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="logo"
            className="header-logo"
          />
          <div className="header-login-button-container">
            <button
              className="theme-button"
              type="button"
              onClick={changeTheme}
            >
              <FaMoon />
            </button>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
              className="profile"
            />
            <button type="button" className="logout-button" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      )}
>>>>>>> modiifed
    </div>
  )
}

export default withRouter(Header)
