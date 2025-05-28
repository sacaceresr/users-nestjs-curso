import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UserDto {

    @ApiProperty({
        name: 'id',
        type: Number,
        description: 'Unique identifier for the user',
        required: true,
    })
    @IsNumber()
    @IsNotEmpty()
    id: number;
    
    @ApiProperty({
        name: 'name',
        type: String,
        description: 'Name of the user',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        name: 'email',
        type: String,
        description: 'Email of the user',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        name: 'birthDate',
        type: Date,
        description: 'Birth date of the user',
        required: true,
    })
    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    birthDate: Date;
}