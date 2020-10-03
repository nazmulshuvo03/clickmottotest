import React from "react";
import { createClient } from "pexels";

import placeholder from "../assets/placeholder.jpg";

const Categories = () => {
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

    const SingleCategory = ({ query }) => {
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
                }}
            >
                <div>{query}</div>
            </div>
        );
    };

    return (
        <div style={{ margin: "1rem 3rem" }} className="row">
            {categories.map((category) => (
                <div className="col">
                    <SingleCategory query={category} />
                </div>
            ))}
        </div>
    );
};

export default Categories;
