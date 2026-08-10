import { registerAs } from '@nestjs/config';

export default registerAs('cookies', () => ({
  secret: process.env.COOKIE_SECRET || 'your-secret-key',
}));