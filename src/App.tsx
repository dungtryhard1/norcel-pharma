import React from "react";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import "./scss/style.scss"

const App: React.FC = () => {
  return (
    <>
      <Header />
      <AppRoutes/>
    </>
  );
};
export default App;
