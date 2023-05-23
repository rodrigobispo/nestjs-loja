import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { UsuarioDTO } from './dto/Usuario.dto';
import { UsuarioEntity } from 'src/entity/Usuario.entity';
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {

  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: UsuarioDTO) {
    const usuario = new UsuarioEntity();

    usuario.nome = dadosDoUsuario.nome;
    usuario.email = dadosDoUsuario.email;
    usuario.senha = dadosDoUsuario.senha;
    usuario.id = uuid();

    this.usuarioRepository.salvar(usuario);
    return `Usuário ${usuario.nome} com id ${usuario.id} criado com sucesso.`;
  }

  @Get()
  async listaUsuarios() {
    const usuariosSalvos = await this.usuarioRepository.listar();
    const listaDeUsuarios = usuariosSalvos.map(
      usuario => new ListaUsuarioDTO(
        usuario.nome,
        usuario.id
      )
    );
    
    return listaDeUsuarios;
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
