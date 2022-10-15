import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema({
  timestamps: true,
  versionKey: false
})
export class Hero {

  @Prop( { isRequired: true, unique: true } )
  name: string

  @Prop( { isRequired: true } )
  description: string

  @Prop( { isRequired: true } )
  image: string

  @Prop( { isRequired: true })
  price: string

}

export type HeroDocument = Hero & Document

export const HeroSchema = SchemaFactory.createForClass(Hero)