import "./App.css";
import {
  BestSellingProducts,
  FeaturedProducts,
  GenderBoxes,
  Offers,
  OurInstgram,
  TopCategories,
} from "./components";
import { Footer } from "./components/Layout/Footer";
import { Header } from "./components/Layout/Header";
import { Slide } from "./components/Slide";

function App() {
  return (
    <div className="App dark:bg-slate-800 ">
        <Header />
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <Slide/>
        <GenderBoxes/>
        <BestSellingProducts />
        <TopCategories />
        <FeaturedProducts />
        <Offers />
        <OurInstgram />
      </main>
        <Footer />
    </div>
  );
}

export default App;
