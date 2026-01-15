import React, { useState } from "react";
import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";
import AddCategoryPage from "./Pages/AddCategoryPage";
import ViewTablePage from "./Pages/ViewTablePage";
import Navbar from "./components/Navbar";

const App = () => {
  const [page, setPage] = useState("login");

  return (
    <>
      {page !== "login" && <Navbar setPage={setPage} />}

      {page === "login" && <LoginPage setPage={setPage} />}
      {page === "dashboard" && <Dashboard />}
      {page === "addCategory" && <AddCategoryPage />}
      {page === "viewTable" && <ViewTablePage />}
    </>
  );
};

export default App;
