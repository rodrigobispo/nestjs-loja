import { Injectable } from "@nestjs/common";
import { UsuarioDTO } from "./dto/Usuario.dto";

@Injectable()
export class UsuarioRepository {
  private usuarios = [];

  async salvar(usuario: UsuarioDTO) {
    this.usuarios.push(usuario);
  }

  async listar() {
    return this.usuarios;
  }
}
