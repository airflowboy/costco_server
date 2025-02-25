import { Controller, Get } from '@nestjs/common';

@Controller('home')
export class HomeController {
  @Get()
  getHome(): string {
    return 'Welcome to the Home Controller!';
  }
}
