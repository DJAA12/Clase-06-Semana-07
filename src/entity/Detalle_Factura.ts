import { IsNotEmpty, IsNumber, IsPositive, MaxLength, isPositive } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Detalle_Factura{
 
    @PrimaryColumn()
    @IsNotEmpty({message:'Debe indicar el ID.'})  
    id:number;
    @Column({length:50,nullable:false})
    @MaxLength(50,{message:'Debe contener un máximo de 50 caracteres.'})
    @IsNotEmpty({message:'Debe indicar el nombre del vendedor.'})
    cantidad: number;

    
}