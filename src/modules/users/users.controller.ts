import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBody, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user-dto';
import { ParseDatePipe } from 'src/pipes/parse-date.pipe';

@Controller('api/v1/users')
@ApiTags('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    @ApiOperation({ description: 'Create a new user' })
    @ApiBody({
        description: 'User data to create',
        type: UserDto,
        examples: {
            example1: {
                value: {
                    "id": 1,
                    "name": "Tulio Triviño",
                    "email": "emailtest@mail.com",
                    "birthDate": "1990-01-01"
                }
            }
        }
    })
    createUser(@Body() user: UserDto) {
        return this.usersService.createUser(user);
    }

    @Get()
    @ApiQuery({
        name: 'start',
        required: false,
        description: 'Start date for filtering users by birth date',
        type: Date
    })
    @ApiQuery({
        name: 'end',
        required: false,
        description: 'End date for filtering users by birth date',
        type: Date
    })
    @ApiOperation({ description: 'Get users filtered by birth date' })
    getUsers(@Query('start', ParseDatePipe) start: Date, @Query('end', ParseDatePipe) end: Date) {
        return this.usersService.getUsers(start, end);
    }

    @Put()
    @ApiOperation({ description: 'Update or create a user' })
    @ApiBody({
        description: 'User data to update or create',
        type: UserDto,
        examples: {
            example1: {
                value: {
                    "id": 1,
                    "name": "Patana",
                    "email": "emailtest@mail.com",
                    "birthDate": "1990-02-01"
                }
            }
        }
    })
    updateOrCreateUser(@Body() user: UserDto) {
        return this.usersService.updateOrCreateUser(user);
    }

    @Delete(':idUser')
    @ApiOperation({ description: 'Delete a user by ID' })
    @ApiQuery({
        name: 'idUser',
        description: 'ID of the user to delete',
        type: Number
    })
    deleteUser(@Param('idUser') idUser: number) {
        return this.usersService.deleteUser(idUser);
    }
}
