import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homecontainer">
        <Navbar/>
        <h1>home conatiner</h1>
      </div>
    </div>
  )
}

export default Home
