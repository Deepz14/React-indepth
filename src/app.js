import React from 'react';
import ReactDom from 'react-dom/client';


// const heading = React.createElement("div", {id: 'parent'}, [
//         React.createElement("div", {id:"child1"}, [
//             React.createElement("h1", {}, "I'm h1 tag"),
//             React.createElement("h2", {}, "I'm h2 tag")
//         ]),
//         React.createElement("div", {id:"child2"}, [
//             React.createElement("h1", {}, "I'm h1 tag"),
//             React.createElement("h2", {}, "I'm h2 tag")
//         ])
//     ]
// );

//Header
//  - Logo
//  - Nav items
// Body
//  - Search
//  - Restarant Container
//     - Restarant Card
// Footer
//   - Copyrights
//   - Contacts
//   - Links

// JSX SYNTAX
// const heading = (
//     <div id='parent'>
//         <div id="child1">
//             <h1 className='heading'>I'm h1 tag created from JSX</h1>
//             <h2>I'm h2 tag created from JSX</h2>
//         </div>
//         <div id="child2">
//             <h1 className='heading'>I'm h1 tag created from JSX</h1>
//             <h2>I'm h2 tag created from JSX</h2>
//         </div>
//     </div>
// )

// // REACT ELEMENT
// const childHeading = <div>I'm an Child heading</div>
// const data = 100;

// // React Component
// const HeadingComponent =  <div className='heading'>I'm an React Element from JSX </div>

// const TitleComponent = function () {
//     return (
//         <div id="container">
//             <h1>React is Awesome! ⚡</h1>
//             {HeadingComponent}
//         </div>
//     )
// }

// // React Component Type 2 Declaration
// const ParentComponent = () => {
//     // ONE COMPONENT INSIDE ANOTHER COMPONENT IS CALLED COMPONENT COMPOSITION
//     return (
//         <>
//             <TitleComponent />
//             <h4>I'm an Heading Component from JSX </h4>
//             {childHeading} <span>- {data - 90}</span>
//         </>
//     )
// }

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className='logo'>
                <img 
                    className='logo-img'
                    src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-logo%2Cchef-logo%2Crestaurant-logo%2Cfire-design-template-7648600f54c48617d64e973dd3af8cda_screen.jpg?ts=1663142017'
                    alt='logo-img'
                />
            </div>
            <div className='nav-container'>
                <ul className='nav-items'>
                    <li className='nav-links'>Home</li>
                    <li className='nav-links'>About Us</li>
                    <li className='nav-links'>Contact Us</li>
                    <li className='nav-links'>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const { name, cuisine, ratings, eta} = props.resData
    return (
        <div className="res-card-container">
            <div className='res-card-img'>
                <img 
                    className='res-card-logo'
                    src='https://media.istockphoto.com/id/179085494/photo/indian-biryani.jpg?s=612x612&w=0&k=20&c=VJAUfiuavFYB7PXwisvUhLqWFJ20-9m087-czUJp9Fs='
                    alt="res-card-logo"
                />
            </div>
            <h3 className='res-title'>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>{ratings} stars</h4>
            <h4>{eta} min</h4>
        </div>
    )
}

const resObj = [
    {'id': 1, 'name': 'Meghana Foods', 'cuisine': 'Biriyani, North Indian, Asian', 'ratings': '4.4', 'eta': '40'},
    {'id': 2, 'name': 'KFC', 'cuisine': 'Fried, Chicken, Burger', 'ratings': '4.0', 'eta': '28'}
]

const BodyLayout = () => {
    return (
        <div className='main'>
            <div className='search-container'>Search</div>
            <div className='restaurant-container'>
                {
                    resObj.map((restaurant) => {
                        return (
                            <RestaurantCard key={restaurant.id} resData={restaurant} />
                        )
                    })
                }
            </div>
        </div>
    )

}

const AppLayout = () => {
    return (
        <div className='app' id='app'>
            <HeaderComponent />
            <BodyLayout />
        </div>
    )
}


const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<AppLayout />)