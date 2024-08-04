import moment from "moment";
import React from "react";

import { fetchInvoice } from "@/app/lib/data";

export default async function Invoices() {
  const getInvoice = await fetchInvoice();

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Sales Invoices
      </h2>

      <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-gray-200 h-16 border-gray-300 border-b ">
              <th className="text-left px-4">Invoice ID</th>
              <th className="text-left px-4">Status</th>
              <th className="text-left px-4">Amount</th>
              <th className="text-left px-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {getInvoice.rows.map((invoice) => (
              <tr
                key={invoice.id}
                className="h-12 hover:bg-gray-100 border-gray-300 border-b"
              >
                <td className="px-4">{invoice.id}</td>
                <td className="px-4">{invoice.status}</td>
                <td className="px-4">{invoice.amount}</td>
                <td className="px-4">{moment().format("YYYY-MM-DD")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
