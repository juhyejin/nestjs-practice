import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    
      "type": "mysql",
      "host":"localhost",
      "port":3306,
      "username":"root",
      "password":"apfhd7573!",
      "database":"",
      "entities":["dist/**/*.entity{.ts,.js"],
      "synchronize":true
  
  })],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection){}
}
