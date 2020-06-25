import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import items from "../data/items";
import routes from "../routes";

function Breadcrumb() {
  const { pathname } = useLocation();
  const generateBreadcrumbRoutesFromCurrentLocation = url =>
    url
      .split("/")
      .map((elem, index, array) => array.slice(0, index + 1).join("/"))
      .map(elem => (elem.length == 0 ? "/" : elem))
      .filter((elem, index, array) => array.indexOf(elem) == index);

  const generateBreadcrumbTitleFromRoute = breadcrumbRoute => {
    if (/\d/.test(breadcrumbRoute))
      return items.find(({ id }) => id == breadcrumbRoute.replace(/\D/g, ""))
        .title;
    else return routes.find(({ path }) => path == breadcrumbRoute).title;
  };
  return (
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        {generateBreadcrumbRoutesFromCurrentLocation(pathname) &&
          generateBreadcrumbRoutesFromCurrentLocation(pathname).map(
            (route, key) => (
              <li key={key}>
                <NavLink to={route} key={key}>
                  {generateBreadcrumbTitleFromRoute(route)}
                </NavLink>
              </li>
            )
          )}
      </ul>
    </nav>
  );
}
export default Breadcrumb;
