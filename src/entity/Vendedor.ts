
import { IsNotEmpty, IsNumber, IsPositive, MaxLength, isPositive } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Cabecera_Factura } from "./Cabecera_Factura";

@Entity()
export class Vendedores{
 
    @PrimaryColumn()
    @IsNotEmpty({message:'Debe indicar el ID.'})  
    id:number;
    @Column({length:50,nullable:false})
    @MaxLength(50,{message:'Debe contener un máximo de 50 caracteres.'})
    @IsNotEmpty({message:'Debe indicar el nombre del vendedor.'})
    nombre_vendedor: string;
    @Column()
    @IsNotEmpty({message:'Debe indicar los apellidos del vendedor.'}) 
    apellidos_vendedor: string;
    @Column() 
    direccion_vendedor:string;

    @Column() 
    telefono_vendedor: string;

    @Column()
    celular_vendedor: string;

    @ManyToOne(()=>Cabecera_Factura, (Cabecera_Factura)=> Cabecera_Factura.Vendedor)   
    Cabecera_Factura: Cabecera_Factura;




    
}