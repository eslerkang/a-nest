import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import config from 'config';

const DB_CONFIG = config.get('db');
const ormconfig = {
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
  charset: 'utf8mb4',
  migrations: ['src/migrations/*.ts'],
  migrationsTableName: 'migrations',
  cli: { migrationsDir: 'src/migrations' },
};

export default ormconfig as TypeOrmModuleOptions;
