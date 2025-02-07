import { Button } from '@mui/material'
import React, { useState } from 'react'
import { GoRocket } from 'react-icons/go'
import { LiaAngleDownSolid } from 'react-icons/lia'
import { RiMenu2Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import DrawerPanel from '../drawer/drawer'

const Navigation = () => {

    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    const openDrawerPanel = () => {
        setIsOpenDrawer(true)
    };

    return (
        <nav>
            <div className="container flex items-center justify-end gap-8">
                <div className="col_1 w-[20%]">
                    <Button className="text-black gap-2 w-full" onClick={openDrawerPanel} >
                        <RiMenu2Fill className="text-[18px]" />
                        Shop By Categories
                        <LiaAngleDownSolid className="text-[13px] ml-auto font-bold" />
                    </Button>
                </div>
                <div className="col_2 w-[65%]">
                    <ul className="flex items-center gap-5">
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                                <Button className='link transition  font-[500] !text-[rgba(0,0,0,0.8)]  hover:!text¡-[red]' >Home</Button>
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">Fashion</Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">Bags</Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">Footwear</Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">Groceries</Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">Beauty</Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">Wellness</Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">Jewellery</Link>
                        </li>
                    </ul>
                </div>
                <div className='col_3 w-[15%]' >
                    <p className='text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0' >
                        <GoRocket className='text-[18px]' />
                        Free International delivery</p>
                </div>
            </div>
            <DrawerPanel openDrawerPanel={openDrawerPanel} isOpenDrawer={isOpenDrawer} setIsOpenDrawer={setIsOpenDrawer} />
        </nav>
    )
}

export default Navigation
