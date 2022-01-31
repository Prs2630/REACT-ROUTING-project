import React from 'react'

class Unmounting extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <h2>Unmounting</h2>
            The final stage of unmounting is essential as it doesn’t require the component and gets unmounted from the DOM. As the final state, it is designed to produce the outcome via unmounting.

Here is the essential method used in unmounting –

“componentWillUnmount” – This is the last method in the lifecycle as it pertains to the core unmounting and removal from the DOM. The cleaning up of the component is also performed here. This is also used in the logging out of users when they want to clear out the program from their browser.
<a href="http://localhost:3000/unmounting">url( http://localhost:3000/unmounting)</a>
            </div>
        )
    }
}
export default Unmounting;