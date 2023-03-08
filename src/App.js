import "./App.css";
import Section from "./components/main/Section";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="w-full opacity-100 bg-stone-100">
      <NavBar />
      <Section />
    </div>
  );
}

export default App;
