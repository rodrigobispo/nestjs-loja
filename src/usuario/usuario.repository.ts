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

  async atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>) {
    const possivelUsuario = this.usuarios.find(usuarioSalvo => usuarioSalvo.id === id);
    
    if (!possivelUsuario) {
      throw new Error('Usuário não existe.');
    }

    Object.entries(dadosDeAtualizacao).forEach(
      ([chave, valor]) => {
        if (chave === id) {
          return;
        }
        possivelUsuario[chave] = valor;
      }
      )
  }

  async exclui(id: string) {
    this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
  }

  async jaExisteComEmail(email: string) {
    const possivelUsuarioComEmail = this.usuarios.find(
      usuario => usuario.email === email
    );
    return possivelUsuarioComEmail !== undefined;
  }
  
}
