import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import utils from '../utils';
const { APP_SECRET } = utils;

export default {
  dashboards: async (root, args, context, info) => await context.prisma.user({ id: root.id }).dashboards(),
  signIn: async (root, args, context, info) => {
    const user = await context.prisma.user({ email: args.email });
    if (!user) {
      throw new Error('No such user found');
    }

    const valid = await bcrypt.compare(args.password, user.password);
    if (!valid) {
      throw new Error('Invalid password');
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET);

    // TODO: delete user.password;

    return {
      token,
      user,
    }
  },
  signUp: async (root, args, context, info) => {
    const password = await bcrypt.hash(args.password, 10);

    const user = await context.prisma.createUser({ ...args, password });

    const token = jwt.sign({ userId: user.id }, APP_SECRET);

    // TODO: delete user.password;

    return {
      token,
      user,
    }
  },
  user: async (root, args, context, info) => await context.prisma.user(args),
  users: async (root, args, context, info) => await context.prisma.users({ where: args }),
}
