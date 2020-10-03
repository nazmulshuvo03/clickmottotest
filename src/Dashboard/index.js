import React from "react";
import { withRouter } from "react-router-dom";

import Display from "./Display";
import Categories from "./Categories";
import Gallery from "./Gallery";

const Dashboard = ({ smallScreen }) => {
    return (
        <div style={{ padding: "0 32px" }}>
            <Display smallScreen={smallScreen} />
            <Categories smallScreen={smallScreen} />
            <Gallery smallScreen={smallScreen} />
        </div>
    );
};

export default withRouter(Dashboard);
