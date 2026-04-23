import React from "react";
import ReactDOM from "react-dom/client"; 

const parent = React.createElement("div",
    {id:"Parent"},
  
    React.createElement("div",
        {id:"Child1"},
        [React.createElement("h1",{id:"three",key:"two"},"this is h1 tag"),
        React.createElement("h2",{id:"four",key:"one"  },"this is h2 tag"),
        React.createElement("h2",{id:"four",key:"THREE"  },"this is h2 tag"),
    ]
    )
);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);