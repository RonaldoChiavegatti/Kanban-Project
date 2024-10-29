import { Test, TestingModule } from '@nestjs/testing'; // Importa as ferramentas de teste do NestJS
import { SwimlaneService } from './swimlane.service'; // Importa o serviço a ser testado

describe('SwimlaneService', () => {
  let service: SwimlaneService; // Declara a variável para o serviço

  beforeEach(async () => {
    // Cria um módulo de teste que inclui o serviço
    const module: TestingModule = await Test.createTestingModule({
      providers: [SwimlaneService], // Define o serviço a ser testado
    }).compile(); // Compila o módulo

    service = module.get<SwimlaneService>(SwimlaneService); // Obtém a instância do serviço
  });

  it('should be defined', () => {
    expect(service).toBeDefined(); // Verifica se o serviço está definido
  });
});
