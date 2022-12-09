import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { ClassesModule } from './classes/classes.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthModule,
    StudentsModule,
    ClassesModule,
    UsersModule,
    MongooseModule.forRoot(`mongodb://mongo/nest`),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
