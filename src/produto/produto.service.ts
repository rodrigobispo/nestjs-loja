import { Injectable } from "@nestjs/common";
import { AtualizaProdutoDTO } from "./dto/AtualizaProduto.dto";
import { PrismaService } from "src/prisma.service";
import { Produto } from "@prisma/client";
import { ProdutoDTO } from "./dto/Produto.dto";

@Injectable()
export class ProdutoService {

  constructor(
    private readonly prisma: PrismaService
  ) {}

  async criaProduto(produto: ProdutoDTO): Promise<Produto> {
    const data = { ...produto };
    const { caracteristicas } = { ...produto };
    const { imagens } = { ...produto };
    
    return this.prisma.produto.create({
      data: {
        ...data,
        caracteristicas: {
          create: [...caracteristicas]
        },
        imagens: {
          create: [...imagens]
        }
      }
    });
  }
  
  async atualizaProduto(id: number, produto: AtualizaProdutoDTO): Promise<Produto> {
    const data = { ...produto };
    const { caracteristicas } = { ...produto };
    const { imagens } = { ...produto };
    
    return await this.prisma.produto.update({
      where: { id: Number(id) },
      data: {
        ...data,
        caracteristicas: {
          create: [...caracteristicas]
        },
        imagens: {
          create: [...imagens]
        }
      }
    })
  }

  async excluiProduto(id: number) {
    return await this.prisma.produto.delete({
      where: { id: id }
    });
  }

  async listaProdutos() {
    return await this.prisma.produto.findMany();
  }

}
