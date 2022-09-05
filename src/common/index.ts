import { globalConfig } from '@/config';
const prefix = `${globalConfig.projectName}_${process.env.BASE_ENV}`;

export const tokenKey = `${prefix}_token`;
