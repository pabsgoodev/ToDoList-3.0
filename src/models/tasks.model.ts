import { Entity, PrimaryGeneratedColumn, Column,  } from "typeorm";

@Entity()
export class tarefa {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 255 })
    titulo!: string;

    @Column({ type: "boolean", default: false })
    concluida!: boolean;
}