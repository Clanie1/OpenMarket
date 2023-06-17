import { Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Home } from "./home/Home";
import { Products } from "./products/index";
import { Profile } from "./profile/index";

const routes = [
  { path: "/", Page: Home },
  { path: "/products", Page: Products },
  { path: "/profile", Page: Profile },
  { path: "/sales", Page: Products },
];

function Routing() {
  const getRoutes = () =>
    routes.map(({ path, Page }) => (
      <Route key={path} path={path} element={<Page />} />
    ));

  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
