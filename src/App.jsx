import { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Booking, Home, Hotels, Tours } from "./pages";

function App() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ left: 0, top: 0 });
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/flights" element={<Tours />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
