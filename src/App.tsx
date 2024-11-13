import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
// import Layout from "./Layout";
import MyProfile from "./pages/MyProfile";
import NewReport from "./pages/NewReport";
import HelpWanted from "./pages/HelpWanted";

function App() {
  return (
    <Router>
      {/* <Layout> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/new-report" element={<NewReport />} />
        <Route path="/help-wanted" element={<HelpWanted />} />
      </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default App;
