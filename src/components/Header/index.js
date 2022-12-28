import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import './index.css'

const Header = props => {
  const {history} = props
  const logout = () => {
    const jwtToken = Cookies.remove()
    if (jwtToken === undefined) {
      history.replace('/login')
    }
  }
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
    </div>
  )
}

export default withRouter(Header)
