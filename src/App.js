import "./App.css";
import Dashboard from "./components/templates/Dashboard/Dashboard";
import Footer from "./components/UI/organisms/Footer/Footer";

import Header from "./components/UI/organisms/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
