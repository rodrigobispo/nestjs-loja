import { Injectable } from "@nestjs/common";
import { AtualizaUsuarioDTO } from "./dto/AtualizaUsuario.dto";
import { PrismaService } from "src/prisma.service";
import { Prisma, Usuario } from "@prisma/client";

@Injectable()
export class UsuarioService {
  
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async criaUsuario(usuario: Prisma.UsuarioCreateInput): Promise<Usuario> {
    return this.prisma.usuario.create({
      data: { ...usuario }
    });
  }

  async atualizaUsuario(id: number, usuario: AtualizaUsuarioDTO): Promise<Usuario> {
    return await this.prisma.usuario.update({
      where: { id: Number(id) },
      data: { ...usuario }
    })
  }

  async excluiUsuario(id: number): Promise<Usuario> {
    return await this.prisma.usuario.delete({
      where: { id: id }
    });
  }

  async listaUsuarios(): Promise<Usuario[]> {
    return this.prisma.usuario.findMany({
      where: {
        OR: [
          { nome: { contains: 'pris' } },
          { email: { contains: 'pris' } }
        ]
      },
    });
  }

  async findById(where: Prisma.UsuarioWhereUniqueInput): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({ where, })
  }
}
