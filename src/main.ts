import { initApplication } from './app';

async function bootstrap() {
  const app = await initApplication();
  await app.listen(3000);
}
bootstrap();
