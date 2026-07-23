import { eq, and } from "drizzle-orm";
import { db } from "@/db";
import { readingLists } from "@/db/schema";
import { getCurrentUser } from "./session";

export const getReadingLists = async () => {
  return db.query.readingLists.findMany();
};

export const isOnUserReadingList = async (blogId: number) => {
  const user = await getCurrentUser();
  if (!user) return false;
  const result = await db.query.readingLists.findFirst({
    where: and(
      eq(readingLists.userId, user.id),
      eq(readingLists.blogId, blogId),
    ),
  });
  return result ? true : false;
};
