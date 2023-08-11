import ResultUi from "./components/resultui";
import { Routes, Route } from "react-router-dom"
import Admin from "./components/Admin/Admin";
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<ResultUi />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
    </>
  );
}

export default App;
