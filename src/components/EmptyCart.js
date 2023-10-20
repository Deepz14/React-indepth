import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
    const navigate = useNavigate();
    return (
        <div className="text-center my-5 py-5">
            <div className="empty-card-logo"></div>
            <h1 className="font-bold mt-5 pt-5">Your cart is empty</h1>
            <h4 className="pt-3 mb-4 text-gray-400 font-semibold">You can go to home page to view more restaurants</h4>
            <button className="mt-5 px-5 py-3 rounded-sm
                font-semibold bg-yellow-500 text-white"
                onClick={() => navigate("/")}>SEE RESTAURANT NEAR YOU</button>
        </div>
    )
}

export default EmptyCart;