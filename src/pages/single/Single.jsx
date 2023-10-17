import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButtom">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="img"
                className="itemImg"
              />
              <div className="details">
                <div className="itemTitle">Riya</div>
                <div className="itemDetails">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">riya07@h.com</span>
                </div>
                <div className="itemDetails">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91 679862999</span>
                </div>
                <div className="itemDetails">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                </div>
                <div className="itemDetails">
                  <span className="itemKey">Age:</span>
                  <span className="itemValue">15</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title='User transction of One year'/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transctions</h1>
          <Table/>
        </div>
      </div>
    </div>
  );
};

export default Single;
