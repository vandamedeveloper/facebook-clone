import "./App.css";
import Header from "./components/HEADER/Header";
import Sidebar from "./components/SIDEBAR/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        {/* SIDEBAR */}
        <Sidebar/>
        {/* FEED */}
      </div>
    </div>
  );
}

export default App;
