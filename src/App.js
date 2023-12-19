import { BrowserRouter as Router } from "react-router-dom";

//Routes
import AppRoutes from "./routes/AppRoutes";

import './App.css';
//Toast
import ToasterConfig from "./components/toast/ToasterConfig";
//Components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    
    <div className="App">
      <Router>
      <Navbar/>
      <div className="App">
          <AppRoutes />
        </div>
      <Footer/>
      </Router>
      <ToasterConfig />
    </div>
  );
}

export default App;
