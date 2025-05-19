import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ContactPage } from "./pages/Contact";
import { ROUTES } from "./constants/routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
