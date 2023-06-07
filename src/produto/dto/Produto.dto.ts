import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsPositive, MaxLength, ValidateNested } from "class-validator";
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
  // @ValidateNested()
  // @Type(() => )
  caracteristicas: [];

  @IsArray()
  // @ValidateNested()
  // @Type(() => )
  imagens: [];

  @IsNotEmpty()
  categoria: string;

  @IsOptional()
  usuarioId: number;
}
