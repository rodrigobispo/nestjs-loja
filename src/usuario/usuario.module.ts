import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";
import { EmailEhUnicoValidator } from "./validacao/email-eh-unico.validator";
import { UsuarioService } from "./usuario.service";
import { PrismaService } from "src/prisma.service";

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [UsuarioRepository, EmailEhUnicoValidator, UsuarioService, PrismaService]
})

export class UsuarioModule {}
