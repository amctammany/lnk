/** @type {import('prisma-generator-pothos-codegen').Config} */
module.exports = {
  inputs: {
    prismaImporter: `import { Prisma } from '@prisma/client';`,
    outputFilePath: "./src/graphql/__generated__/inputs.ts",
  },
  crud: {
    outputDir: "./src/graphql/__generated__/",
    inputsImporter: `import * as Inputs from '@/graphql/__generated__/inputs';`,
    resolversImports: `import prisma from '@/lib/prisma';`,
    builderImporter: `import { builder } from '@/graphql/builder';`,
    prismaImporter: `import { Prisma } from '@prisma/client';`,
  },
  global: {
    prismaImporter: `import { Prisma } from '@prisma/client';`,
    builderImporter: `import { builder } from '@/graphql/builder';`,
  },
};
