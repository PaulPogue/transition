import React from "react";

const IconSlot = ({ children }) => (
  <span className="flex w-12 items-center justify-start shrink-0">
    {children}
  </span>
);

const IRSIcon = () => (
  <img
    src="/logos/IRS-Logo.svg"
    alt="IRS"
    className="h-7 w-11 object-contain object-left opacity-80"
  />
);

const KYDORIcon = () => (
  <img
    src="/logos/revenue-logo.svg"
    alt="KY DOR"
    className="h-7 w-10 object-contain object-left opacity-80"
  />
);

const ResourcesDropdown = () => (
  <div className="p-4">
    {/* Calculators */}
    <h3 className="text-gray-900 font-semibold">Calculators</h3>
    <ul className="space-y-1">
      <li>
        <a
          href="https://www.irs.gov/individuals/tax-withholding-estimator"
          className="flex items-center gap-4 text-gray-500 hover:bg-gray-100 px-3 py-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconSlot>
            <IRSIcon />
          </IconSlot>
          <span className="text-gray-700 leading-none">
            Withholding Calculator
          </span>
        </a>
      </li>
    </ul>

    {/* Payments */}
    <h3 className="text-gray-800 font-semibold mt-4">Payments</h3>
    <ul className="space-y-1">
      <li>
        <a
          href="https://www.irs.gov/payments"
          className="flex items-center gap-4 text-gray-500 hover:bg-gray-100 px-3 py-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconSlot>
            <IRSIcon />
          </IconSlot>
          <span className="text-gray-700 leading-none">Make a Payment</span>
        </a>
      </li>
      <li>
        <a
          href="https://epayment.ky.gov/epay"
          className="flex items-center gap-4 text-gray-500 hover:bg-gray-100 px-3 py-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconSlot>
            <KYDORIcon />
          </IconSlot>
          <span className="text-gray-700 leading-none">Make a Payment</span>
        </a>
      </li>
    </ul>

    {/* Refunds */}
    <h3 className="text-gray-800 font-semibold mt-4">Refunds</h3>
    <ul className="space-y-1">
      <li>
        <a
          href="https://www.irs.gov/wheres-my-refund"
          className="flex items-center gap-4 text-gray-500 hover:bg-gray-100 px-3 py-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconSlot>
            <IRSIcon />
          </IconSlot>
          <span className="text-gray-700 leading-none">
            Where&apos;s My Refund?
          </span>
        </a>
      </li>
      <li>
        <a
          href="https://refund.ky.gov/"
          className="flex items-center gap-4 hover:bg-gray-100 px-3 py-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconSlot>
            <KYDORIcon />
          </IconSlot>
          <span className="text-gray-700 leading-none">
            Where&apos;s My Refund?
          </span>
        </a>
      </li>
    </ul>
  </div>
);

export default ResourcesDropdown;
