import { Link, useRouteError } from "react-router-dom";
import { BiMessageRoundedError } from "react-icons/bi";
import { TfiReload } from "react-icons/tfi";

export default function ErrorBoundary() {
  let error = useRouteError();
    console.log(error)
  return (
        <div className="error-boundary">
          <BiMessageRoundedError />
          <h1>Oops! Something went wrong.</h1>
          <p>We’re sorry for the inconvenience. <br/> Please try refreshing the page or returning to the homepage.</p>
          <button className="btn" onClick={() => window.location.reload()}> <TfiReload /> Reload Page</button>
          <Link to="/" className="btn primary-bg">Back to Home</Link>
        </div>
  )
}