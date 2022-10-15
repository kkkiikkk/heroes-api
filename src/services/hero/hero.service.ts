import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Hero, HeroDocument } from '../../db/schemes'
import { HeroDto } from '../../core/dtos';


@Injectable()
export class HeroService {

  constructor(
    @InjectModel(Hero.name) private readonly heroModel: Model<HeroDocument>
    ) {}

  async create(payload: HeroDto): Promise<Hero> {
    return this.heroModel.create(payload)
  }

  async findOne(id: string): Promise<Hero> {
    return this.heroModel.findById(id)
  }

  async getAllHeroes(): Promise<Hero[]> {
    return this.heroModel.find()
  }

  async getByName(name: string): Promise<Hero | null> {
    return this.heroModel.findOne({ name })
  }
}