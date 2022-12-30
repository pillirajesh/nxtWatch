import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import './index.css'

const AllVideos = props => {
  const {eachResultDetails} = props
  const {
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    name,
    profileImageUrl,
    id,
  } = eachResultDetails

  const newDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <li className="all-videos-list">
      <div className="list">
        <Link to={`/videos/${id}`} className="link-item">
          <img src={thumbnailUrl} alt={title} className="thumbnail-image" />

          <div className="details-container">
            <img src={profileImageUrl} alt={name} className="profile-image" />
            <div className="details-text-container">
              <p className="title">{title}</p>
              <p className="name">{name}</p>
              <div className="time-container">
                <p className="name">{`${viewCount} Views`}</p>
                <p className="name">{`${newDate} ago`}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </li>
  )
}

export default AllVideos
