import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";

export default function Navbar() {
  //const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" }
  ];
  const collapsedItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-8">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <a className="flex items-center space-x-2 text-2xl text-sm">
                    <span>
                      <Image
                        src="https://storageapi.fleek.co/20626237-8360-4375-83b2-2294cdded30d-bucket/img/logo-dsvi-light.svg"
                        alt="del SOL VENTURES"
                        width="75"
                        height="75"
                        className="w-8 dark:text-trueGray-100 text-trueGray-700"
                      />
                    </span>
                    {/*<div className="px-2">
                      <span className="underline text-xl text-center font-semibold underline">
                        del SOL
                      </span>{" "}
                      <p className="no-underline text-xs -pt2 ">
                        VENTURES INC.
                      </p>
                    </div>*/}
                  </a>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-trueGray-700 rounded-md lg:hidden hover:text-trueGray-500 focus:text-trueGray-500 focus:bg-trueSky-100 focus:outline-none dark:text-trueGray-200 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {collapsedItems.map((item, index) => (
                      <Link key={index} href={item.href}>
                        <a className="text-lg uppercase w-full px-4 py-2 -ml-4 rounded-md font-seminbold text-trueGray-700 hover:text-trueGray-100 focus:text-trueGray-700 focus:bg-trueGray-100 dark:text-trueGray-100 dark:hover:text-trueGray-700 dark:focus:text-trueGray-500 dark:focus:bg-trueGray-100 focus:outline-none">
                          {item.name}
                        </a>
                      </Link>
                    ))}
                    <Link href="/">
                      <a className="w-full px-6 py-2 mt-3 text-center text-trueGray-100 bg-trueSky-600 rounded-md lg:ml-5">
                        Login
                      </a>
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={menu.href}>
                  <a className="text-lg uppercase w-full px-4 py-2 -ml-4 rounded-md font-seminbold text-trueGray-700 hover:text-trueGray-100 focus:text-trueGray-700 focus:bg-trueGray-100 dark:text-trueGray-100 dark:hover:text-trueGray-700 dark:focus:text-trueGray-500 dark:focus:bg-trueGray-100 focus:outline-none">
                    {menu.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-3 lg:flex nav__item">
          <Link href="/auth/login">
            <a className="px-6 py-2 text-white bg-trueSky-600 rounded-md md:ml-5">
              Login
            </a>
          </Link>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}
