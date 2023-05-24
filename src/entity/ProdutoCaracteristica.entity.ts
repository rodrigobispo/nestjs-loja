import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("produto_caracteristicas")
export class ProdutoCaracteristicaEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({ name: "nome", length: 100, nullable: false })
  nome: string;

  @Column({ name: "descricao", length: 100, nullable: false })
  descricao: string;

}
