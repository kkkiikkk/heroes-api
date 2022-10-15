import { Module } from '@nestjs/common'
import { HeroService } from './hero.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Hero, HeroSchema } from '../../db/schemes'

@Module({
  imports: [MongooseModule.forFeature([{ name: Hero.name, schema: HeroSchema }])],
  providers: [HeroService],
  exports: [HeroService],
})
export class HeroModule {}