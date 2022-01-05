import Header from "./components/Header";

function App() {
  return (
    <>
      <Header
        text={
          "i dont need to use propTypes, but if i use typescript... anyway: type checking is coool"
        }
      />
      <div className="container">
        <h1>My App</h1>
      </div>
    </>
  );
}

export default App;
