import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserDto } from 'src/dto/user.dto';
import { RestaurantMapper } from 'src/mappers/restaurant.mapper';
import { UsersService } from 'src/user/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<UserDto | null> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      // Si l'authentification est réussie, retourne les données utilisateur
      const userDto: UserDto = {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        profilePicture: user.profilePicture,
        favoriteRestaurants: [],
      };

      if (user.favoriteRestaurants) {
        userDto.favoriteRestaurants = user.favoriteRestaurants.map(
          (restaurant) => RestaurantMapper.mapRestaurantToDto(restaurant),
        );
      }

      return userDto;
    }
    return null;
  }

  // Génération du JWT après validation de l'utilisateur
  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
