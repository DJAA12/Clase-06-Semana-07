import { IsNotEmpty, IsNumber, IsPositive, MaxLength, isPositive } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Clientes{
 
    @PrimaryColumn()
    @IsNotEmpty({message:'Debe indicar el ID.'})  
    id:number;
    @Column({length:50,nullable:false})
    @MaxLength(50,{message:'Debe contener un máximo de 50 caracteres.'})
    @IsNotEmpty({message:'Debe indicar el nombre del vendedor.'})
    nombre_cliente: string;
    @Column()
    @IsNotEmpty({message:'Debe indicar los apellidos del vendedor.'}) 
    apellidos_cliente: string;
    @Column() 
    direccion_cliente:string;

    @Column() 
    telefono_cliente: string;

    
}