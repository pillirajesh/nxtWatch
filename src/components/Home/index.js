<<<<<<< HEAD
import Header from '../Header'

const Home = () => (
  <div>
    <Header />
  </div>
)

=======
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {
  AiFillHome,
  AiOutlineFire,
  AiFillSave,
  AiOutlineSearch,
  AiOutlineClose,
} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {SideContainer, MiddleContainer} from './styledComponents'
import Header from '../Header'
import AllVideos from '../AllVideos'
import './index.css'

const status = {
  initials: 'INITIALS',
  loading: 'LOADING',
  success: 'SUCCESS',
  failed: 'FAILED',
}

class Home extends Component {
  state = {
    search: '',
    apiStatus: status.initial,
    searchedList: [],
    isClosed: false,
    themeChange: false,
  }

  componentDidMount() {
    this.getSearchedResults()
  }

  getSearchedResults = async () => {
    this.setState({apiStatus: status.loading})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const data = await response.json()
      const fetchedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({searchedList: fetchedData, apiStatus: status.success})
    } else {
      this.setState({apiStatus: status.failed})
    }
  }

  searchedResults = event => {
    this.setState({search: event.target.value})
  }

  successSearchedResults = () => {
    const {searchedList} = this.state

    return (
      <ul className="home-unordered-list">
        {searchedList.map(eachResult => (
          <AllVideos eachResultDetails={eachResult} key={eachResult.id} />
        ))}
      </ul>
    )
  }

  failedSearchedResults = () => (
    <div className="failed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
        alt="failure"
        className="failed-image"
      />
      <h1 className="failed-heading">Oops! Something Went Wrong</h1>
      <p className="failed-paragraph">
        We are having some trouble to complete your request. Please try again
      </p>
      <button className="retry-button" type="button">
        Retry
      </button>
    </div>
  )

  close = () => {
    this.setState({isClosed: true})
  }

  changeBackgroundTheme = () => {
    this.setState(prevState => ({themeChange: !prevState.themeChange}))
  }

  loaderView = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </div>
  )

  renderResults = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'LOADING':
        return this.loaderView()

      case 'SUCCESS':
        return this.successSearchedResults()

      case 'FAILED':
        return this.failedSearchedResults()

      default:
        return null
    }
  }

  render() {
    const {search, isClosed, themeChange} = this.state
    return (
      <div className="main-home-container">
        <Header
          changeBackgroundTheme={this.changeBackgroundTheme}
          themeChange={themeChange}
        />
        <div className="divide-containers">
          {themeChange ? (
            <SideContainer>
              <div className="un-order-list">
                <li className="home">
                  <Link to="/" className="link">
                    <AiFillHome />
                    <p className="side-home-paragraph">Home</p>
                  </Link>
                </li>
                <li className="home">
                  <Link to="/videos/trending" className="link">
                    <AiOutlineFire />
                    <p className="side-home-paragraph">Trending</p>
                  </Link>
                </li>
                <li className="home">
                  <Link to="/videos/gaming" className="link">
                    <SiYoutubegaming />
                    <p className="side-home-paragraph">Gaming</p>
                  </Link>
                </li>
                <li className="home">
                  <Link to="/saved-videos" className="link">
                    <AiFillSave />
                    <p className="side-home-paragraph">Saved Videos</p>
                  </Link>
                </li>
              </div>
              <div>
                <p className="contact-us">CONTACT US</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  className="social-image"
                  alt="facebook logo"
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  className="social-image"
                  alt="twitter logo"
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  className="social-image"
                  alt="linked in  logo"
                />
                <p className="recommendations">
                  Enjoy! Now to see your channels and recommendations!
                </p>
              </div>
            </SideContainer>
          ) : (
            <div className="side-container">
              <ul className="un-order-list">
                <li className="home">
                  <Link to="/" className="link">
                    <AiFillHome />
                    <p className="side-home-paragraph">Home</p>
                  </Link>
                </li>
                <li className="home">
                  <Link to="/videos/trending" className="link">
                    <AiOutlineFire />
                    <p className="side-home-paragraph">Trending</p>
                  </Link>
                </li>
                <li className="home">
                  <Link to="/videos/gaming" className="link">
                    <SiYoutubegaming />
                    <p className="side-home-paragraph">Gaming</p>
                  </Link>
                </li>
                <li className="home">
                  <Link to="/saved-videos" className="link">
                    <AiFillSave />
                    <p className="side-home-paragraph">Saved Videos</p>
                  </Link>
                </li>
              </ul>
              <div>
                <p className="contact-us">CONTACT US</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  className="social-image"
                  alt="facebook logo"
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  className="social-image"
                  alt="twitter logo"
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  className="social-image"
                  alt="linked in  logo"
                />
                <p className="recommendations">
                  Enjoy! Now to see your channels and recommendations!
                </p>
              </div>
            </div>
          )}
          {themeChange ? (
            <MiddleContainer>
              {isClosed ? null : (
                <div className="banner-container">
                  <div>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="logo"
                      className="logo"
                    />
                    <p className="paid-paragraph">
                      Buy Nxt Watch Premium prepaid plans with UPI
                    </p>
                    <button type="button" className="get-it-now-button">
                      GET IT NOW
                    </button>
                  </div>
                  <button className="close" type="button" onClick={this.close}>
                    <AiOutlineClose />
                  </button>
                </div>
              )}
              <div className="search-image-container">
                <input
                  type="search"
                  className="search-input"
                  placeholder="Search"
                  onChange={this.searchedResults}
                  value={search}
                />

                <AiOutlineSearch className="search-image" />
              </div>
              {this.renderResults()}
            </MiddleContainer>
          ) : (
            <div className="middle-container">
              {isClosed ? null : (
                <div className="banner-container">
                  <div>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="logo"
                      className="logo"
                    />
                    <p className="paid-paragraph">
                      Buy Nxt Watch Premium prepaid plans with UPI
                    </p>
                    <button type="button" className="get-it-now-button">
                      GET IT NOW
                    </button>
                  </div>
                  <button className="close" type="button" onClick={this.close}>
                    <AiOutlineClose />
                  </button>
                </div>
              )}
              <div className="search-image-container">
                <input
                  type="search"
                  className="search-input"
                  placeholder="Search"
                  onChange={this.searchedResults}
                  value={search}
                />

                <AiOutlineSearch className="search-image" />
              </div>
              {this.renderResults()}
            </div>
          )}
        </div>
      </div>
    )
  }
}
>>>>>>> modiifed
export default Home
