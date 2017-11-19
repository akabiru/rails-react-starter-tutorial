import React from 'react'

const Text = props => (
  <div className='quote'>
    <div className='quote-open'>“</div>
    <div className='quote-close'>”</div>
    <div className='quote-text'>
      {props.text}
    </div>
    <div className='quote-author'>
      <em>— {props.author}</em>
    </div>
  </div>
)

export default Text
