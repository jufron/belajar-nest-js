import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user/user.controller';
import { AvatarController } from './user/avatar/avatar.controller';
import { ProfileController } from './user/profile/profile.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, AvatarController, ProfileController],
  providers: [AppService],
})
export class AppModule {}
