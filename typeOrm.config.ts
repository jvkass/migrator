import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { CreateUserTable1678666724470 } from './src/database/migration/1678666724470-CreateUserTable';
import { CreateUserPasswordTable1678666981781 } from './src/database/migration/1678666981781-CreateUserPasswordTable';
import { CreateUserEmailTable1678667048390 } from './src/database/migration/1678667048390-CreateUserEmailTable';

config();
 
const configService = new ConfigService();
 
export default new DataSource({
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: 'postgres',
  password:  'newPassword',
  database: configService.get('DB_NAME'),
  entities: [],
  migrations: [CreateUserTable1678666724470,CreateUserPasswordTable1678666981781, CreateUserEmailTable1678667048390],
});