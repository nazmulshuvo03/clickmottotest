import React from "react";
import { createClient } from "pexels";

import placeholder from "../assets/placeholder.jpg";

const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);

const Gallery = () => {
    const [curatedPhotos, setCuratedPhotos] = React.useState([]);
    const [option, setOption] = React.useState("All");

    const optionsClicked = (value) => {
        setOption(value);
    };

    React.useEffect(() => {
        if (option === "Photos") {
            client.photos.curated({ per_page: 20 }).then((photos) => {
                setCuratedPhotos(photos.photos);
            });
        }
        if (option === "Videos") {
            client.photos.curated({ per_page: 20 }).then((photos) => {
                setCuratedPhotos(photos.photos);
                // api limit exceeded for the day
            });
        }
        if (option === "All") {
            client.photos.curated({ per_page: 20 }).then((photos) => {
                setCuratedPhotos(photos.photos);
                // api limit exceeded for the day
            });
        }
    }, []);

    return (
        <div style={{ margin: "1rem 4rem" }}>
            <div>
                <span
                    onClick={() => optionsClicked("All")}
                    style={{
                        color: `${option === "All" ? "#000" : "#818181"}`,
                        fontSize: "0.8rem",
                        marginRight: "1rem",
                    }}
                >
                    All
                </span>
                <span
                    onClick={() => optionsClicked("Photos")}
                    style={{
                        color: `${option === "Photos" ? "#000" : "#818181"}`,
                        fontSize: "0.8rem",
                        marginRight: "1rem",
                    }}
                >
                    Photos
                </span>
                <span
                    onClick={() => optionsClicked("Videos")}
                    style={{
                        color: `${option === "Videos" ? "#000" : "#818181"}`,
                        fontSize: "0.8rem",
                        marginRight: "1rem",
                    }}
                >
                    Videos
                </span>
            </div>
            <div>
                <div className="row row-cols-auto">
                    {curatedPhotos && curatedPhotos.length > 0 ? (
                        curatedPhotos.map((photo) => (
                            <div className="col my-2">
                                <img
                                    src={photo.src.medium}
                                    alt="Gallery Photos"
                                />
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
        </div>
    );
};

export default Gallery;