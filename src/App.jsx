import { useEffect, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  AdminHotels,
  AddHotel,
  AdminFlights,
  AddFlight,
  AdminHome,
  Login,
} from "./adminPages";
import { Booking, Home, Hotels, Tours } from "./pages";

function App() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ left: 0, top: 0 });
  }, [pathname]);

  useEffect(() => {
    if (pathname.includes("admin") && !sessionStorage.getItem("travel-token")) {
      return window.location.replace("/login");
    }
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/flights" element={<Tours />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/hotels" element={<AdminHotels />} />
        <Route path="/admin/hotels/add" element={<AddHotel />} />
        <Route path="/admin/flights" element={<AdminFlights />} />
        <Route path="/admin/flights/add" element={<AddFlight />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={<AdminHome />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
