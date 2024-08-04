import { sql } from "@vercel/postgres";

export const fetchInvoice = async () => {
  return sql`SELECT * FROM invoices`;
};
