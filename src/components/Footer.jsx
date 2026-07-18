import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="text-white font-bold text-lg">Syssian IT Solutions Project</h3>
          <p className="text-sm text-gray-400 mt-1">Building responsive, full-stack architectures seamlessly.</p>
        </div>
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Syssian Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;