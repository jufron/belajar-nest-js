import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { AvatarController } from './avatar/avatar.controller';
import { ProfileController } from './profile/profile.controller';

@Module({
      imports: [],
      controllers: [
        UserController, 
        AvatarController, 
        ProfileController
    ],
      providers: [],
})
export class UserModule {}
