import "./App.css";
import Editing from "./Components/Editing/Editing";
import Introduction from "./Components/Introduction/Introduction";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Work from "./Components/Work/Work";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Skills />
      <Work />
      <Form />
    </div>
  );
}

export default App;
