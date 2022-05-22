import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/dtos/middlewares/logger.middleware';
import { UsersModule } from './users/users.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { ChannelsModule } from './channels/channels.module';
import { DmsModule } from './dms/dms.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from 'ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    // TypeOrmModule.forRootAsync({
    //   inject: [ConfigService],
    //   useFactory: async (configService) =>
    //     ({
    //       type: 'mysql',
    //       host: 'localhost',
    //       port: 3306,
    //       username: configService.get('DB_USERNAME'),
    //       password: configService.get('DB_PASSWORD'),
    //       database: configService.get('DB_DATABASE'),
    //       entities: [__dirname + '/entities/*.entity.{js,ts}'],
    //       synchronize: false,
    //       logging: true,
    //       keepConnectionAlive: true,
    //     }),
    // }),
    UsersModule,
    WorkspacesModule,
    ChannelsModule,
    DmsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
