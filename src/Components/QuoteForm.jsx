import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import { addQuote } from './QuoteSlicer';
import { removeQuote } from './QuoteSlicer';
import { upvoteQuote } from './QuoteSlicer';
import { downvoteQuote } from './QuoteSlicer';
import { useDispatch } from 'react-redux';

const QuoteForm = () => {
  const [quoteContent, setQuoteContent] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const quote = { quoteContent, quoteAuthor, vote: 0, id: uuid() };
    dispatch(addQuote(quote));
    // dispatch(removeQuote(quote));
    // dispatch(upvoteQuote(quote));
    // dispatch(downvoteQuote(quote));
  };

  const contentInput = (e) => {
    setQuoteContent(e.target.value)
  };

  const authorInput = (e) => {
    setQuoteAuthor(e.target.value)
  };

  return (
    <form onSubmit={handleSubmit}>QuoteForm
       <p>
        <input
          type="TEXTAREA"
          onChange={contentInput}
          value={quoteContent}
          placeholder="content"
          name="content"
        />
      </p>
       <p>
        <input
          type="INPUT"
          onChange={authorInput}
          value={quoteAuthor}
          placeholder="author"
          name="author"
        />
      </p>
      <input type="submit" />
    </form>
  )
}

export default QuoteForm;