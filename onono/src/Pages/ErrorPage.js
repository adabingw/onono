import React from "react";
import nezuko from './nezuko.gif'

function ErrorPage(props) {
  props.f("unfocused")
  return (
    <div>
      <h1>Error D:</h1>
      <h3>The page may not have loaded properly, but here's a cute Nezuko gif for you :3</h3>
      <img src={nezuko} />
    </div>
  );
}

export default ErrorPage;