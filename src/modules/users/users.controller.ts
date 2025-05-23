import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('api/v1/users')
@ApiTags('users')
export class UsersController {

    constructor(private usersService: UsersService) {}
}
