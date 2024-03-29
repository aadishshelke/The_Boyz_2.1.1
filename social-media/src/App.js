import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Investor_signup from "./components/Investor_signup";
import Founder_signup from "./components/Founder_signup";
import InvestorForm from './components/signup-investor';
import FounderForm from './components/signup-founder';
import Signin from './components/Signin';
import MentorSearch from './components/pgs';
import StartupSearch from './components/pgm';
import StartupProfile from './components/sprof';
import MentorProfile from './components/mprof';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Founder_signup" element={<Founder_signup />} />
          <Route path="/Investor_signup" element={<Investor_signup />} />
          <Route path="signup-investor" element={<InvestorForm/>} />
          <Route path="/signup-founder" element={<FounderForm />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/pgs" element={<MentorSearch />} />
          <Route path="/pgm" element={<StartupSearch />} />
          <Route path="/sprof/:startupId" element={<StartupProfile />} />
          <Route path="/mprof/:mentorId" element={<MentorProfile />} />
          <Route path="/home" element={
            <>
              <Header />
              <Home/>
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
