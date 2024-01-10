import "./App.css";
import { Button } from "react-bootstrap";
import firebase from "./FirebaseConfig";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
