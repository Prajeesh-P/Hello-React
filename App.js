// const heding = React.createElement(
//     "h1",
//     {id:'heading',xyz:"abc"},
//     "HelloWorld From React"
// );

// structure
/**
 * <div id="parent">
 *  <div id = "child1">
 *    <h1>I'm an h1 tag</h1>
 *    <h2>I'm an h2 tag</h2>
 * </div>
 *  <div id = "child2">
 *    <h1>I'm an h1 tag</h1>
 *    <h2>I'm an h2 tag</h2>
 * </div>
 * </div>
 */
// Implementation of code for above structure
const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement("div",
            {id:"child1"},
           [ React.createElement("h1",{},"I am an h1 Tag"),React.createElement("h2",{},"I am an h2 Tag")]
        ),
        React.createElement("div",
            {id:"child2"},
           [ React.createElement("h1",{},"I am an h1 Tag"),React.createElement("h2",{},"I am an h2 Tag")]
        )
    ]
)
console.log(parent) // object and ReactDom converts it into html h1 and div tags at the time of Rendering
const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);