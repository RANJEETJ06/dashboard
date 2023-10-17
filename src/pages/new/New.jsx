import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUpload } from "@mui/icons-material";
import { useState } from "react";

const New = ({ input, title }) => {
  const [file, setFile] = useState("");
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="buttom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="img"
            />
          </div>
          <div className="right">
            <form>
              {input.map((input) => (
                <div className="userInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <div className="userInput">
                <label
                  htmlFor="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ cursor: "pointer" }}
                >
                  Image:
                  <DriveFolderUpload className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button>Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
