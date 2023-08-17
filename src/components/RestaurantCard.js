
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

export default RestaurantCard;