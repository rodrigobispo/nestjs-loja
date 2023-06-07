import { IsArray, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsPositive, MaxLength, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class AtualizaProdutoDTO {

  @IsNotEmpty({ message: 'Nome não pode ser vazio.' })
  @IsOptional()
  nome: string;

  @IsPositive()
  @IsOptional()
  valor: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  quantidade: number;

  @IsNotEmpty()
  @MaxLength(100)
  @IsOptional()
  descricao: string;

  @IsArray()
  // @ValidateNested()
  // @Type(() => )
  @IsOptional()
  caracteristicas: [];

  @IsArray()
  // @ValidateNested()
  // @Type(() => )
  @IsOptional()
  imagens: [];

  @IsNotEmpty()
  @IsOptional()
  categoria: string;

  @IsNotEmpty()
  @IsOptional()
  usuarioId: number;
}
