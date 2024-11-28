import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { BreedsModule } from './breeds/breeds.module';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { ClientesModule } from './clientes/clientes.module';
import { LibrosModule } from './libros/libros.module';
import { EstadoModule } from './estado/estado.module';
import { EquiposModule } from './equipos/equipos.module';
import { ReservasModule } from './reservas/reservas.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      ssl: process.env.POSTGRES_SSL === 'true',
      extra: {
        ssl:
          process.env.POSTGRES_SSL === 'true'
            ? {
                rejectUnauthorized: false,
              }
            : null,
      },
    }),
    CatsModule,
    BreedsModule,
    UsersModule,
    AuthModule,
    ClientesModule,
    LibrosModule,
    EstadoModule,
    EquiposModule,
    ReservasModule,
    EstudiantesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
