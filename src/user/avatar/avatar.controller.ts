import { Controller, Get, Patch } from '@nestjs/common';

@Controller('api/avatar')
export class AvatarController {
    constructor(
        // private readonly avatarService: AvatarService
    ) {}

    @Get()
    async getAvatar() : Promise<string> {
        return 'This is the avatar endpoint';
    }

    @Patch()
    async updateAvatar() : Promise<string> {
        // const getAvatar = await this.avatarService.getAvatar();
        // if (!getAvatar) {
        //     await this.avatarService.createAvatar();
        // }
        // return getAvatar;
        return 'This is the update avatar endpoint';
    }
}
