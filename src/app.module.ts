import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import config from './config';
import { enviroments } from './enviroments';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptor } from './core/interceptors/transform.interceptor';
import { PrismaModule } from './core/prisma/prisma.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { MenusModule } from './menus/menus.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        //Configurations
        APP_NAME: Joi.string().required(),
        APP_DESCRIPTION: Joi.string().required(),
        AUTHOR: Joi.string().required(),
        APP_VERSION: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
    }),
    PrismaModule,
    RestaurantsModule,
    MenusModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
    AppService,
  ],
})
export class AppModule {}
