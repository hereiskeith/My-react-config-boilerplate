import BizMsM from "./static/images/bizmsm.png";
import React from "react";

function Welcome () {
  // console.log('process.env.VERSION', process.env.VERSION);
  // console.log('process.env.PLATFORM', process.env.PLATFORM);
  // console.log('process.env.NODE_ENV', process.env.NODE_ENV);

  return (
    <div>
      {/*<img src={BizMsM} />*/}
      <h1 data-testid="header">
        Hello World from React boilerplate
      </h1>
    </div>
  );
};

export default Welcome;