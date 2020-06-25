import { Home, Items, About, ItemDetails } from "./components";

const routes = [
  {
    path: "/",
    component: Home,
    title: "Home",
    exact: true
  },
  {
    path: "/about",
    component: About,
    title: "About",
    exact: true
  },
  {
    path: "/items",
    component: Items,
    title: "Items",
    exact: true
  },
  {
    path: "/items/:id",
    component: ItemDetails,
    title: "Item Detail Page",
    exact: true
  }
];

export default routes;
