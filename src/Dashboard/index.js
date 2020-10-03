import React from "react";
import { withRouter } from "react-router-dom";
import { createClient } from "pexels";

import Display from "./Display";
import Categories from "./Categories";
import Gallery from "./Gallery";

const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);

const Dashboard = (props) => {
    const [curatedPhotos, setCuratedPhotos] = React.useState([]);

    React.useEffect(() => {
        client.photos.curated({ per_page: 20 }).then((photos) => {
            setCuratedPhotos(photos.photos);
        });
    }, []);

    // console.log(curatedPhotos, props);
    return (
        <div style={{ padding: "0 32px" }}>
            <Display />
            <Categories />
            <Gallery data={curatedPhotos} />
        </div>
    );
};

export default withRouter(Dashboard);
