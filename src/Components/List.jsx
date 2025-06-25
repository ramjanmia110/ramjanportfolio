import React from 'react'

const List = ({text,className}) => {
  return (
    <div>
      <li className={`font-montser text-primary text-[14px] font-[400] ${className}`}>{text}</li>
    </div>
  )
}

export default List
