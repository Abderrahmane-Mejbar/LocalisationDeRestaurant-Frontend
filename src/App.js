
import './App.css';
import Dashboard from './components/Dashboard';
import Utilisateurs from './components/Utilisateurs';
import FormulaireUtilisateur from './components/FormulaireUtilisateur';
import CreerCompte  from './components/CreerCompte';
import Login from './components/Login';
import Ville from './components/Ville';
import Zone from './components/Zone';
import Serie from './components/Serie';
import Specialite from './components/Specialite';
import Restaurants from './components/Restaurants';
import { BrowserRouter as Router , Route,Routes } from "react-router-dom"
function App() {
  return (
    <>
  <Router>
         <Routes>
            <Route path="/" element={<Ville/>} />
            <Route path="/Restaurants" element={<Restaurants/>} />
            <Route path="/Specialite" element={<Specialite/>} />
            <Route path="/Zone" element={<Zone/>} />
            <Route path="/Serie" element={<Serie/>} />
            <Route path="/Utilisateurs" element={<Utilisateurs/>} />
            <Route path="/FormulaireUtilisateur" element={<FormulaireUtilisateur/>} />
         </Routes>
  
  </Router>
     
    </>
  );
}

export default App;
