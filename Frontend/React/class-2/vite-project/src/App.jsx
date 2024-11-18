import "./App.css";
import Card from "./components/Card";

function App() {
  let college = "USBM";

  return (
    <>
      <h1 className="text-center text-4xl text-white mt-5">
        This is my first React project
      </h1>
      <h2>{college}</h2>
      <div className="flex gap-2">
        <Card name={"Pramod"} age={25} role={"SDE-II"} />
        <Card name={"USBM"} age={25} role={"SDE-III"} />
        <Card name={"XYZ"} age={25} role={"SDE-II"} />
        <Card name={"ABC"} age={25} role={"SDE-II"} />
      </div>
    </>
  );
}

export default App;
