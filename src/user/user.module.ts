import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // <-- Impor ConfigModule
import { UserController } from './user/user.controller';
import { AvatarController } from './avatar/avatar.controller';
import { ProfileController } from './profile/profile.controller';

@Module({
      imports: [
        ConfigModule
      ],
      controllers: [
        UserController, 
        AvatarController,
        ProfileController
    ],
      providers: [],
})
export class UserModule {}
