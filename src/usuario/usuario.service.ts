import { Injectable } from "@nestjs/common";
import { AtualizaUsuarioDTO } from "./dto/AtualizaUsuario.dto";
import { PrismaService } from "src/prisma.service";
import { Prisma, usuarios } from "@prisma/client";

@Injectable()
export class UsuarioService {
  
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async criaUsuario(usuario: Prisma.usuariosCreateInput): Promise<usuarios> {
    return this.prisma.usuarios.create({
      data: { ...usuario }
    });
  }

  async atualizaUsuario(id: number, usuario: AtualizaUsuarioDTO): Promise<usuarios> {
    return await this.prisma.usuarios.update({
      where: { id: Number(id) },
      data: { ...usuario }
    })
  }

  async excluiUsuario(where: Prisma.usuariosWhereUniqueInput): Promise<usuarios> {
    return this.prisma.usuarios.delete({
      where,
    });
  }

  async listaUsuarios(): Promise<usuarios[]> {
    return this.prisma.usuarios.findMany({
      where: {
        OR: [
          { nome: { contains: 'pris' } },
          { email: { contains: 'pris' } }
        ]
      },
    });
  }

  async findById(where: Prisma.usuariosWhereUniqueInput): Promise<usuarios | null> {
    return this.prisma.usuarios.findUnique({ where, })
  }

  
  // Também funciona:
  // async criaUsuario(usuario: Prisma.usuariosCreateInput): Promise<usuarios> {
  //   const { nome, email, senha } = usuario;
  //   return this.prisma.usuarios.create({
  //     data: {
  //       nome, email, senha
  //     }
  //   });
  // }
}
