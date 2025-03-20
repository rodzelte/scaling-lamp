import { useState } from "react";
import Qoutes from "./Qoutes";

export default function Form({ handleSubmit }) {
  const [quote, setQuote] = useState("");
  const [rating, setRating] = useState(0);

  const [newQoutes, setNewQoutes] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!quote || quote.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    const parsedRating = Number(rating);

    if (isNaN(parsedRating)) {
      alert("Rating must be a number");
      return;
    } else if (parsedRating < 1 || parsedRating > 5) {
      alert("Rating must be between 1 and 5");
      return;
    }

    const newQouteObject = { quote, rating: parsedRating };

    setNewQoutes((prevQoutes) => [...prevQoutes, newQouteObject]);

    console.log(newQoutes);
    handleSubmit();
  };

  return (
    <>
      <div className="">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Quote"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
          />
          <input
            type="text"
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>

        <div className="grid grid-cols-1 justify-between min-w-12">
          <Qoutes newQoute={newQoutes} />
        </div>
      </div>
    </>
  );
}
