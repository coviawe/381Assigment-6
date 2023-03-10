import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Edit from "./Edit";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
