import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioDTO } from './dto/Usuario.dto';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';
import { UsuarioService } from './usuario.service';


@Controller('/usuarios')
export class UsuarioController {

  constructor(
    private usuarioService: UsuarioService
  ) {}

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: UsuarioDTO) {
    await this.usuarioService.criaUsuario(dadosDoUsuario);
    return `Usuário ${dadosDoUsuario.nome} criado com sucesso.`;
  }

  @Get()
  async listaUsuarios() {
    const usuarios = await this.usuarioService.listaUsuarios();
    return usuarios;
  }

  @Put('/:id')
  async atualizaUsuario(
    @Param('id') id: string,
    @Body() novosDados: AtualizaUsuarioDTO
  ) {
    const usuarioAtualizado = await this.usuarioService.atualizaUsuario(Number(id), novosDados);

    return {
      usuario: usuarioAtualizado,
      mensagem: 'Usuário atualizado com sucesso.'
    }
  }

  @Delete('/:id')
  async removeUsuario(@Param('id') id: string) {
    await this.usuarioService.excluiUsuario({ id: Number(id) });
    return `Usuário ${id} removido com sucesso.`;
  }

}
