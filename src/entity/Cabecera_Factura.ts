import { IsNotEmpty, IsNumber, IsPositive, MaxLength, isPositive } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Vendedores } from "./Vendedor";

@Entity()
export class Cabecera_Factura{
 
    @PrimaryColumn()
    @IsNotEmpty({message:'Debe indicar el ID.'})  
    id:number;
    
    
    @Column({ type: 'date' }) 
    fecha: Date;


    @Column()
    @IsNotEmpty({message:'Debe indicar los apellidos del vendedor.'}) 
    apellidos_cliente: string;
    @Column() 
    direccion_cliente:string;

    @Column() 
    telefono_cliente: string;
    Vendedor: any;

    @OneToMany(()=> Vendedores, (Vendedores)=> Vendedores.Cabecera_Factura)
    Vendedores:Vendedores[]
    
}