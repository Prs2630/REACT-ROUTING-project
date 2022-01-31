import React from 'react'

class Updating extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h2>Updating</h2>
                The third phase of the ReactJS Component Lifecycle is the Updation phase. Followed by the mounting phase, 
                it updates the states and properties that were declared and initialized during the initialization phase (if at all any changes are required). 
                It is also responsible for handling user interaction and passing data within the component hierarchy. 
                Unlike the initialization phase, this phase can be repeated multiple times.
                <a href="http://localhost:3000/updating">url( http://localhost:3000/updating)</a>
            </div>
        )
    }
}
export default Updating;