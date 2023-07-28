import { Routes, Route } from "react-router-dom";

import { Register } from "../pages/Register";
import { HomePage } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
