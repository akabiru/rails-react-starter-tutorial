import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Navigation = props => {
  const isPrevious = props.direction === 'previous'

  return (
    <Link
      className={`link-${props.direction}`}
      to={`/?quote=${props.otherQuoteId}`}
    >
      <i
        className={`fa fa-angle-${isPrevious ? 'left' : 'right'}`}
        aria-hidden='true'
      >
        <span />
      </i>
    </Link>
  )
}

export default Navigation
