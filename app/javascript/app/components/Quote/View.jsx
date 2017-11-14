import React from 'react'

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
