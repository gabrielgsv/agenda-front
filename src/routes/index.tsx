import { Routes as RoutesContainer, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RequireAuth from "./RequireAuth";

const Routes = () => {
  return (
    <>
      <RoutesContainer>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </RoutesContainer>
    </>
  );
};

export default Routes;
