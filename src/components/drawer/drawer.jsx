import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoMdClose } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import "../drawer/drawer.css";
import { Link } from "react-router-dom";


const DrawerPanel = (props) => {

  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const [openInnerSubMenu, setOpenInnerSubMenu] = useState(null);


  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenDrawer(newOpen);
  };

  const openMenu = (index) => {
    if (subMenuIndex == index) {
      setSubMenuIndex(null)
    } else {
      setSubMenuIndex(index);
    }
  }

  const openInnerMenu = (index) => {
    if (openInnerSubMenu == index) {
      setOpenInnerSubMenu(null)
    } else {
      setOpenInnerSubMenu(index);
    }
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between">
        <strong>Shop By Categories</strong>
        <IoMdClose onClick={toggleDrawer(false)} className="cursor-pointer text-[20]" />
      </h3>
      <div className="scroll">
        <div className="w-full">
          <li className="list-none flex items-center  relative">
            <Link to="/" className="w-full">
              <button className="w-full !text-left justify-start px-3 !text-black">
                Fashion
              </button>
            </Link>
            <CiCirclePlus className="absolute top-[10px] right-[15px] cursor-pointer" onClick={() => openMenu(0)} />
            {
              subMenuIndex === 0 &&
              <ul className="submenu absolute top-[100%] right-[0%] w-full p1-3 pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <button className="w-full !text-left justify-start px-3 !text-black">
                      Apparel
                    </button>
                  </Link>
                  <CiCirclePlus className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=> openInnerMenu(0)}/>
                  {
                    openInnerSubMenu === 0 && 
                    <ul className="inner_submenu absolute top-[100%] right-[0%] w-full p1-3 pl-3">
                    <li className="list-none relative mb-1">
                      <Link to="/" className="link w-full !text-left justify-start !px-3 transition text-[14px]">
                        Smart Tablet
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link to="/" className="link w-full !text-left justify-start !px-3 transition text-[14px]">
                        Create t-Shirt
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link to="/" className="link w-full !text-left justify-start !px-3 transition text-[14px]">
                        Leather watch
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link to="/" className="link w-full !text-left justify-start !px-3 transition text-[14px]">
                        Rolling Diamond
                      </Link>
                    </li>
                  </ul>
                  }

                  
                </li>
              </ul>
            }
          </li>
        </div>

      </div>
    </Box>
  );

  return (
    <div>
      <Drawer open={props.isOpenDrawer} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default DrawerPanel;
