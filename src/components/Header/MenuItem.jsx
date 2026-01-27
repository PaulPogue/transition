import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

const MenuItem = ({
  label,
  href,
  hasDropdown,
  isActive,
  onClick,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const dropdownRef = useRef(null);

  // Sync local state with parent's active state.
  useEffect(() => {
    setIsOpen(isActive);
  }, [isActive]);

  // Close dropdown when clicking/touching outside the container.
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
        onClick(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen, onClick]);

  // Use pointer events to handle hover for mouse users only.
  const handlePointerEnter = (e) => {
    // Only open on hover if using a mouse
    if (hasDropdown && e.pointerType === "mouse") {
      setIsOpen(true);
      onClick(true);
    }
  };

  const handlePointerLeave = (e) => {
    if (hasDropdown && e.pointerType === "mouse") {
      setIsOpen(false);
      onClick(false);
    }
  };

  // Toggle dropdown for click events.
  const handleToggle = (e) => {
    if (hasDropdown) {
      e.preventDefault();
      e.stopPropagation();
      setIsOpen((prev) => {
        const newState = !prev;
        onClick(newState);
        return newState;
      });
    }
  };

  return (
    <li
      ref={containerRef}
      className="relative inline-block"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <div className="inline-block">
        <a
          href={hasDropdown ? "#" : href}
          onClick={handleToggle}
          className="flex items-center space-x-1 hover:opacity-70 transition-opacity cursor-pointer"
          aria-expanded={hasDropdown ? isOpen : undefined}
          aria-controls={hasDropdown ? "dropdown-menu" : undefined}
        >
          <span>{label}</span>
          <span className="w-4">
            {hasDropdown && (
              <FaChevronDown
                className={`transition-transform duration-300 ease-in-out ${
                  isOpen
                    ? "translate-y-0.5 scale-85"
                    : "translate-y-0 scale-100"
                }`}
              />
            )}
          </span>
        </a>
      </div>

      {/* Bridging element to extend the hover area */}
      {hasDropdown && isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full h-6 w-full bg-transparent" />
      )}

      {hasDropdown && (
        <div
          id="dropdown-menu"
          ref={dropdownRef}
          className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-max z-100"
          style={{
            maxHeight: isOpen
              ? `${dropdownRef.current?.scrollHeight}px`
              : "0px",
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? "auto" : "none",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-l border-t border-gray-300"></div>
          <div className="relative bg-white border rounded shadow-lg overflow-hidden">
            {children}
          </div>
        </div>
      )}
    </li>
  );
};

export default MenuItem;
