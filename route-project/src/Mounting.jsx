import React from 'react'

class Mounting extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <center>
                    <h2>Mounting</h2>
                    Mounting is the phase in which our React component mounts on the DOM (i.e., is created and inserted into the DOM). This method is called just before a component mounts on the DOM or the render method is called. After this method, the component gets mounted. This is the next stage in the lifecycle and a critical one for launch. After you have prepared the code with basic requirements, states and props, you need your component to mount in the browser. This is done via browser DOM, and the phase gives you the right ReactJS hooks methods for a before and after fitting. Here are the critical terms that you should be adept in.

                    “render” – Render is what mounts the component onto the browser in this state. It is a classic method that gives the same output every time the same input is provided. It’s a standard function that is used extensively in the ReactJS coding framework.
                    It consists of 2 methods, namely:
<div>
[1]componentWillMount(): The method invoked immediately before the component is positioned on the DOM, i.e. right before the component is rendered on the screen for the very first time.</div>
<div>[2]componentDidMount(): The method invoked immediately after the component is positioned on the DOM, i.e. right after the component is rendered on the screen for the very first time.</div>
                    <a href="http://localhost:3000/mounting">url( http://localhost:3000/mounting)</a>
                </center>
            </div>
        )
    }
}
export default Mounting