import { Column, Entity, Index, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    userName:string;

    @PrimaryColumn()
    userId:string;
   
    @Column()
    password:string;
}