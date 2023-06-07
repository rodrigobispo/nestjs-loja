import { Body, 
  Controller, 
  Delete, 
  Get, 
  Param, 
  Post, 
  Put } from "@nestjs/common";
import { ProdutoDTO } from "./dto/Produto.dto";
import { ProdutoService } from "./produto.service";
import { AtualizaProdutoDTO } from "./dto/AtualizaProduto.dto";

@Controller('/produtos')
export class ProdutoController {

  constructor(
    private readonly produtoService: ProdutoService
  ) {}

  @Post()
  public async criaProduto(@Body() dadosDoProduto: ProdutoDTO) {
    return this.produtoService.criaProduto(dadosDoProduto);
  }

  @Get()
  public async listaProdutos() {
    return this.produtoService.listaProdutos();
  }

  @Put('/:id')
  async atualizaProduto(
    @Param('id') id: string,
    @Body() novosDados: AtualizaProdutoDTO
  ) {
    const produtoAtualizado = await this.produtoService.atualizaProduto(Number(id), novosDados);

    return {
      usuario: produtoAtualizado,
      mensagem: 'Produto atualizado com sucesso.'
    }
  }

  @Delete('/:id')
  async removeProduto(@Param('id') id: string) {
    await this.produtoService.excluiProduto(Number(id));
    return `Produto ${id} removido com sucesso.`
  }
}
