import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { TbCategoryFilled } from "react-icons/tb";
import { IoHome } from "react-icons/io5";
import { FaShopify } from "react-icons/fa6";
import { IoMdAppstore } from "react-icons/io";
import { LuSquareMenu } from "react-icons/lu";
import { RiPagesLine } from "react-icons/ri";
import { MdOutlineAccountBalance } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { SlDocs } from "react-icons/sl";

function Navbar() {
    const data = [
        {
            path: '/',
            title: 'Home',
            icon: <IoHome />
        },
        {
            path: '/shop',
            title: 'Shop',
            icon: <FaShopify />
        },
        {
            path: '/store',
            title: 'Store',
            icon: <IoMdAppstore />
        },
        {
            path: '/megamenu',
            title: 'Mega Menu',
            icon: <LuSquareMenu />
        },
        {
            path: '/pages',
            title: 'Pages',
            icon: <RiPagesLine />
        },
        {
            path: '/account',
            title: 'Account',
            icon: <MdOutlineAccountBalance />
        },
        {
            path: '/dashboard',
            title: 'Dashboard',
            icon: <RxDashboard />
        },
        {
            path: '/docs',
            title: 'Docs',
            icon: <SlDocs />
        },
    ];

    return (
        <>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-12 col-md-2 mb-2 mb-md-0">
                        <div className='btn btn-md bgclr w-100 text-light fw-bold'>
                            <TbCategoryFilled /> &nbsp;All Category
                        </div>
                    </div>
                    <div className="col-12 col-md-10">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    {data.map((item, index) => (
                                        <li className="nav-item navtxt" key={index}>
                                            <Link className="nav-link active mx-1" aria-current="page" to={item.path}>
                                                <span className='me-2'>{item.icon}</span>{item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}

export default Navbar;
