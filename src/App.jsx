import Qoutes from "./components/Qoutes";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    setQuote(quote);
    setRating(rating);
    e.preventDefault();
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={setQuote}
          placeholder="Qoute"
          value={quote}
        />
        <input
          type="text"
          onChange={setRating}
          placeholder="Rating"
          value={rating}
        />
        <button>Submit</button>
      </form>

      <Qoutes quotes={quote} rating={rating} />
    </>
  );
}

export default App;
