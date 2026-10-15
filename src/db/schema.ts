import { pgTable, serial, text, integer, boolean, timestamp, jsonb, uniqueIndex } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password'),
  image: text('image'),
  school: text('school'),
  class: text('class'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const levels = pgTable('levels', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  number: integer('number').notNull().unique(),
  module: text('module').notNull(),
  difficultyConfig: jsonb('difficulty_config').notNull(),
});

export const progress = pgTable('progress', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: text('user_id').notNull().references(() => users.id),
  levelId: text('level_id').notNull().references(() => levels.id),
  completed: boolean('completed').default(false),
  completedAt: timestamp('completed_at'),
}, (table) => [
  uniqueIndex('progress_user_level_idx').on(table.userId, table.levelId),
]);
