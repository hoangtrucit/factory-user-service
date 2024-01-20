import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { RepositoriesModule } from './postgresql/repositories.module';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import rootConfiguration from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [join(process.cwd(), 'env', `.env`)],
      load: [rootConfiguration],
    }),
    UserModule,
    RepositoriesModule.forRoot({
      database: rootConfiguration().DB_DATABASE,
      host: rootConfiguration().DB_HOST,
      port: rootConfiguration().DB_PORT,
      username: rootConfiguration().DB_USERNAME,
      password: rootConfiguration().DB_PASSWORD,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
