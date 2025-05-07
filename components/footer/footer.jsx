import React from 'react';

export default function Footer() {
  return (
    <footer className="py-6">
      <div className="text-center text-xs text-gray-400 mt-4">
        © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
