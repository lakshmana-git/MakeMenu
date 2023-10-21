import { Navigate } from "react-router-dom";

import LandingPage from "./LandingPage";

export const Home = () => {
  //if user authenticated go to dashboard .if not go to Landing page

//   if (user) {
//     return <Navigate to="/dashboard" />;
//   }

  return <LandingPage />;
};