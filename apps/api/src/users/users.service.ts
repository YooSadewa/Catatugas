import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>
    ) {}

    findAll(): Promise<User[]> {
        return this.userRepo.find({
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                schoolName: true,
                majorName: true,
                createdAt: true,
            },
        });
    }

    async create(dto: CreateUserDto): Promise<User> {
        const hashedPassword = await bcrypt.hash(dto.password, 10);
        const newUser = this.userRepo.create({
            ...dto,
            password: hashedPassword,
        });
        return this.userRepo.save(newUser);
    }
}
