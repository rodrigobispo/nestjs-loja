import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";

@Controller()
export class ProdutoController {

  constructor(private produtoRepository: ProdutoRepository) {}

  @Post('/produtos')
  public async criaProduto(@Body() produto) {
    return this.produtoRepository.salvar(produto);
  }

  @Get('/produtos')
  public async listaProdutos() {
    return this.produtoRepository.listar();
  }

}