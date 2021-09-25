import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entitiy';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly MoviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.MoviesService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string): Movie {
    return this.MoviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieDatas) {
    return this.MoviesService.create(movieDatas);
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return this.MoviesService.deleteOne(movieId);
  }

  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return this.MoviesService.update(movieId, updateData);
  }
}
