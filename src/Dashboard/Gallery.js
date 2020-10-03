import React from "react";

import placeholder from "../assets/placeholder.jpg";

const Gallery = ({ data }) => {
    return (
        <div style={{ margin: "1rem 4rem" }}>
            <div className="row row-cols-auto">
                {data && data.length > 0 ? (
                    data.map((photo) => (
                        <div className="col my-2">
                            <img src={photo.src.medium} alt="Gallery Photos" />
                        </div>
                    ))
                ) : (
                    <img
                        src={placeholder}
                        alt="Placeholder"
                        height="100%"
                        width="100%"
                    />
                )}
            </div>
        </div>
    );
};

export default Gallery;
