import Layout from "./Layout";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";

export default function App() {
  return (
    <div>
      <Layout>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Layout>
    </div>
  );
}
