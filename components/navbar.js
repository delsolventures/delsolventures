import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import ThemeChanger from "./darkSwitch";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Portfolio", href: "/portfolio", current: false },
];
const collapsedItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-trueOrange-400 dark:bg-trueOrange-600">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-trueGray-400 hover:bg-trueGray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faBars}
                      className="block h-6 w-6 text-trueGray-700 dark:text-trueGray-100"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* <div className="block h-8 w-auto lg:hidden">
                    <Image
                      src="https://storageapi.fleek.co/20626237-8360-4375-83b2-2294cdded30d-bucket/img/logo-dsvi-light.svg"
                      alt="del SOL"
                      height="50"
                      width="50"
                    />
                  </div>*/}
                  <Link href="/">
                    <a href="/" className="inline-flex h-content w-auto">
                      {/*className="hidden h-8 w-auto lg:block*/}
                      <Image
                        src="https://storageapi.fleek.co/20626237-8360-4375-83b2-2294cdded30d-bucket/img/logo-dsvi-light.svg"
                        alt="del SOL"
                        height="50"
                        width="50"
                        className="text-trueGray-700 dark:text-trueGray-100"
                      />
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block mx-2 mt-2">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-trueGray-700 hover:bg-trueGray-400 dark:text-trueGray-100 dark:hover:bg-trueGray-400"
                            : "text-trueGray-700 hover:bg-trueGray-400 dark:text-trueGray-100 dark:hover:bg-trueGray-400",
                          "px-3 py-2 rounded-md text-md font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="rounded-full bg-trueGray-800 p-1 text-trueGray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-trueGray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <FontAwesomeIcon
                    icon="fa-solid fa-bell"
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </button>*/}

                {/* Profile dropdown */}
                {/*<Menu as="div" className="relative mx-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-trueGray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-trueGray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-trueGray-100" : "",
                              "block px-4 py-2 text-sm text-trueGray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-trueGray-100" : "",
                              "block px-4 py-2 text-sm text-trueGray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-trueGray-100" : "",
                              "block px-4 py-2 text-sm text-trueGray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>*/}

                <ThemeChanger />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {collapsedItems.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-trueSky-600 text-trueGray-700 dark:text-trueGray-100 dark:bg-trueSky-600"
                      : "text-trueGray-700 hover:bg-trueGray-400 dark:text-trueGray-100 dark:hover:bg-trueGray-400",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
