import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@/lib/schema";

const { Pool } = pg;

// Handle missing DATABASE_URL gracefully for build time
const connectionString = process.env.DATABASE_URL;

let pool: pg.Pool | null = null;
let db: ReturnType<typeof drizzle> | null = null;

if (connectionString) {
    pool = new Pool({ connectionString });
    db = drizzle(pool, { schema });
}

export function getDb() {
    if (!db) {
        throw new Error(
            "DATABASE_URL must be set. Did you forget to provision a database?",
        );
    }
    return db;
}

export { pool, db };
