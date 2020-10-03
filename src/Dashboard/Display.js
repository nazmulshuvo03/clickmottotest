import React from "react";

import { createClient } from "pexels";

import placeholder from "../assets/placeholder.jpg";

const Display = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);

        client.photos.show({ id: 1684187 }).then((photos) => {
            // setData(videos.videos[0].video_files[1]);
            console.log(photos);
            setData(photos);
        });
    }, []);

    return (
        <div
            style={{
                backgroundImage: `url(${
                    data && data.src ? data.src.landscape : placeholder
                })`,
                backgroundRepeat: "no-repeat",
                height: "40rem",
                width: "100%",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div
                style={{
                    width: "40rem",
                    height: "10rem",
                    margin: "auto",
                    paddingTop: "10rem",
                }}
            >
                <div
                    style={{
                        fontSize: "34px",
                        fontWeight: "bold",
                        textAlign: "left",
                        color: "#fff",
                    }}
                >
                    Your local source of high quality images and videos directly
                    from their creators
                </div>
                <input
                    type="text"
                    name="Search"
                    placeholder="Search Photos and Videos"
                    id="search"
                    style={{
                        padding: "1rem",
                        borderRadius: "32px",
                        border: "none",
                        width: "100%",
                    }}
                />
            </div>
        </div>
    );
};

export default Display;