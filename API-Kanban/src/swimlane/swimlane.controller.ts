import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Put,
} from '@nestjs/common';
import { SwimlaneService } from './swimlane.service';
import { CreateSwimlaneDto } from './dto/create-swimlane.dto';
import { UpdateSwimlaneDto } from './dto/update-swimlane.dto';
import { AuthGuard, PayloadRequest } from 'src/auth/auth/auth.guard';
import { ReordereSwimlaneDto } from './dto/reorder-swimlane.dto';

@Controller('swimlane') // Define a rota base para swimlanes
export class SwimlaneController {
  constructor(private readonly swimlaneService: SwimlaneService) {} // Injeta o SwimlaneService

  @Post() // Método para criar uma swimlane
  @UseGuards(AuthGuard) // Protege a rota com autenticação
  create(
    @Request() req: PayloadRequest, // Obtém informações do usuário autenticado
    @Body() createSwimlaneDto: CreateSwimlaneDto, // Recebe dados para criar a swimlane
  ) {
    return this.swimlaneService.create(createSwimlaneDto, req.user.id); // Chama o serviço para criar a swimlane
  }

  @Put('update-order') // Método para atualizar a ordem das swimlanes
  @UseGuards(AuthGuard) // Protege a rota com autenticação
  updateOrder(
    @Request() req: PayloadRequest, // Obtém informações do usuário autenticado
    @Body() reorderedSwimlanes: ReordereSwimlaneDto, // Recebe dados para reordenar swimlanes
  ) {
    return this.swimlaneService.updateSwimlaneOrders(
      reorderedSwimlanes,
      req.user.id, // Chama o serviço para atualizar a ordem das swimlanes
    );
  }

  @Get('/board/:boardId') // Método para obter todas as swimlanes de um board específico
  @UseGuards(AuthGuard) // Protege a rota com autenticação
  findAll(@Param('boardId') boardId: string, @Request() req: PayloadRequest) {
    return this.swimlaneService.findAllByBoardId(Number(boardId), req.user.id); // Chama o serviço para obter as swimlanes do board
  }

  @Patch(':id') // Método para atualizar uma swimlane específica
  @UseGuards(AuthGuard) // Protege a rota com autenticação
  update(
    @Param('id') id: string, // Recebe o ID da swimlane a ser atualizada
    @Body() updateSwimlaneDto: UpdateSwimlaneDto, // Recebe dados para atualizar a swimlane
    @Request() req: PayloadRequest, // Obtém informações do usuário autenticado
  ) {
    return this.swimlaneService.update(+id, req.user.id, updateSwimlaneDto); // Chama o serviço para atualizar a swimlane
  }

  @Delete(':id') // Método para remover uma swimlane específica
  @UseGuards(AuthGuard) // Protege a rota com autenticação
  remove(@Param('id') id: string, @Request() req: PayloadRequest) {
    return this.swimlaneService.remove(+id, req.user.id); // Chama o serviço para remover a swimlane
  }
}
