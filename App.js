import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import Home from "./Components/Home";
import './Styles.css'
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />

      <Footer />
    </div>
  );
}

export default App;
