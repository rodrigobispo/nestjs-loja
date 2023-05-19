import { Injectable } from "@nestjs/common";

@Injectable()
export class ProdutoRepository {

  private produtos = [];

  public async salvar(produto) {
    this.produtos.push(produto);
    console.log(this.produtos);
    return 'produto criado com sucesso!';
  }

  public async listar() {
    return this.produtos;
  }

}