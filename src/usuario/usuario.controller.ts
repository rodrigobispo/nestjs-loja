import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { UsuarioDTO } from './dto/Usuario.dto';
import { UsuarioEntity } from 'src/entity/Usuario.entity';
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('/usuarios')
export class UsuarioController {

  constructor(
    private usuarioRepository: UsuarioRepository,
    private usuarioService: UsuarioService
  ) {}

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: UsuarioDTO) {
    const usuario = new UsuarioEntity();

    usuario.nome = dadosDoUsuario.nome;
    usuario.email = dadosDoUsuario.email;
    usuario.senha = dadosDoUsuario.senha;
    usuario.id = uuid();

    await this.usuarioService.criaUsuario(usuario);
    return `Usuário ${usuario.nome} com id ${usuario.id} criado com sucesso.`;
  }

  @Get()
  async listaUsuarios() {
    const usuarios = await this.usuarioService.listaUsuarios();
    return usuarios;
  }

  @Put('/:id')
  async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AtualizaUsuarioDTO) {
    const usuarioAtualizado = await this.usuarioRepository.atualizar(id, novosDados);

    return {
      usuario: usuarioAtualizado,
      mensagem: 'Usuário atualizado com sucesso.'
    }
  }

  @Delete('/:id')
  async removeUsuario(@Param('id') id: string) {
    await this.usuarioRepository.excluir(id);
    return `Usuário ${id} removido com sucesso.`
  }

}
