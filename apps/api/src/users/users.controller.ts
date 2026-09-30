import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @ApiOperation({ summary: 'Create a new user' })
    @Post()
    create(@Body() dto: CreateUserDto): Promise<User> {
        return this.usersService.create(dto);
    }
}
