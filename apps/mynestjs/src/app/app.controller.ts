import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

import {TestDTO} from "@myworkspace/api";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData():TestDTO {
    const m = this.appService.getData();
    return {content:m.message};
  }
}
