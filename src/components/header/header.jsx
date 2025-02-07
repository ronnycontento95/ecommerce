import { Link } from "react-router-dom";
import logo from "../../assets/icon/logo.png"
import Search from "../search/search"
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { CiShoppingCart, CiHeart} from "react-icons/ci";
import { MdOutlineFolderShared } from "react-icons/md";
import { Tooltip } from "@mui/material";
import Navigation from "../navigator/navigator";



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px]">
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
      <div className="header py-4 border-b-[1px] border-gray-250">
        <div className="container flex items-center justify-between">
          <div className="col1  w-[25%]">
            <Link to={"/"}> <img src={logo} alt="" className="w-24" /></Link>
          </div>
          <div className="col2 w-[45%]">
            <Search />
          </div>
          <div className="col3 w-[30%] flex items-center p1-7">
            <ul className="flex items-center gap-3">
              <li className="list-none">
                <Link to="/login" className="link transition text-[15px] font-[500]">Login</Link> / &nbsp;
                <Link to="/register" className="link transition text-[15px] font-[500]">Register</Link>&nbsp;
              </li>
              <li>
                <Tooltip title="Shopping" placement="top">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <CiShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>

              </li>
              <li>
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <MdOutlineFolderShared />
                  </StyledBadge>
                </IconButton>
              </li>
              <li>
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <CiHeart />
                  </StyledBadge>
                </IconButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Navigation/>
    </header>
  );
};

export default Header;
