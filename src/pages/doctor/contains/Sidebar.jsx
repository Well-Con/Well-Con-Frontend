import React, { useState } from "react";

import { useLocation } from "react-router-dom";
import '../../../styles/Sidebar.scss'

const Sidebar = () => {
    const location = useLocation();

    const [closeMenu, setCloseMenu] = useState(false);

    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu);
    };

    return (
        <div className={closeMenu === false ? "sidebar w-64" : "sidebar active"}>
            {/* logo */}
            <div
                className={
                    closeMenu === false
                        ? "logoContainer"
                        : "logoContainer active"
                }
            >
                <i className="fa-brands fa-slack icon"></i>
                <h2 className="title ">Well-Con</h2>
            </div>

            {/*toggle button*/}


            <div
                className={
                    closeMenu === false
                        ? "burgerContainer"
                        : "burgerContainer active"
                }
            >
                <div
                    className="burgerTrigger"
                    onClick={() => {
                        handleCloseMenu();
                    }}
                ></div>
                <div className="burgerMenu"></div>
            </div>

            {/* profile */}
            <div
                className={
                    closeMenu === false
                        ? "profileContainer"
                        : "profileContainer active"
                }
            >
                <i className="fa-solid fa-user profile icon"></i>

                <div className="profileContents">
                    <p className="name">Hello, Rohit👋</p>
                    <p>neeraj@gmail.com</p>
                </div>
            </div>


            <div
                className={
                    closeMenu === false
                        ? "contentsContainer"
                        : "contentsContainer active"
                }
            >
                <ul>
                    {/* dashboard */}
                    <li className={location.pathname === "/dashboard" ? "active" : ""}>
                        <i className="fa-brands fa-microsoft icon" ></i>
                        <a href="/dashboard">dashboard</a>
                    </li>



                    {/* appointments */}
                    <li
                        className={
                            location.pathname === "/appointments"
                                ? "active"
                                : ""
                        }
                    >
                        <i className="fa-solid fa-calendar-check icon"></i>
                        <a href="/appointments">Appointments</a>
                    </li>

                    {/* Message */}
                    <li
                        className={
                            location.pathname === "/message" ? "active" : ""
                        }
                    >
                        <i className="fa-solid fa-message icon"></i>
                        <a href="/message">Messages</a>
                    </li>


                    {/* History */}
                    <li
                        className={
                            location.pathname === "/history" ? "active" : ""
                        }
                    >
                        <i className="fa-solid fa-book-medical icon"></i>
                        <a href="/history">History</a>
                    </li>


                    {/* VideoCall */}
                    <li
                        className={
                            location.pathname === "/connect" ? "active" : ""
                        }
                    >
                        <i className="fa-solid fa-headset icon"></i>
                        <a href="/connect">Connect</a>
                    </li>


                </ul>
            </div>
        </div>
    );
};

export default Sidebar;