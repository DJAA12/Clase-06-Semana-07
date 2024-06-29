import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Productos } from "./entity/Productos"
import { Categoria } from "./entity/Categoria"
import { Vendedores } from "./entity/Vendedor"
import { Clientes } from "./entity/Clientes"
import { Proveedores } from "./entity/Proveedores"
import { Cabecera_Factura } from "./entity/Cabecera_Factura"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Utn123**",
    database: "ejemplodb",
    synchronize: true,
    logging: false,
    entities: [User, Productos, Categoria, Vendedores, Clientes, Proveedores, Cabecera_Factura],
    migrations: [],
    subscribers: [],
})
