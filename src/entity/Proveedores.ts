import { IsNotEmpty, IsNumber, IsPositive, MaxLength, isPositive } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Productos } from "./Productos";
@Entity()
export class Proveedores{
 
    @PrimaryColumn()
    @IsNotEmpty({message:'Debe indicar el ID.'})  
    id:number;
    @Column({length:50,nullable:false})
    @MaxLength(50,{message:'Debe contener un máximo de 50 caracteres.'})
    @IsNotEmpty({message:'Debe indicar el nombre del vendedor.'})
    nombre_proveedor: string;
    @Column()
    @IsNotEmpty({message:'Debe indicar los apellidos del vendedor.'}) 
    apellidos_proveedor: string;
    @Column() 
    direccion_proveedor:string;

    @Column() 
    Provincia_proveedor: string;

    @Column() 
    telefono_proveedor: string;

    @OneToMany(()=> Productos, (productos)=> productos.proveedores)
    productos:Productos[]

   
}