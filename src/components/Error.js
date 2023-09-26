import { useRouteError } from "react-router-dom";

export const ErrorComponent = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Oops!!</h1>
            <h3>Something went wrong!.</h3>
            <h4>{error?.status} : {error?.statusText}</h4>
        </div>
    )
}


export default ErrorComponent;