import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user-dto';

@Controller('api/v1/users')
@ApiTags('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    createUser(@Body() user: UserDto) {
        return this.usersService.createUser(user);
    }
}
