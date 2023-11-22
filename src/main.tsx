import { z } from "zod";

const UserSchema = z.object({
  username: z.string(),
});

// with infer we can get the type of the schema
type User = z.infer<typeof UserSchema>;

const user: User = { username: "WDS" };

console.log(UserSchema.safeParse(user));
