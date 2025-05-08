import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          MyPortfolio
        </Link>
      </div>
      <div className="flex-none">
        {/* Dropdown Menu สำหรับมือถือ */}
        <div className="dropdown dropdown-end md:hidden">
          <button tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <Link href="#sectionOne">About Me</Link>
            </li>
            <li>
              <Link href="#sectionFive">Bachelor’s Final Project</Link>
            </li>
            <li>
              <Link href="#sectionSix">Contact Me</Link>
            </li>
            <li>
              <a
                href="https://github.com/pichetphong"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* เมนูปกติสำหรับหน้าจอใหญ่ */}
        <ul className="menu menu-horizontal px-1 hidden md:flex">
          <li>
            <Link href="#sectionOne">About Me</Link>
          </li>
          <li>
            <Link href="#sectionFive">Bachelor’s Final Project</Link>
          </li>
          <li>
            <Link href="#sectionSix">Contact Me</Link>
          </li>
          <li>
            <a
              href="https://github.com/pichetphong"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
