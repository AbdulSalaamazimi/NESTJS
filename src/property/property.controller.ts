import { Body, Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Post, Query } from '@nestjs/common';
import { get } from 'http';
import path from 'path';
import { PropertyDto } from './dto/property.dto';

@Controller('property')
export class PropertyController {
    @Get()
    findAll() {
        return 'This action returns all properties';
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {

        console.log(typeof id);
        console.log(typeof sort);

        return id;
    }

    @Post()
    create(@Body() body: PropertyDto) {
        return body;
    }
}
