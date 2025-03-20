import Form from "./components/Form";
import GenerateQoute from "./components/GenerateQoute";

function App() {
  function handleSubmit() {
    console.log("Form Submitted");
  }

  return (
    <>
      <div className="">
        <Form handleSubmit={handleSubmit} />
        <GenerateQoute />
      </div>
    </>
  );
}

export default App;
