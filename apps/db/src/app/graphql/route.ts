import schema from "../../graphql/schema";

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import prisma from "@/lib/prisma";
//extendPrisma(prisma);
const server = new ApolloServer({
  schema,
  introspection: true,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async () => ({ prisma: prisma }),
});

export async function GET(request: Request) {
  return handler(request);
}
export async function POST(request: Request) {
  return handler(request);
}
