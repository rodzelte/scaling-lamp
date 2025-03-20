import axios from "axios";
import { useState } from "react";
import Qoutes from "./Qoutes";

export default function GenerateQoute() {
  const [quote, setQuote] = useState("");

  const handleClick = () => {
    axios
      .get("https://api.kanye.rest")
      .then((response) => {
        setQuote(response.data.quote);
      })
      .catch((error) => {
        console.error("Error fetching quote: ", error);
      });
  };

  return (
    <div>
      <button onClick={handleClick}>Generate Quote</button>
      <p>{quote}</p>
    </div>
  );
}
