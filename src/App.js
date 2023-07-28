import "./App.css";
import { Footer } from "./components/Layout/Footer";
import { Header } from "./components/Layout/Header";
import { AllRoutes } from "./routes/AllRoutes";

const App = () => {
  return (
    <div className="App dark:bg-slate-800 ">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
};

export default App;
