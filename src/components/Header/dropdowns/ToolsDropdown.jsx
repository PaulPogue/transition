import React from "react";

const ToolsDropdown = () => (
  <div className="p-4">
    <h3 className=" text-gray-800 font-semibold">Accounting Software</h3>
    <ul className="space-y-1">
      <li>
        <a
          href="/tools/quickbooks"
          className="block  text-gray-500 hover:bg-gray-100 px-3 py-1"
        >
          Quickbooks Online
        </a>
      </li>
      <li>
        <a
          href="/tools/accounting-software-comparison"
          className="block  text-gray-500 hover:bg-gray-100 px-3 py-1"
        >
          Comparison of Accounting Software
        </a>
      </li>
    </ul>
    <h3 className=" text-gray-800 mt-4 font-semibold">Other Tools</h3>
    <ul className="space-y-1">
      <li>
        <a
          href="/tools/payroll-software-comparison"
          className="block  text-gray-500 hover:bg-gray-100 px-3 py-1"
        >
          Comparison of Payroll Software
        </a>
      </li>
    </ul>
  </div>
);

export default ToolsDropdown;
