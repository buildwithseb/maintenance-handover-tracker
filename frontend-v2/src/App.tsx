import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import Equipment from "./pages/Equipment";
import { AppLayout } from "./components/layout/AppLayout";
import Teleremote from "./pages/Teleremote";
import Handover from "./pages/Handover";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/teleremote" element={<Teleremote />} />
          <Route path="/handover" element={<Handover />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
