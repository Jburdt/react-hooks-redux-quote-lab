import React from "react";
import Quotes from "./Components/Quotes";
import QuoteForm from "./Components/QuoteForm";

function App() {

  return (
    <div className="container-fluid">
      <div
        className="row title justify-content-center"
        style={{ paddingTop: "12px" }}
      >
        <h1>Quote Maker</h1>
      </div>
      <hr />
      <Quotes />
      <QuoteForm />
    </div>
  );
}

export default App;
