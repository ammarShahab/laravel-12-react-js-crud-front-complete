import { Outlet } from "react-router";
import "./App.css";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen mt-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
