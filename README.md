# Bug reproduction for Prisma interactive transaction

## What's the bug?

When we have a database trigger that's deferred until the end of a transaction,
and the trigger throws an exception, Prisma interactive transaction does not
reject the promise.

## Expected behavior

The Prisma `prisma.$transaction(...)` should reject.

## How to reproduce?

Run the following:

1. `yarn` to install dependencies.
1. (in one terminal) `docker compose up` to run a clean Postgres database.
   The database credential is already in the `.env` file.
1. (in another terminal) `yarn start` to run the `interactive-tx.test.ts` test.
