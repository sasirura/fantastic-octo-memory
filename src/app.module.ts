import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    UserModule,
    MongooseModule.forRoot(
      'mongodb+srv://sasiru:CdlPF7dJig2cZSNv@medicare.x2up3ox.mongodb.net/location-device-management?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
