import { Controller, Post, Body, Get, Param, BadRequestException } from '@nestjs/common'
import { HeroService } from '../services/hero/hero.service'
import { HeroDto } from '../core/dtos'
import { Hero } from '../db/schemes'

@Controller('api/heroes')
export class HeroController {

  constructor(
    private readonly heroService: HeroService
  ) {}

  @Post()
  async createHero(@Body() body: HeroDto): Promise<Hero> {
    const hero = await this.heroService.getByName(body.name)

    if(hero) {
      throw new BadRequestException('Hero already exist')
    }
    
    return this.heroService.create(body)
  }

  @Get('/:id')
  async getHeroe(@Param('id') id: string): Promise<Hero> {
    return this.heroService.findOne(id)
  }

  @Get()
  async getAllHeroes(): Promise<Hero[]> {
    return this.heroService.getAllHeroes()
  }
}