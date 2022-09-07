import { Navigate, useLocation } from "react-router-dom";
import { Auth } from "../config/storage";

type Props = {
  children: JSX.Element;
};
function RequireAuth({ children }: Props) {
  let auth = sessionStorage.getItem(Auth);
  let location = useLocation();

  if (!auth) {
    // Redirect them to the /login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <> {children} </>;
}

export default RequireAuth;
