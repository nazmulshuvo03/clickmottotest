import React from "react";
import { createClient } from "pexels";

import placeholder from "../assets/placeholder.jpg";

const SingleCategory = ({ query, smallScreen }) => {
    const [backgroundImage, setBackgroundImage] = React.useState();

    const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);

    client.photos.search({ query, per_page: 1 }).then((photos) => {
        // console.log(photos);
        setBackgroundImage(photos.src);
    });

    return (
        <div
            style={{
                backgroundImage: `url(${
                    backgroundImage ? backgroundImage.small : placeholder
                })`,
                backgroundRepeat: "no-repeat",
                height: "7rem",
                width: "14rem",
                backgroundPosition: "center",
                backgroundSize: "cover",
                textAlign: "center",
            }}
        >
            <div
                style={{
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    color: "#fff",
                    paddingTop: "2.5rem",
                }}
            >
                {query}
            </div>
        </div>
    );
};

const Categories = ({ smallScreen }) => {
    const categories = [
        "Food",
        "Workspace",
        "Wallpaper",
        "Summer",
        "Gravity",
        "Science",
        "City",
        "Abstract",
    ];

    const scrollLeft = () => {
        document.getElementById("scroll-area").scrollLeft -= 160;
    };

    const scrollRight = () => {
        console.log("scroll");
        document.getElementById("scroll-area").scrollLeft += 160;
    };

    return (
        <div style={{ margin: `${smallScreen ? "0.5rem" : "1rem 3rem"}` }}>
            <div
                style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    padding: "5px",
                }}
            >
                Top Categories
            </div>
            <div style={{ display: "flex" }}>
                <button
                    style={{
                        border: "none",
                        borderRadius: "50%",
                        padding: "6px 12px",
                        backgroundColor: "#fff",
                    }}
                    onClick={scrollLeft}
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
                <div className="scroll-area" id="scroll-area">
                    {categories.map((category) => (
                        <div className="category-items p-0">
                            <SingleCategory
                                query={category}
                                smallScreen={smallScreen}
                            />
                        </div>
                    ))}
                </div>
                <button
                    style={{
                        border: "none",
                        borderRadius: "50%",
                        padding: "6px 12px",
                        backgroundColor: "#fff",
                    }}
                    onClick={scrollRight}
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};

export default Categories;
