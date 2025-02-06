import { Link } from "react-router-dom";
import logo from "../../assets/icon/logo.png"
import Search from "../search/search"

const Header = () => {
  return (
    <header>
      <div className="top-strip py-2 border-t-[1px] border-gray-100 border-b-[1px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="coll w-[50%]">
              <p className="text-[14px] font-[500]">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>
            <div className="col2 flex items-center justify-end">
            <ul className="flex items-center gap-3">
              <li className="list-none">
                <Link to="help-center" className="text-[13px] link font-[500] transition">Help Us</Link>
              </li>
              <li className="list-none">
                <Link to="help-center" className="text-[13px] link font-[500] transition">Order Tracking</Link>
              </li>
            </ul>
          </div>
          </div>
          
        </div>
      </div>
      <div className="header py-3">
        <div className="container flex items-center justify-between">
          <div className="col1  w-[25%]">
            <Link to={"/"}> <img src={logo} alt="" className="w-24" /></Link>
          </div>
          <div className="col2 w-[45%]">
            <Search/>
          </div>
          <div className="col3 w-[30%] ">
            <ul>
              <li className="list-none">
                <Link to="/login" className="link transition text-[15px] font-[500]"> Login</Link>| &nbsp;
                <Link to="/login" className="link transition text-[15px] font-[500]"> Register</Link>| &nbsp;
              </li>

            </ul>
          
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
