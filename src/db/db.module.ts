import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports:    [ ConfigModule ],
      useFactory: (configService: ConfigService) => ({
        uri:               configService.get('DB_URL'),
        connectionFactory: (connection) => {
          return connection;
          },
      }),
      inject: [ ConfigService ],
    }),
    ],
})
export class DbModule {}