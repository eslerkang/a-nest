import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import config from 'config';

const DB_CONFIG = config.get('db');
const ormconfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: DB_CONFIG.host,
  port: 3306,
  username: DB_CONFIG.username,
  password: DB_CONFIG.password,
  database: DB_CONFIG.database,
  entities: [__dirname + '/src/entities/*.{js,ts}'],
  synchronize: false,
  logging: true,
  keepConnectionAlive: true,
};

export default ormconfig;
