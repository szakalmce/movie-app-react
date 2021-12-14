import Layout from "./Layout";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Movies from "./appPages/Movies";
import Search from "./appPages/Search";
import Series from "./appPages/Series";

export default function App() {
  return (
    <div>
      <Layout>
        <div>
          <Routes>
            <Route exact path="/" element={<Movies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
            <Route path="/series" element={<Series />} />
          </Routes>
        </div>
      </Layout>
    </div>
  );
}
