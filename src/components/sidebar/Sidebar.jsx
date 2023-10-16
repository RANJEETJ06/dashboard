import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsSharpIcon from '@mui/icons-material/QueryStatsSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">.rkj</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icons"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <PersonIcon className="icons"/>
                    <span>Users</span>
                </li>
                <li>
                    <Inventory2Icon className="icons"/>
                    <span>Stocks</span>
                </li>
                <li>
                    <CreditCardIcon className="icons"/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className="icons"/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <QueryStatsSharpIcon className="icons"/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsSharpIcon className="icons"/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICES</p>
                <li>
                    <SettingsSystemDaydreamIcon className="icons"/>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyIcon className="icons"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className="icons"/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleIcon className="icons"/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className="icons"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar
