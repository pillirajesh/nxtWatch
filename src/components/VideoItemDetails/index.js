import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'

import './index.css'

class VideoItemDetails extends Component {
  state = {particularVideo: {}}

  componentDidMount() {
    this.getParticularResult()
  }

  getParticularResult = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const particularUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(particularUrl, options)
    const result = await response.json()
    const fetchedSingleVideo = {
      id: result.video_details.id,
      description: result.video_details.description,
      publishedAt: result.video_details.published_at,
      thumbnailUrl: result.video_details.thumbnail_url,
      title: result.video_details.title,
      videoUrl: result.video_details.video_url,
      viewCount: result.video_details.view_count,
      name: result.video_details.channel.name,
      profileImageUrl: result.video_details.channel.profile_image_url,
    }

    this.setState({particularVideo: fetchedSingleVideo})
    const newDate = formatDistanceToNow(
      new Date(this.particularVideo.publishedAt),
    )
  }

  render() {
    const {particularVideo} = this.state

    const {
      description,
      name,
      profileImageUrl,
      publishedAt,
      thumbnailUrl,
      title,
      videoUrl,
      viewCount,
    } = particularVideo
    return (
      <div>
        <ReactPlayer url={videoUrl} />
        <h1 className="title">{title}</h1>
        <p className="name">{`${viewCount} views`}</p>
        <p className="name">{}</p>
      </div>
    )
  }
}

export default VideoItemDetails
