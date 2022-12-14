import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'body-parser'

(async () => {
    const app = await NestFactory.create(AppModule);
    app.use(json({ limit: '50mb' }))
    await app.listen(3000);
})()
