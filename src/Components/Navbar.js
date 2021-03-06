import React from "react";
import { withRouter } from "react-router-dom";

import logo from "../assets/logoText.png";

const MenuOptions = ({ smallScreen }) => {
    const listStyle = {
        margin: `${smallScreen ? "auto 5px" : "auto 8px"}`,
        color: "#818181",
        fontSize: "16px",
        cursor: "pointer",
    };

    return (
        <div
            style={{
                width: "55%",
                marginLeft: `${smallScreen ? "0" : "auto"}`,
            }}
        >
            <ul
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    width: "fit-content",
                    listStyleType: "none",
                    marginLeft: "auto",
                    paddingLeft: 0,
                }}
            >
                <li style={listStyle}>Explore</li>
                <li style={listStyle}>Discover</li>
                <li style={listStyle}>For Professional</li>
                <li style={listStyle}>
                    <i className="fas fa-ellipsis-h"></i>
                </li>
                <li style={listStyle}>
                    <button
                        style={{
                            borderColor: "#818181",
                            borderRadius: "6px",
                            borderWidth: "1px",
                            backgroundColor: "#fff",
                            height: "34px",
                            width: "123px",
                            fontSize: "15px",
                            fontWeight: "400",
                            color: "#818181",
                        }}
                    >
                        Submit Photos
                    </button>
                </li>
                <li
                    style={{
                        borderLeft: "2px solid #818181",
                    }}
                ></li>
                <li
                    style={{
                        margin: "auto 8px",
                        color: "#818181",
                        fontSize: "16px",
                        padding: "6px 8px",
                        cursor: "pointer",
                    }}
                >
                    Login
                </li>
                <li style={listStyle}>
                    <button
                        style={{
                            backgroundColor: "#e17800",
                            color: "#fff",
                            fontSize: "15px",
                            border: "none",
                            borderRadius: "6px",
                            padding: "6px 8px",
                        }}
                    >
                        Join Free
                    </button>
                </li>
            </ul>
        </div>
    );
};

const Navbar = ({ smallScreen }) => {
    const [openMenu, setOpenMenu] = React.useState(false);

    const menuClick = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    height: "64px",
                    margin: "8px 0",
                    padding: `${smallScreen ? "4px 5px" : "4px 32px"}`,
                }}
            >
                <img src={logo} alt="Logo" height="40" width="160" />
                {smallScreen ? (
                    <div style={{ width: "2rem", marginLeft: "auto" }}>
                        <button
                            style={{
                                backgroundColor: "#fff",
                                border: "none",
                                fontSize: "1.5rem",
                            }}
                            onClick={menuClick}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                ) : (
                    <MenuOptions smallScreen={smallScreen} />
                )}
            </div>
            {openMenu ? <MenuOptions smallScreen={smallScreen} /> : null}
        </>
    );
};

export default withRouter(Navbar);
