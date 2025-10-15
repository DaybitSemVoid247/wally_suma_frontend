import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import Menu from "../components/pages/menu";
import Usuario from "../components/pages/usuarios";
import Estadistica from "../components/pages/estadisticas";
import PanelGeneral from "../components/pages/PanelGeneral";
import Pedidos from "../components/pages/Pedidos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "panelgeneral", element: <PanelGeneral /> },
      { path: "menu", element: <Menu /> },
      { path: "usuarios", element: <Usuario /> },
      { path: "estadisticas", element: <Estadistica /> },
      { path: "pedidos", element: <Pedidos /> },
    ],
  },
]);
