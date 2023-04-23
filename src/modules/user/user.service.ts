import { CreateUserInput } from "./user.schema";
import prisma from "../../utils/prisma";

export const createUser = async (input: CreateUserInput) => {
  const user = await prisma.user.create({
    data: { ...input, salt: "" },
  });
};
