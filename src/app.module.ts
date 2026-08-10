import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './config/database.config';
import cookieConfig from './config/cookies.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig, cookieConfig]
    }), // Hanya bertugas memuat file .env ke memory
    UserModule, 
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
