import digitalyaLogo from '../assets/no-bg-logo1.png';

const Footer = () => {
  return (
    <footer className="bg-black text-[#7B7B7B] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-center">
          <div className="flex flex-col md:flex-row gap-12 mb-20 md:mb-0 text-white items-center justify-around">
            <img
              src={digitalyaLogo}
              alt="DigitalYa logo"
              className="w-[220px] md:w-[300px] mb-6 drop-shadow-[0_0_1px_rgba(255,255,255,1)]"
            />
            <p>&copy; 2025 DigitalYa. Todos los derechos reservados.</p>
            {/* <div className="flex gap-4">
              <svg
                className="cursor-pointer hover:scale-110 transition-all"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.141 5H19.595L14.235 10.93L20.541 19H15.603L11.736 14.106L7.31102 19H4.85602L10.59 12.657L4.54102 5H9.60302L13.099 9.474L17.141 5Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="cursor-pointer hover:scale-110 transition-all"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 2.25H8C6.60807 2.25149 5.27358 2.80509 4.28933 3.78933C3.30509 4.77358 2.75149 6.10807 2.75 7.5V16.5C2.75149 17.8919 3.30509 19.2264 4.28933 20.2107C5.27358 21.1949 6.60807 21.7485 8 21.75H17C18.3919 21.7485 19.7264 21.1949 20.7107 20.2107C21.6949 19.2264 22.2485 17.8919 22.25 16.5V7.5C22.2485 6.10807 21.6949 4.77358 20.7107 3.78933C19.7264 2.80509 18.3919 2.25149 17 2.25ZM12.5 16.5C11.61 16.5 10.74 16.2361 9.99993 15.7416C9.25991 15.2471 8.68314 14.5443 8.34254 13.7221C8.00195 12.8998 7.91283 11.995 8.08647 11.1221C8.2601 10.2492 8.68868 9.44736 9.31802 8.81802C9.94736 8.18868 10.7492 7.7601 11.6221 7.58647C12.495 7.41283 13.3998 7.50195 14.2221 7.84254C15.0443 8.18314 15.7471 8.75991 16.2416 9.49993C16.7361 10.24 17 11.11 17 12C16.9988 13.1931 16.5243 14.337 15.6806 15.1806C14.837 16.0243 13.6931 16.4988 12.5 16.5ZM18.125 7.5C17.9025 7.5 17.685 7.43402 17.5 7.3104C17.315 7.18679 17.1708 7.01109 17.0856 6.80552C17.0005 6.59995 16.9782 6.37375 17.0216 6.15552C17.065 5.93729 17.1722 5.73684 17.3295 5.5795C17.4868 5.42217 17.6873 5.31502 17.9055 5.27162C18.1238 5.22821 18.35 5.25049 18.5555 5.33564C18.7611 5.42078 18.9368 5.56498 19.0604 5.74998C19.184 5.93499 19.25 6.1525 19.25 6.375C19.25 6.67337 19.1315 6.95952 18.9205 7.1705C18.7095 7.38147 18.4234 7.5 18.125 7.5ZM15.5 12C15.5 12.5933 15.3241 13.1734 14.9944 13.6667C14.6648 14.1601 14.1962 14.5446 13.6481 14.7716C13.0999 14.9987 12.4967 15.0581 11.9147 14.9424C11.3328 14.8266 10.7982 14.5409 10.3787 14.1213C9.95912 13.7018 9.6734 13.1672 9.55764 12.5853C9.44189 12.0033 9.5013 11.4001 9.72836 10.8519C9.95542 10.3038 10.3399 9.83524 10.8333 9.50559C11.3266 9.17595 11.9067 9 12.5 9C13.2956 9 14.0587 9.31607 14.6213 9.87868C15.1839 10.4413 15.5 11.2044 15.5 12Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="cursor-pointer hover:scale-110 transition-all"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 7C4.5 5.343 5.843 4 7.5 4H17.5C19.157 4 20.5 5.343 20.5 7V17C20.5 18.657 19.157 20 17.5 20H7.5C5.843 20 4.5 18.657 4.5 17V7ZM9.35 17.393V10.169H6.934V17.393H9.35ZM8.142 9.182C8.984 9.182 9.509 8.628 9.509 7.934C9.493 7.225 8.984 6.686 8.158 6.686C7.331 6.686 6.791 7.225 6.791 7.934C6.791 8.628 7.315 9.182 8.126 9.182H8.142ZM13.104 17.393V13.359C13.104 13.143 13.12 12.928 13.183 12.773C13.358 12.342 13.756 11.895 14.423 11.895C15.298 11.895 15.648 12.557 15.648 13.529V17.393H18.064V13.251C18.064 11.032 16.872 9.999 15.282 9.999C14 9.999 13.425 10.699 13.104 11.192V10.169H10.687C10.719 10.844 10.688 17.352 10.687 17.394L13.104 17.393Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="cursor-pointer hover:scale-110 transition-all"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.501 4C8.082 4 4.5 7.582 4.5 11.999C4.5 15.276 6.47 18.09 9.289 19.327C9.265 18.768 9.284 18.098 9.427 17.491C9.582 16.841 10.457 13.131 10.457 13.131C10.457 13.131 10.202 12.62 10.202 11.865C10.202 10.679 10.889 9.794 11.744 9.794C12.473 9.794 12.823 10.341 12.823 10.995C12.823 11.726 12.357 12.821 12.118 13.834C11.917 14.683 12.543 15.375 13.379 15.375C14.896 15.375 15.917 13.428 15.917 11.122C15.917 9.369 14.736 8.056 12.588 8.056C10.161 8.056 8.65 9.866 8.65 11.887C8.65 12.584 8.854 13.076 9.177 13.456C9.324 13.631 9.345 13.702 9.291 13.902C9.253 14.049 9.165 14.404 9.128 14.544C9.075 14.747 8.911 14.819 8.728 14.745C7.61 14.288 7.09 13.065 7.09 11.688C7.09 9.416 9.007 6.691 12.807 6.691C15.862 6.691 17.873 8.901 17.873 11.273C17.873 14.412 16.127 16.757 13.555 16.757C12.691 16.757 11.879 16.289 11.601 15.759C11.601 15.759 11.136 17.603 11.038 17.958C10.868 18.574 10.536 19.192 10.233 19.672C10.969 19.89 11.733 20 12.501 20C16.919 20 20.5 16.418 20.5 11.999C20.5 7.582 16.919 4 12.501 4Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="cursor-pointer hover:scale-110 transition-all"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.4684 6.5175C22.3801 6.17189 22.2109 5.85224 21.9747 5.58491C21.7385 5.31758 21.4421 5.11024 21.11 4.98C17.8962 3.73875 12.7812 3.75 12.5 3.75C12.2188 3.75 7.10375 3.73875 3.89 4.98C3.5579 5.11024 3.26153 5.31758 3.02534 5.58491C2.78915 5.85224 2.6199 6.17189 2.53156 6.5175C2.28875 7.45313 2 9.16313 2 12C2 14.8369 2.28875 16.5469 2.53156 17.4825C2.61977 17.8283 2.78895 18.1481 3.02515 18.4156C3.26136 18.6831 3.5578 18.8906 3.89 19.0209C6.96875 20.2088 11.7875 20.25 12.4381 20.25H12.5619C13.2125 20.25 18.0341 20.2088 21.11 19.0209C21.4422 18.8906 21.7386 18.6831 21.9748 18.4156C22.211 18.1481 22.3802 17.8283 22.4684 17.4825C22.7113 16.545 23 14.8369 23 12C23 9.16313 22.7113 7.45313 22.4684 6.5175ZM15.7081 12.3122L11.2081 15.3122C11.1516 15.3499 11.086 15.3715 11.0181 15.3748C10.9503 15.3781 10.8829 15.3629 10.823 15.3309C10.7631 15.2988 10.7131 15.2511 10.6782 15.1928C10.6434 15.1346 10.625 15.0679 10.625 15V9C10.625 8.9321 10.6434 8.86545 10.6782 8.80718C10.7131 8.74892 10.7631 8.70121 10.823 8.66916C10.8829 8.63711 10.9503 8.62191 11.0181 8.6252C11.086 8.62849 11.1516 8.65013 11.2081 8.68782L15.7081 11.6878C15.7596 11.722 15.8017 11.7685 15.8309 11.8229C15.8601 11.8774 15.8754 11.9382 15.8754 12C15.8754 12.0618 15.8601 12.1226 15.8309 12.1771C15.8017 12.2315 15.7596 12.278 15.7081 12.3122Z"
                  fill="currentColor"
                />
              </svg>
            </div> */}
          </div>
          {/* <nav className="flex flex-col md:flex-row gap-12">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-white">Product</p>
              <p className="cursor-pointer hover:text-gray-200">Features</p>
              <p className="cursor-pointer hover:text-gray-200">Integrations</p>
              <p className="cursor-pointer hover:text-gray-200">Updates</p>
              <p className="cursor-pointer hover:text-gray-200">FAQ</p>
              <p className="cursor-pointer hover:text-gray-200">Pricing</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-white">Company</p>
              <p className="cursor-pointer hover:text-gray-200">About</p>
              <p className="cursor-pointer hover:text-gray-200">Blog</p>
              <p className="cursor-pointer hover:text-gray-200">Careers</p>
              <p className="cursor-pointer hover:text-gray-200">Manifesto</p>
              <p className="cursor-pointer hover:text-gray-200">Press</p>
              <p className="cursor-pointer hover:text-gray-200">Contact</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-white">Resources</p>
              <p className="cursor-pointer hover:text-gray-200">Examples</p>
              <p className="cursor-pointer hover:text-gray-200">Community</p>
              <p className="cursor-pointer hover:text-gray-200">Guides</p>
              <p className="cursor-pointer hover:text-gray-200">Docs</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-white">Legal</p>
              <p className="cursor-pointer hover:text-gray-200">Privacy</p>
              <p className="cursor-pointer hover:text-gray-200">Terms</p>
              <p className="cursor-pointer hover:text-gray-200">Security</p>
            </div>
          </nav> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
