export default function Qoutes({ newQoute }) {
  return (
    <>
      {newQoute.map((qoute, index) => (
        <div
          key={index}
          className="border flex  justify-between text-center border-gray-200 p-10 w-full"
        >
          <p className="text-lg font-semibold">Qoute: {qoute.quote}</p>

          <span className="text-sm font-light">Rating: {qoute.rating}</span>
        </div>
      ))}
    </>
  );
}
