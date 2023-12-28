import "./App.scss"
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return <div>
    <section id="Home"> <Navbar />
    <Profile />
    </section>
    <section id="Portfolio">parallax</section>
    <section id="Skills">Projects</section>
    <section id="About">about</section>
    <section id="Contact"> contact</section>


  </div>;
};

export default App;
