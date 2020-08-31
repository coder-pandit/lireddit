import { MikroORM } from '@mikro-orm/core';
import path from 'path';
import { __prod__, __dbUser__, __dbPassword__ } from './constants';
import { Post } from './entities/Post';
import { User } from './entities/User';

export default {
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/
  },
  entities: [Post, User],
  dbName: 'lireddit',
  user: __dbUser__,
  password: __dbPassword__,
  type: 'postgresql',
  debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];
