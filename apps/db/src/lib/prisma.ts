// /lib/prisma.ts
import { PrismaClient } from "@prisma/client/edge";

let prisma: PrismaClient;

declare global {
  var prisma: PrismaClient;
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}
export default prisma;
export const db = new PrismaClient({
  // log: ['error', 'info', 'query', 'warn'],
});