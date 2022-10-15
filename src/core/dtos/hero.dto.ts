import { IsString, IsBase64, IsNotEmpty, Length } from 'class-validator'

export class HeroDto {

  @IsNotEmpty()
  @IsString()
  @Length(1, 30)
  name: string

  @IsNotEmpty()
  @IsBase64()
  image: string

  @IsNotEmpty()
  @IsString()
  @Length(1)
  price: string

  @IsNotEmpty()
  @IsString()
  @Length(1)
  description: string
  
}