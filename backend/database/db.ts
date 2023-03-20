import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import * as dotenv from 'dotenv'
import { Models } from "./models/Models";

dotenv.config()

export const db = new Kysely<Models>({
    dialect: new PostgresDialect({
        pool: new Pool({
            connectionString: process.env.DATABASE_URL,
        }),
    }),
});