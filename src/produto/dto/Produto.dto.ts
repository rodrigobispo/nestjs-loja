import { IsArray, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsPositive, MaxLength, ValidateNested } from "class-validator";
import { CaracteristicaProdutoDTO } from "./CaracteristicaProduto.dto";
import { ImagemProdutoDTO } from "./ImagemProduto.dto";
import { Type } from "class-transformer";

export class ProdutoDTO {

  @IsNotEmpty({ message: 'Nome não pode ser vazio.' })
  nome: string;

  @IsPositive()
  valor: number;

  @IsNumber()
  @IsPositive()
  quantidade: number;

  @IsNotEmpty()
  @MaxLength(100)
  descricao: string;

  @IsArray()
  @ValidateNested()
  @Type(() => CaracteristicaProdutoDTO)
  caracteristicas: CaracteristicaProdutoDTO[];

  @IsArray()
  @ValidateNested()
  @Type(() => ImagemProdutoDTO)
  imagens: ImagemProdutoDTO[];

  @IsNotEmpty()
  categoria: string;

  @IsNotEmpty()
  usuarioId: string;
}
