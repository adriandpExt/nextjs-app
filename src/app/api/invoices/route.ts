import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  const invoices = await sql`SELECT * FROM invoices`;

  return NextResponse.json({ invoices: invoices.rows }, { status: 200 });
}
