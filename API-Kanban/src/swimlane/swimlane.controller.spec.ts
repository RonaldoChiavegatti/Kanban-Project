import { Test, TestingModule } from '@nestjs/testing'; // Importa ferramentas de teste do NestJS
import { SwimlaneController } from './swimlane.controller'; // Importa o controlador a ser testado
import { SwimlaneService } from './swimlane.service'; // Importa o serviço utilizado pelo controlador

describe('SwimlaneController', () => {
  let controller: SwimlaneController; // Declara a variável para o controlador

  beforeEach(async () => {
    // Cria um módulo de teste com o controlador e o serviço
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SwimlaneController], // Define o controlador
      providers: [SwimlaneService],       // Define o serviço
    }).compile(); // Compila o módulo

    controller = module.get<SwimlaneController>(SwimlaneController); // Obtém a instância do controlador
  });

  it('should be defined', () => {
    expect(controller).toBeDefined(); // Verifica se o controlador está definido
  });
});
