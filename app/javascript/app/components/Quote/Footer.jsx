import React from 'react'
import { Link } from 'react-router-dom'

const Footer = props => (
  <div id="footer">
    <Link
      className='btn btn-primary'
      to={`/?quote=${props.startingQuoteId}`}
    >
      Genesis
    </Link>
  </div>
)

export default Footer
