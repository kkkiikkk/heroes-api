import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { dbConfig } from './configurations'
import { DbModule } from './db/db.module'
import { HeroModule } from './services/hero/hero.module'
import { HeroController } from './controllers/hero.controller'

@Module({
  imports: [
        ConfigModule.forRoot({
            load: [dbConfig],
            isGlobal: true,
        }),
        DbModule,
        HeroModule
  ],
  controllers: [
    HeroController
  ],
  providers: [],
})
export class AppModule {}
