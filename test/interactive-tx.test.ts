import { PrismaClient } from '@prisma/client'

// print all SQL queries
const prisma = new PrismaClient({ log: ['query', 'info', 'warn'] })

it('should not create a Foo record because the database trigger always throws an exception', async () => {
  await expect(
    prisma.$transaction((transactionClient) => transactionClient.foo.create({}))
  ).rejects.toThrowError();
})
