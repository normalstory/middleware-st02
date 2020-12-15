import React from "react";
import CounterContainer from "./containers/CounterContainer";
import SampleContainer from "./containers/SampleContainer";
// import PostpageContainer from "./containers/PostpageContainer";

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <SampleContainer />
    </div>
  );
};

export default App;
