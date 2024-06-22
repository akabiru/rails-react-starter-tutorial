import React from 'react'

import Navigation from './Navigation'
import Footer from './Footer'
import Text from './Text'

const View = props => (
  <div>
    <div className="quote-container">
      {props.fireRedirect && <Redirect to={'/'} />}

      {props.previousQuoteId &&
        <Navigation
          direction='previous'
          otherQuoteId={previousQuoteId}
        />
      }

      <Text {...props.quote} />

      {props.nextQuoteId &&
        <Navigation
          direction='next'
          otherQuoteId={props.nextQuoteId}
        />
      }
    </div>
    {props.quote.id !== parseInt(props.startingQuoteId, 10) &&
      <Footer startingQuoteId={props.startingQuoteId} />
    }
  </div>
)

export default View
