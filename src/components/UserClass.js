import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count1: 0,
            count2: 0
        }
    }
    render(){
        const { name, location, email } = this.props;
        const { count1, count2 } = this.state;
        return (
            <div className="userInfoContainer">
                <h3>Name: {name}</h3>
                <h3>Location: {location}</h3>
                <h3>Email: {email}</h3>
                <div className="count info">
                    <p>Count1 : {count1}</p>
                    <p>Count2: {count2}</p>
                    <button 
                        onClick={() => {
                            this.setState({
                                count1: count1 + 1,
                                count2: count2 + 2
                            })
                        }}>
                    Increase Count</button>
                    <button
                        onClick={() => {
                            this.setState({
                                count1: 0,
                                count2: 0
                            })
                        }}
                        >
                    Reset Count</button>
                </div>  
            </div>
        )

    }
}


export default UserClass;