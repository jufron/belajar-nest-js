import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';

type jenisKelamin = 'Laki-laki' | 'Perempuan';
type bodyPost = {
    name: string;
    JenisKelamin: jenisKelamin;
    age: number;
    email: string;
};

@Controller('api/user')
export class UserController {
    @Get()
    getUser(
        @Query('name') name: string,
        @Query('age') age: number,
        @Query('email') email: string
    ) {
        return `This is the user endpoint with name: ${name ?? 'N/A'}, age: ${age ?? 'N/A'}, email: ${email ?? 'N/A'}`;
    }

    @Post()
    createUser(@Body() body: bodyPost) {
        return 'This is the create user endpoint';
    }

    @Get('/:id')
    getUserById(@Param('id') id: string) {
        return `This is the user endpoint for ID: ${id}`;
    }

    @Delete('/:id')
    deleteUserById(@Param('id') id: string) {
        return `This is the delete user endpoint for ID: ${id}`;
    }
}