import { Controller, Delete, Get, Patch } from '@nestjs/common';

@Controller('api/profile')
export class ProfileController {
    @Get()
    getProfile() {
        return 'This is the profile endpoint';
    }

    @Patch()
    updateProfile() {
        return 'This is the update profile endpoint';
    }

    @Delete()
    deleteProfile() {
        return 'This is the delete profile endpoint';
    }
}
