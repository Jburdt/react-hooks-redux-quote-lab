import React from 'react';

const QuoteForm = () => {
  return (
    <form>QuoteForm
       <p>
        <input
          type="text"
          onChange={null}
          value={null}
          placeholder="content"
        />
      </p>
       <p>
        <input
          type="text"
          onChange={null}
          value={null}
          placeholder="author"
        />
      </p>
      <input type="submit" />
    </form>
  )
}

export default QuoteForm;