import { Injectable } from "@nestjs/common";
import { ProdutoDTO } from "./dto/Produto.dto";

@Injectable()
export class ProdutoRepository {

  private produtos = [];

  public async salvar(produto: ProdutoDTO) {
    this.produtos.push(produto);
    console.log(this.produtos);
    return 'produto criado com sucesso!';
  }

  public async listar() {
    return this.produtos;
  }

}