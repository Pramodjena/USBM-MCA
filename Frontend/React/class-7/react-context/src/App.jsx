import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import ThemeButton from "./components/ThemeButton";

function App() {
  return (
    <>
      <h1>React Context API</h1>
      <ThemeButton />
      <Header />
      <Content />
    </>
  );
}

export default App;
