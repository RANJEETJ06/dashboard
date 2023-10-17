import "./widgets.scss";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Widgets = ({type}) => {
    let data;

    //temp
    const amount=20000;

    switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney:false,
                link:"See all Users",
                icon:<PersonOutlinedIcon className="icon"/>
            };
            break;
        case "order":
            data={
                title:"ORDERS",
                isMoney:false,
                link:"View All Orders",
                icon:<ShoppingCartIcon className="icon"/>
            };
            break;
        case "earnings":
            data={
                title:"EARNINGS",
                isMoney:true,
                link:"View Net Earnings",
                icon:<CurrencyRupeeIcon className="icon"/>
            };
            break;
        case "balance":
            data={
                title:"BALANCE",
                isMoney:true,
                link:"See details",
                icon:<AccountBalanceWalletIcon className="icon"/>
            };
            break;
        default:
            break;
    }

  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "₹"}{amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <ArrowDropUpIcon/>
                20%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widgets

