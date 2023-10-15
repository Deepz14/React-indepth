import React from "react";
import UserClass from "./UserClass";

import { USER_API } from "../utils/constants";

class AboutUs extends React.Component {

    constructor(props){
        super(props)
        //console.log("Parent constructor");
        this.state = {
            userInfo : {
                name: "",
                location: "",
                bio: "",
                avatar_url: ""
            }
        }

        // this.timerClass = setInterval(() => {
        //     console.log('timer');
        // }, 1000);
    }

    async componentDidMount(){
        //console.log("Parent DidMount");
        const getUserInfo = await fetch(USER_API);
        const jsonData = await getUserInfo.json();
        this.setState({
            userInfo: jsonData
        });
    }

    componentDidUpdate(){
        //console.log(`Parent DidUpdate`);
    }

    componentWillUnmount(){
        //clearInterval(this.timerClass);
        //console.log("Parent Component Destroyed");
    }

    render () {
        //console.log("Parent render");
        return (
            <div>
                <h1>About Us</h1>
                <h3>Welcome to the Application!!</h3>
                <UserClass userInfo={this.state.userInfo} num={"1"} />
            </div>
        )
    }
}

export default AboutUs;

/* 
    REACT COMPONENT LIFE CYCLE HAS PHAHSES:
    1. RENDER PHASE.
        - When component class gets initialized the constructor function will be called first then render method. 
    2. COMMIT PHASE.
        - Once the React updates the DOM, the componentDidMount gets called.
    
    Note: If there is parent-child component then react do the optimization by grouping both the component render phase, commit phase
    and execute accordingly.
*/