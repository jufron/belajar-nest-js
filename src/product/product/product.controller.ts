import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import type { Response } from 'express';

@Controller('product')
export class ProductController {

    @Get()
    setCookie(
        @Query('name') name: string,
        @Res({ passthrough: true }) res: Response
    ) {
        res.cookie('name', name);
        res.status(200).send('success');
    }
}
