const Footer = () => {
  return (
    <footer className=" py-16">
      <div className="container">
        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 mb-12">
          <div className="text-center space-y-8">
            {/* Documentation Link */}
            <div>
              <a
                href="/documentation"
                className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200"
              >
                Documentation
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                aria-label="Twitter"
              >
                <img
                  src="/twitter.png"
                  alt="Twitter"
                  className="w-6 h-6 hover:opacity-80 transition-opacity duration-200"
                />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                aria-label="GitHub"
              >
                <img
                  src="/github.png"
                  alt="GitHub"
                  className="w-6 h-6 hover:opacity-80 transition-opacity duration-200"
                />
              </a>
            </div>

            {/* ToDesktop Branding */}
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-semibold text-gray-800">
                ToDesktop
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center space-y-4">
          {/* Y Combinator Badge */}
          <div className="flex items-center justify-center space-x-2">
            <div className="w-6 h-6 bg-orange-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">Y</span>
            </div>
            <span className="text-gray-600">A Y Combinator company.</span>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © 2024 ToDesktop, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
