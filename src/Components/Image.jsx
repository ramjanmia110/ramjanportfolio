import React from 'react'

const Image = ({src,className}) => {
  return (
    <div>
      <img src={src} className={className}></img>
    </div>
  )
}

export default Image
