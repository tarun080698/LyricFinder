import React from "react";
import Tracks from "../tracks/Tracks";
import Search from "../tracks/Search";

const Index = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <Search />
        <Tracks />
      </div>
    </React.Fragment>
  );
};

export default Index;
