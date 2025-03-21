import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: 
  process.env.DATABASE_URL || 'mongodb://localhost:27017/note-app',
  javaWebToken: process.env.JWT_SECRET || 'jwt_secret',
};
