import "./featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar"; 
import "react-circular-progressbar/dist/styles.css";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Featured = () => {
  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize="small"/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={4}/>
            </div>
            <p className="title">Total income</p>
            <p className="amount">520₹</p>
            <p className="desc">
                Previous tranction processing,total accounting after 12 AM.
            </p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative">
                        <ArrowDropDownIcon fontSize="small"/>
                        <div className="resultAmount">₹12.4k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive">
                        <ArrowDropUpIcon fontSize="small"/>
                        <div className="resultAmount">₹12.4k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive">
                        <ArrowDropUpIcon fontSize="small"/>
                        <div className="resultAmount">₹12.4k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured
