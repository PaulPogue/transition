import React from "react";

const ServicesDropdown = () => {
  return (
    <div className="p-4">
      <div>
        <h3 className=" text-gray-800 font-semibold">Tax Services</h3>
        <ul className="space-y-1">
          <li>
            <a
              href="/services/individual-tax"
              className="block  text-gray-500 hover:bg-gray-100 px-3 py-1"
            >
              Individual Tax
            </a>
          </li>
          <li>
            <a
              href="/services/business-tax"
              className="block  text-gray-500 hover:bg-gray-100 px-3 py-1"
            >
              Business Tax
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className=" text-gray-800 mt-4 font-semibold">
          Consulting Services
        </h3>
        <ul className="space-y-1">
          <li>
            <a
              href="/services/payroll"
              className="block  text-gray-500 hover:bg-gray-100 px-3 py-1"
            >
              Payroll Consulting & Setup
            </a>
          </li>
          <li>
            <a
              href="/services/bookkeeping"
              className="block  text-gray-500 hover:bg-gray-100 px-3 py-1"
            >
              Fractional Controller & Bookkeeping
            </a>
          </li>
          <li>
            <a
              href="/services/accounting-setup"
              className="block  text-gray-500 hover:bg-gray-100 px-3 py-1"
            >
              Cloud Accounting & Implementation
            </a>
          </li>
          <li>
            <a
              href="/services/starting-a-business"
              className="block  text-gray-500 hover:bg-gray-100 px-3 py-1"
            >
              Starting A Business
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesDropdown;
