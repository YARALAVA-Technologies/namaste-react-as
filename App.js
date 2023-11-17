const parent = React.createElement("div",
    { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "heading" }, "I am a H1 Tag"),
        React.createElement("h2", { id: "heading2" }, "I am a H2 Tag")])
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);