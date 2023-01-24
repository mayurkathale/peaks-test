import { Route, Routes } from "react-router-dom";
//import { Home } from "./pages/Home";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { NewsDetail } from "./pages/NewsDetail";
import { List } from "./pages/List";
import { Footer } from "./components/Footer";
import { ROUTES } from "./constants";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.news} element={<NewsDetail />} />
        <Route path={ROUTES.bookmark} element={<List />} />
        <Route path={ROUTES.search} element={<List />} />
        <Route path="*" element={<div>Nothing</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
