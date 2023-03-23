    
    const parent = React.createElement("div", {id:"parent"}, 
    [React.createElement("div",{id:"child"},
    [React.createElement("h1", {}, "I'm an h1 tagi"),React.createElement("h2",{},"h2 tag")]),
    React.createElement("div",{id:"child2"},
    [React.createElement("h1", {}, "I'm an h1 tagi"),React.createElement("h2",{},"h2 tag")])]);
    const heading = React.createElement("h1",{id: "heading", className:"head"}, "Hello world from React!");
    console.log(parent);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
