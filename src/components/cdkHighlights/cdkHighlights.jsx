import React from 'react'
import './cdkhighlights.scss'

const CdkHighlights = ({points, feature}) => {
  return (
    <div className="content">
      <div className="points">{points}</div>
      <div className="feature">{feature}</div>
    </div>
  )
}

export default CdkHighlights