import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "src/entity/Usuario.entity";

@Injectable()
export class UsuarioRepository {
  private usuarios: Array<UsuarioEntity> = [];

  async salvar(usuario: UsuarioEntity) {
    this.usuarios.push(usuario);
  }

  async listar() {
    return this.usuarios;
  }

  async jaExisteComEmail(email: string) {
    const possivelUsuarioComEmail = this.usuarios.find(
      usuario => usuario.email === email
    );
    return possivelUsuarioComEmail !== undefined;
  }
}
