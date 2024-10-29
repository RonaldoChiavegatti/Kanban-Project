import { Injectable, UnauthorizedException } from '@nestjs/common'; // Importa decorators e exceções do NestJS
import { UpdateUserDto } from './dto/update-user.dto'; // Importa o DTO para atualização de usuário
import { InjectRepository } from '@nestjs/typeorm'; // Importa o decorator para injeção de repositório
import { User } from './entities/user.entity'; // Importa a entidade do usuário
import { Repository } from 'typeorm'; // Importa o repositório do TypeORM
import { RegisterDto } from 'src/auth/dto/register.dto'; // Importa o DTO para registro de usuário

@Injectable() // Indica que esta classe pode ser injetada como um serviço
export class UserService {
  constructor(
    @InjectRepository(User) // Injeta o repositório de usuários
    private userRepository: Repository<User>,
  ) {}

  // Cria um novo usuário
  create(createUserDto: RegisterDto) {
    const user = new User(); // Cria uma nova instância de User
    user.email = createUserDto.email; // Define o email
    user.firstName = createUserDto.firstName; // Define o primeiro nome
    user.lastName = createUserDto.lastName; // Define o sobrenome
    user.password = createUserDto.password; // Define a senha
    return this.userRepository.save(user); // Salva o usuário no repositório
  }

  // Encontra um usuário pelo ID
  findOne(id: number) {
    return this.userRepository.findOneBy({ id }); // Retorna o usuário correspondente ao ID
  }

  // Verifica se o usuário está conectado a um board específico
  async isConnectedToBoard(id: number, boardId: number) {
    const user = await this.userRepository.findOne({
      where: {
        id,
        boards: {
          id: boardId,
        },
      },
      relations: ['boards'], // Carrega a relação com boards
    });

    // Lança exceção se o usuário não estiver associado ao board
    if (!user) {
      throw new UnauthorizedException('You are not a part of this board.');
    }

    return true; // Retorna true se o usuário está associado ao board
  }

  // Verifica se o usuário está conectado a uma swimlane específica
  async isConnectedToSwimlane(id: number, swimlaneId: number) {
    const user = await this.userRepository.findOne({
      where: {
        id,
        boards: {
          swimlanes: {
            id: swimlaneId,
          },
        },
      },
      relations: ['boards', 'boards.swimlanes'], // Carrega as relações com boards e swimlanes
    });

    // Lança exceção se o usuário não estiver associado à swimlane
    if (!user) {
      throw new UnauthorizedException('You are not a part of this board.');
    }

    return true; // Retorna true se o usuário está associado à swimlane
  }

  // Atualiza informações de um usuário
  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, {
      firstName: updateUserDto.firstName, // Atualiza o primeiro nome
      lastName: updateUserDto.lastName, // Atualiza o sobrenome
    });
  }

  // Remove um usuário pelo ID
  remove(id: number) {
    return this.userRepository.delete(id); // Deleta o usuário do repositório
  }
}
