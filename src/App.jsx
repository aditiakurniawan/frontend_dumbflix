import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import AddFilmAdmin from "./pages/AddFilmAdmin";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import ListFilmAdmin from "./pages/ListFilmAdmin";
import ListTransactionAdmin from "./pages/ListTransactionAdmin";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import TVSeries from "./pages/TVSeries";
import { IsLoginRoute, IsAdminRoute } from "./PrivateRoute";

import { API, setAuthToken } from "./config/api";

// init token on axios every time the app is refreshed
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export default function App() {
  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  // console.clear();
  console.log(state);
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    // Redirect Auth
    if (state.isLogin === true) {
      navigate("/");
      if (state.user.role === "Admin") {
        console.log("Admin");

        navigate("/listtransaction");
      } else if (state.user.role === "Member") {
        console.log("Member");

        navigate("/");
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
      console.log(response);
      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.data;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      checkUser();
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvseries" element={<TVSeries />} />
        <Route element={<IsLoginRoute />} path={"/"}>
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/profile" element={<Profile />} />
          <Route element={<IsAdminRoute />} path={"/"}>
            <Route path="/addfilm" element={<AddFilmAdmin />} />
            <Route path="/listtransaction" element={<ListTransactionAdmin />} />
            <Route path="/listfilm" element={<ListFilmAdmin />} />
            <Route path="/listfilm/:category" element={<ListFilmAdmin />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
