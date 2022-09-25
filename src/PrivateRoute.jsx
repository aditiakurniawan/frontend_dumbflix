import { Navigate, Outlet } from "react-router-dom";
import user from "./fakeData/user.json";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";

export function IsLoginRoute() {
  const [state, dispatch] = useContext(UserContext);
  console.log(state);
  if (state.isLogin != null) {
    return <Outlet />;
  } else {
    return <Navigate to={"/"} />;
  }
}

/* eslint-disable */
export function IsAdminRoute() {
  const [state, dispatch] = useContext(UserContext);

  if (state.user.role == "Admin") {
    return <Outlet />;
  } else {
    return <Navigate to={"/"} />;
  }
}
