import { Module } from "@nestjs/common";
import { ProdutoController } from "./produto.controller";
import { ProdutoService } from "./produto.service";
import { PrismaService } from "src/prisma.service";


@Module({
  imports: [],
  controllers: [ProdutoController],
  providers: [ProdutoService, PrismaService]
})
export class ProdutoModule {}
