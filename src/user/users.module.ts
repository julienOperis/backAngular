import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';
import {
  Avis,
  Restaurant,
} from 'src/referentiels/restaurant/restaurant.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Restaurant, Avis]),
    JwtModule.register({
      secret: 'your_secret_key', // Remplacez par votre clé secrète
      signOptions: { expiresIn: '60s' }, // Optionnel : temps d'expiration du token
    }),
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
