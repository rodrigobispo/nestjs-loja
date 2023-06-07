import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class UsuarioRepository {
  
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async jaExisteComEmail(email: string) {
    const possivelUsuarioComEmail = await this.prisma.usuario.findFirst({
      where: { email: email }
    });

    return possivelUsuarioComEmail !== null;
  }

}
