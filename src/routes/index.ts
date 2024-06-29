import {Router} from "express"
import productos from "./productos";
import categorias from "./categorias";

const routes= Router();

routes.use("/Productos", productos );
routes.use("/Categorias", categorias );


export default routes;

