import { z } from "zod";

const UserSchema = z.object({
  username: z.string(),
  age: z.number().optional(),
  birthday: z.date().optional(),
  isProgrammer: z.boolean().optional(),
});

// with infer we can get the type of the schema
type User = z.infer<typeof UserSchema>;

const user: User = { username: "WDS" };

// safe parse returns an object with a success property which can be used to check if the parsing was successful
// useful for validating a form
console.log(UserSchema.safeParse(user).success);
