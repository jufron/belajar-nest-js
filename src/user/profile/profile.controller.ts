import { 
    Controller, 
    Delete, 
    Get, 
    Header, 
    HttpCode, 
    Param, 
    Patch, 
    Redirect, 
    Req, 
    Res 
} from '@nestjs/common';

type logData = {
    method: string;
    url: string;
    userAgent: string;
    body: any;
};

@Controller('api/profile')
export class ProfileController {
    @Get()
    getProfile() {
        return 'This is the profile endpoint';
    }

    @Patch(':id')
    updateProfile(
        @Param('id') id: string, 
        @Req() request: Request
    ) {
        // penggunaan method request akan berguna untuk mendapatkan informasi tambahan untuk membuat logging
        const dataLog : logData = {
            method      : request.method,
            url         : request.url,
            userAgent   : request.headers['user-agent'],
            body        : request.body
        };
        return `This is the update profile endpoint with User-Agent: ${dataLog.userAgent}, Method: ${dataLog.method}, URL: ${dataLog.url}, Body: ${JSON.stringify(dataLog.body)}`;
    }
 
    @Delete(':id')
    deleteProfile(@Param('id') id: string) {
        return `This is the delete profile endpoint for ID: ${id}`;
    }

    // sagnat tidak direkomenasikan untuk menggunakan @Res() karena akan mematikan fitur auto response dari NestJS, sehingga kita harus mengatur response secara manual
    @Get('information')
    @Header('content-type', 'application/json')
    @HttpCode(200)
    getProfileInformation() : Record <string, string> {
        return {
            'data'  : 'hello json'
        };
    }

    @Get('information/v1')
    @Redirect('/api/information/v2', 302)
    @Header('content-type', 'application/json')
    redirect1 () {
        return {
            url: 'api/information/v1',
            statusCode: 302
        }
    }
}
