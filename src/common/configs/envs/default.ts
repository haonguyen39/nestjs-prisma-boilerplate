export const config = {
  db: {
    type: process.env.DB_TYPE || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'dbname',
    username: process.env.DB_USERNAME || 'username',
    password: process.env.DB_PASSWORD || 'password',
    ssl: !!process.env.DB_SSL || false,

    entities: [`dist/api/**/*.entity{.ts,.js}`],

    migrations: [`dist/database/migrations/**/*{.ts,.js}`],
    logging: false,
    synchronize: process.env.DB_SYNCHRONIZE || true,
    autoLoadEntities: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET_KEY,
  },

  email: {
    transport: {
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.EMAIL_SENDER || 'username',
        pass: process.env.EMAIL_SENDER_PASSWORD || 'password',
      },
    },
    defaults: {
      from: '"nest-modules" <modules@nestjs.com>',
    },
    template: {
      dir: 'dist/templates',

      options: {
        strict: true,
      },
    },
  },

  swagger: {
    version: '1.0',
    bearerAuth: {
      type: 'http',
      in: 'Header',
      scheme: 'Bearer',
      bearerFormat: 'Bearer',
      name: 'Authorization',
      description: 'Please enter JWT token',
    },
  },
};
