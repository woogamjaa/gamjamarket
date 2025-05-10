import React from "react";
import  { Route, Routes } from "react-router-dom";
import {HomePage, ProductPage} from "./pages";

function App() {
    return (
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/:products" element={<ProductPage />} />
      </Routes>
  );
}
// export default App;
export default App; 