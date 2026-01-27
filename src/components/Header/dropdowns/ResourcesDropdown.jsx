import React from "react";

const ResourcesDropdown = () => (
  <div className="p-4">
    <h3 className="text-gray-800 font-semibold">Calculators</h3>
    <ul className="space-y-1">
      <li>
        <a
          href="https://www.irs.gov/individuals/tax-withholding-estimator"
          className="block text-gray-500 hover:bg-gray-100 px-3 py-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          IRS Withholding Calculator
        </a>
      </li>
    </ul>

    <h3 className="text-gray-800 font-semibold mt-4">Payments</h3>
    <ul className="space-y-1">
      <li>
        <a
          href="https://www.irs.gov/payments"
          className="block text-gray-500 hover:bg-gray-100 px-3 py-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          IRS Make a Payment
        </a>
      </li>
      <li>
        <a
          href="https://epayment.ky.gov/epay"
          className="block text-gray-500 hover:bg-gray-100 px-3 py-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kentucky Department of Revenue Make a Payment
        </a>
      </li>
    </ul>
  </div>
);

export default ResourcesDropdown;
