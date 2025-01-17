import { z } from 'zod';

export const editUserInfoSchema = z.object({
  height: z.coerce.number().nonnegative({
    message: '请正确输入内容',
  }),
  weight: z.coerce.number().nonnegative({
    message: '请正确输入内容',
  }),
});

export type EditUserInfoSchema = z.infer<typeof editUserInfoSchema>;