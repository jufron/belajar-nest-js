import { Controller, Get, Patch } from '@nestjs/common';

@Controller('api/avatar')
export class AvatarController {
    @Get()
    getAvatar() {
        return 'This is the avatar endpoint';
    }

    @Patch()
    updateAvatar() {
        return 'This is the update avatar endpoint';
    }
}
