import { getEnv } from '@/utils/helper/CheckingEnvironment';
import type { config as base } from './envs/default';
import type { config as custom } from './envs/production';
import { mergeDeepRight } from 'ramda';

type TDefaultConfig = typeof base;
type TCustomConfig = typeof custom;
type TConfig = TDefaultConfig & TCustomConfig;

export const configuration = async (): Promise<TConfig> => {
  const { config: baseConfig }: { config: TDefaultConfig } = await import(
    `${__dirname}/envs/default`
  );

  const { config: customConfig }: { config: TCustomConfig } = await import(
    `${__dirname}/envs/${getEnv()}`
  );

  return mergeDeepRight(baseConfig, customConfig);
};
