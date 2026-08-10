import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
    host:           process.env.DB_HOST,
    port:           process.env.DB_PORT || 3306,
    username:       process.env.DB_USERNAME || 'root',
    password:       process.env.DB_PASSWORD || '',
    database:       process.env.DB_NAME || 'my_database',
    synchronize:    process.env.DB_SYNCHRONIZE === 'true',
    logging:        process.env.DB_LOGGING === 'true',
}));