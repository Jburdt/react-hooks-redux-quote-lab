import React from 'react';
import { useSelector } from 'react-redux';

const Quotes = () => {
  const state = useSelector((state )=> state.quotes)
  console.log(state)

  return (
    <div>
      <ul>
        {state.map((quote) => (
          <li key={quote.id}>{quote.content}{quote.author}</li>
        ))}
      </ul>
    </div>
  )
}

export default Quotes;