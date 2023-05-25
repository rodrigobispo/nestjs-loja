import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";
import { ProdutoDTO } from "./dto/Produto.dto";
import { ProdutoEntity } from "src/entity/Produto.entity";
import { randomUUID } from "crypto";
import { ProdutoService } from "./produto.service";

@Controller()
export class ProdutoController {

  constructor(private produtoRepository: ProdutoRepository, private readonly produtoService: ProdutoService) {}

  @Post('/produtos')
  public async criaProduto(@Body() dadosDoProduto: ProdutoDTO) {

    const produto = new ProdutoEntity();

    produto.id = randomUUID();
    produto.nome = dadosDoProduto.nome;
    produto.usuarioId = dadosDoProduto.usuarioId;
    produto.valor = dadosDoProduto.valor;
    produto.quantidade = dadosDoProduto.quantidade;
    produto.descricao = dadosDoProduto.descricao;
    produto.categoria = dadosDoProduto.categoria;

    return this.produtoService.criaProduto(produto);
  }

  @Get('/produtos')
  public async listaProdutos() {
    return this.produtoService.listaProdutos();
  }

}
