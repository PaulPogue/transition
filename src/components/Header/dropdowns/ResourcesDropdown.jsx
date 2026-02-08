import React from "react";

const ResourcesDropdown = () => (
  <div className="p-4">
    {/* Calculators */}
    <h3 className="text-gray-800 font-semibold">Calculators</h3>
    <ul className="space-y-1">
      <li>
        <a
          href="https://www.irs.gov/individuals/tax-withholding-estimator"
          className="block text-gray-500 hover:bg-gray-100 px-3 py-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          IRS: Withholding Calculator
        </a>
      </li>
    </ul>
    {/* Payments */}
    <h3 className="text-gray-800 font-semibold mt-4">Payments</h3>
    <ul className="space-y-1">
      <li>
        <a
          href="https://www.irs.gov/payments"
          className="block text-gray-500 hover:bg-gray-100 px-3 py-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          IRS: Make a Payment
        </a>
      </li>
      <li>
        <a
          href="https://epayment.ky.gov/epay"
          className="block text-gray-500 hover:bg-gray-100 px-3 py-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          KY Department of Revenue: Make a Payment
        </a>
      </li>
    </ul>
    {/* Refunds */}
    <h3 className="text-gray-800 font-semibold mt-4">Refunds</h3>
    <ul className="space-y-1">
      <li>
        <a
          href="https://www.irs.gov/wheres-my-refund"
          className="block text-gray-500 hover:bg-gray-100 px-3 py-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          IRS: Where's My Refund?
        </a>
      </li>
      <li>
        <a
          href="https://refund.ky.gov/"
          className="block text-gray-500 hover:bg-gray-100 px-3 py-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          KY Department of Revenue: Where's My Refund?
        </a>
      </li>
    </ul>
  </div>
);

export default ResourcesDropdown;
