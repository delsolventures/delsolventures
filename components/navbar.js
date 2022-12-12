import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import ThemeChanger from "./darkSwitch";
import ActiveLink from "./activelink";
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
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-trueGray-400 hover:bg-trueGray-100 dark:hover:bg-trueGray-700 hover:text-trueGray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      className="block h-6 w-6 text-trueGray-500"
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
              <div className="mt-4 flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link
                    href="/"
                    className="inline-flex h-content w-auto fill-trueGray-700 dark:fill-trueGray-100 stroke-2"
                  >
                    {/*className="hidden h-8 w-auto lg:block*/}
                    {/* <Image
                      src="https://storageapi.fleek.co/20626237-8360-4375-83b2-2294cdded30d-bucket/img/logo-dsvi-light.svg"
                      alt="del SOL"
                      height="50"
                      width="50"
                      className="text-trueGray-700 dark:text-trueGray-100"
                    />*/}
                    <Brand />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block mx-2 mt-2">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <ActiveLink key={item.name} href={item.href}>
                        {item.name}
                      </ActiveLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
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
                    "block px-3 py-2 rounded-md text-lg font-medium"
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

function Brand() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 258 344"
      preserveAspectRatio="xMidYMid meet"
      width="70"
      height="70"
    >
      <g transform="matrix(1,0,0,1,0,-26)">
        <rect y="0" height="1" width="1" opacity="0" />
        <rect y="313" width="258" height="5" />
      </g>
      <g transform="matrix(1.9123893015075182,0,0,1.9123893015075182,32.58124018787511,-3.0362823165826995)">
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M29.5,25.5c2.5,0,4.6-2.1,4.6-4.6s-2.1-4.6-4.6-4.6c-2.5,0-4.6,2.1-4.6,4.6S27,25.5,29.5,25.5z M27,58  c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.3-0.6,1.3-1.3s-0.6-1.3-1.3-1.3C27.6,56.7,27,57.3,27,58z M36.2,31.3c1.1,0,1.9-0.9,1.9-1.9  c0-1.1-0.9-1.9-1.9-1.9c-1.1,0-1.9,0.9-1.9,1.9C34.3,30.4,35.1,31.3,36.2,31.3z M21.1,48.6c2.5,0,4.6-2.1,4.6-4.6  c0-2.5-2.1-4.6-4.6-4.6s-4.6,2.1-4.6,4.6C16.6,46.5,18.6,48.6,21.1,48.6z M14.5,37.8c1.1,0,1.9-0.9,1.9-1.9c0-1.1-0.9-1.9-1.9-1.9  c-1.1,0-1.9,0.9-1.9,1.9C12.6,37,13.4,37.8,14.5,37.8z M13.8,42c0-0.7-0.6-1.3-1.3-1.3c-0.7,0-1.3,0.6-1.3,1.3s0.6,1.3,1.3,1.3  C13.2,43.3,13.8,42.7,13.8,42z M19.9,31.2c1.8,0,3.2-1.4,3.2-3.2s-1.4-3.2-3.2-3.2c-1.8,0-3.2,1.4-3.2,3.2S18.1,31.2,19.9,31.2z   M58.8,13.6c0.7,0,1.3-0.6,1.3-1.3c0-0.7-0.6-1.3-1.3-1.3c-0.7,0-1.3,0.6-1.3,1.3C57.5,13,58.1,13.6,58.8,13.6z M23.8,57.5  c0-3.1-2.5-5.6-5.6-5.6c-3.1,0-5.6,2.5-5.6,5.6s2.5,5.6,5.6,5.6C21.3,63.1,23.8,60.6,23.8,57.5z M79.9,33.9c2.5,0,4.6-2.1,4.6-4.6  s-2.1-4.6-4.6-4.6s-4.6,2.1-4.6,4.6S77.3,33.9,79.9,33.9z M69.6,65.5c0,1.8,1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2s-1.4-3.2-3.2-3.2  C71,62.3,69.6,63.7,69.6,65.5z M72.8,22.9c1.8,0,3.2-1.4,3.2-3.2c0-1.8-1.4-3.2-3.2-3.2c-1.8,0-3.2,1.4-3.2,3.2  C69.6,21.5,71,22.9,72.8,22.9z M65.7,31.2c1.8,0,3.2-1.4,3.2-3.2s-1.4-3.2-3.2-3.2c-1.8,0-3.2,1.4-3.2,3.2S63.9,31.2,65.7,31.2z   M77.2,42.5c0,3.1,2.5,5.6,5.6,5.6c3.1,0,5.6-2.5,5.6-5.6s-2.5-5.6-5.6-5.6C79.7,36.9,77.2,39.4,77.2,42.5z M74,42  c0-0.7-0.6-1.3-1.3-1.3c-0.7,0-1.3,0.6-1.3,1.3s0.6,1.3,1.3,1.3C73.4,43.3,74,42.7,74,42z M64.8,16.1c1.1,0,1.9-0.9,1.9-1.9  s-0.9-1.9-1.9-1.9c-1.1,0-1.9,0.9-1.9,1.9S63.8,16.1,64.8,16.1z M70.8,37.8c1.1,0,1.9-0.9,1.9-1.9c0-1.1-0.9-1.9-1.9-1.9  s-1.9,0.9-1.9,1.9C68.9,37,69.8,37.8,70.8,37.8z M31.4,34.5c0-1.8-1.4-3.2-3.2-3.2c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2  C30,37.7,31.4,36.3,31.4,34.5z M64.8,68.7c-1.1,0-1.9,0.9-1.9,1.9c0,1.1,0.9,1.9,1.9,1.9c1.1,0,1.9-0.9,1.9-1.9  C66.7,69.6,65.9,68.7,64.8,68.7z M58.3,76.4c-3.1,0-5.6,2.5-5.6,5.6s2.5,5.6,5.6,5.6c3.1,0,5.6-2.5,5.6-5.6S61.4,76.4,58.3,76.4z   M71.5,74.5c-2.5,0-4.6,2.1-4.6,4.6s2.1,4.6,4.6,4.6c2.5,0,4.6-2.1,4.6-4.6S74,74.5,71.5,74.5z M57.5,72.5c0,0.7,0.6,1.3,1.3,1.3  c0.7,0,1.3-0.6,1.3-1.3c0-0.7-0.6-1.3-1.3-1.3C58.1,71.3,57.5,71.8,57.5,72.5z M88.5,56.7c-0.7,0-1.3,0.6-1.3,1.3s0.6,1.3,1.3,1.3  c0.7,0,1.3-0.6,1.3-1.3S89.1,56.7,88.5,56.7z M86.5,62.2c-1.1,0-1.9,0.9-1.9,1.9c0,1.1,0.9,1.9,1.9,1.9c1.1,0,1.9-0.9,1.9-1.9  C88.4,63,87.6,62.2,86.5,62.2z M56.2,25.5c2.5,0,4.6-2.1,4.6-4.6s-2.1-4.6-4.6-4.6s-4.6,2.1-4.6,4.6S53.7,25.5,56.2,25.5z   M79.9,51.4c-2.5,0-4.6,2.1-4.6,4.6c0,2.5,2.1,4.6,4.6,4.6s4.6-2.1,4.6-4.6C84.4,53.5,82.4,51.4,79.9,51.4z M21.1,66.1  c-2.5,0-4.6,2.1-4.6,4.6s2.1,4.6,4.6,4.6s4.6-2.1,4.6-4.6S23.7,66.1,21.1,66.1z M81.1,68.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2  c1.8,0,3.2-1.4,3.2-3.2S82.9,68.8,81.1,68.8z M30.2,62.2c-1.1,0-1.9,0.9-1.9,1.9c0,1.1,0.9,1.9,1.9,1.9s1.9-0.9,1.9-1.9  C32.1,63,31.2,62.2,30.2,62.2z M35.3,68.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2S37.1,68.8,35.3,68.8z   M36.2,83.9c-1.1,0-1.9,0.9-1.9,1.9s0.9,1.9,1.9,1.9c1.1,0,1.9-0.9,1.9-1.9S37.2,83.9,36.2,83.9z M28.2,77.1c-1.8,0-3.2,1.4-3.2,3.2  c0,1.8,1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2C31.4,78.5,30,77.1,28.2,77.1z M41,27.5c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.3-0.6,1.3-1.3  c0-0.7-0.6-1.3-1.3-1.3C41.5,26.2,41,26.8,41,27.5z M48.3,17.9c0-3.1-2.5-5.6-5.6-5.6c-3.1,0-5.6,2.5-5.6,5.6s2.5,5.6,5.6,5.6  C45.8,23.6,48.3,21.1,48.3,17.9z M42.2,86.4c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.3-0.6,1.3-1.3  C43.5,87,42.9,86.4,42.2,86.4z M44.8,74.5c-2.5,0-4.6,2.1-4.6,4.6s2.1,4.6,4.6,4.6s4.6-2.1,4.6-4.6S47.3,74.5,44.8,74.5z"
        />
      </g>
      <g transform="matrix(2.9798708047054467,0,0,2.9798708047054467,0,154.81738621533717)">
        <path d="M0 34.32 c0 -3.16 2.52 -5.68 5.68 -5.68 c1.84 0 3.48 0.88 4.52 2.24 l0 -19.48 l1.16 0 l0 28.6 l-1.16 0 l0 -2.28 c-1.04 1.36 -2.68 2.28 -4.52 2.28 c-3.16 0 -5.68 -2.56 -5.68 -5.68 z M1.16 34.32 c0 2.48 2.04 4.48 4.52 4.48 s4.52 -2 4.52 -4.48 c0 -2.52 -2.04 -4.52 -4.52 -4.52 s-4.52 2 -4.52 4.52 z M15.920000000000002 37.88 c1.76 1.36 4.32 1.24 5.96 -0.4 l0.8 0.84 c-2.2 2.2 -5.8 2.2 -8.04 0 c-2.2 -2.2 -2.2 -5.8 0 -8.04 c2.08 -2.08 5.4 -2.2 7.6 -0.4 l0.04 0 c0.4 0.4 0.4 0.4 0.84 0.8 z M15.48 31.119999999999997 c-1.6 1.6 -1.76 4.16 -0.4 5.92 l6.36 -6.32 c-1.76 -1.36 -4.32 -1.24 -5.96 0.4 z M24.72 40 l0 -28.6 l1.16 0 l0 28.6 l-1.16 0 z M41.480000000000004 40.56 c-2.36 0 -4.6 -1.12 -6 -3.04 l0.92 -0.68 c1.2 1.6 3.08 2.56 5.08 2.56 c3.4 0 6.2 -2.8 6.2 -6.24 c0 -3.56 -2.72 -6.16 -5.36 -8.72 c-2.56 -2.4 -5.16 -4.92 -5.16 -8.24 c0 -2.96 2.44 -5.4 5.4 -5.4 c1.72 0 3.36 0.84 4.4 2.24 l-0.96 0.68 c-0.8 -1.08 -2.08 -1.76 -3.44 -1.76 c-2.32 0 -4.24 1.92 -4.24 4.24 c0 2.8 2.32 5.04 4.8 7.4 c2.8 2.72 5.72 5.52 5.72 9.56 c0 4.08 -3.32 7.4 -7.36 7.4 z M64.72 12.559999999999999 c-7.24 0 -13.08 5.88 -13.08 13.12 s5.84 13.12 13.08 13.12 s13.16 -5.88 13.16 -13.12 s-5.92 -13.12 -13.16 -13.12 z M64.72 11.399999999999999 c7.92 0 14.32 6.4 14.32 14.28 s-6.4 14.32 -14.32 14.32 c-7.88 0 -14.28 -6.44 -14.28 -14.32 s6.4 -14.28 14.28 -14.28 z M81.8 38.8 l4.72 0 l0 1.2 l-5.88 0 l0 -28.6 l1.16 0 l0 27.4 z" />
      </g>
      <g transform="matrix(1.1258069162191873,0,0,1.1258069162191873,28.945190142431052,293.5471594171205)">
        <path d="M3.58 6.92 l2.2 8.28 l2.26 -8.28 c0.04 -0.06 0.08 -0.12 0.16 -0.12 l2.28 0 c0.12 0 0.2 0.1 0.16 0.22 l-3.46 12.86 c-0.04 0.08 -0.08 0.12 -0.16 0.12 l-2.48 0 c-0.06 0 -0.12 -0.04 -0.14 -0.12 l-3.46 -12.86 c-0.02 -0.12 0.06 -0.22 0.18 -0.22 l2.3 0 c0.08 0 0.12 0.06 0.16 0.12 z M5.74 18.62 l-3.34 -10.66 c-0.06 -0.16 -0.28 -0.06 -0.22 0.06 l3.32 10.68 c0.08 0.3 0.4 0.32 0.5 0 l3.2 -10.68 c0.04 -0.12 -0.18 -0.2 -0.22 -0.06 z M17.325 20 c-0.1 0 -0.16 -0.08 -0.16 -0.18 l0 -12.84 c0 -0.1 0.06 -0.18 0.16 -0.18 l6.8 0 c0.1 0 0.18 0.08 0.18 0.18 l0 2.14 c0 0.1 -0.08 0.18 -0.18 0.18 l-4.32 0 l0 2.72 l3.36 0 c0.1 0 0.16 0.08 0.16 0.18 l0 2.18 c0 0.1 -0.06 0.18 -0.16 0.18 l-3.36 0 l0 2.94 l4.32 0 c0.1 0 0.18 0.08 0.18 0.18 l0 2.14 c0 0.1 -0.08 0.18 -0.18 0.18 l-6.8 0 z M18.325 8.06 l0 10.64 c0 0.12 0.08 0.16 0.16 0.16 l4.6 0 c0.18 0 0.14 -0.24 0 -0.24 l-4.5 0 l0 -5.22 l3.68 0 c0.12 0 0.12 -0.28 0 -0.28 l-3.68 0 l0 -4.96 l4.5 0 c0.14 0 0.18 -0.26 0 -0.26 l-4.6 0 c-0.08 0 -0.16 0.06 -0.16 0.16 z M36.89 6.98 c0 -0.1 0.08 -0.18 0.18 -0.18 l2.3 0 c0.1 0 0.18 0.08 0.18 0.18 l0 12.84 c0 0.1 -0.08 0.18 -0.18 0.18 l-2.22 0 c-0.08 0 -0.16 -0.04 -0.18 -0.1 l-2.92 -6.58 l0 6.5 c0 0.1 -0.08 0.18 -0.18 0.18 l-2.28 0 c-0.1 0 -0.16 -0.08 -0.16 -0.18 l0 -12.84 c0 -0.1 0.06 -0.18 0.16 -0.18 l2.36 0 c0.08 0 0.12 0.06 0.14 0.1 l2.8 6.46 l0 -6.38 z M38.33 18.8 l0 -10.8 c0 -0.14 -0.26 -0.18 -0.26 0 l0 10.28 l-5.22 -10.32 c-0.06 -0.08 -0.22 -0.08 -0.22 0.04 l0 10.78 c0 0.18 0.24 0.18 0.24 0 l0 -10.26 l5.2 10.3 c0.08 0.14 0.26 0.1 0.26 -0.02 z M49.114999999999995 9.3 l-2.84 0 c-0.1 0 -0.18 -0.08 -0.18 -0.18 l0 -2.14 c0 -0.1 0.08 -0.18 0.18 -0.18 l8.34 0 c0.1 0 0.18 0.08 0.18 0.18 l0 2.14 c0 0.1 -0.08 0.18 -0.18 0.18 l-2.84 0 l0 10.52 c0 0.1 -0.08 0.18 -0.18 0.18 l-2.3 0 c-0.1 0 -0.18 -0.08 -0.18 -0.18 l0 -10.52 z M53.394999999999996 7.9 l-6.04 0 c-0.14 0 -0.14 0.26 0 0.26 l2.96 0 l0 10.6 c0 0.14 0.26 0.14 0.26 0 l0 -10.6 l2.82 0 c0.2 0 0.18 -0.26 0 -0.26 z M67.69999999999999 15.379999999999999 l0 -8.4 c0 -0.1 0.08 -0.18 0.18 -0.18 l2.28 0 c0.1 0 0.18 0.08 0.18 0.18 l0 9.04 c0 2.88 -1.58 4.18 -4.56 4.18 c-2.82 0 -4.58 -1.12 -4.58 -4.18 l0 -9.04 c0 -0.1 0.08 -0.18 0.18 -0.18 l2.3 0 c0.1 0 0.18 0.08 0.18 0.18 l0 8.4 c0 1.74 0.98 2.12 1.8 2.12 l0.24 0 c1.24 0 1.8 -0.84 1.8 -2.12 z M62.43999999999999 8.08 l0 7.78 c0 1.8 1.22 3.1 3.12 3.1 l0.5 0 c1.9 0 3.14 -1.36 3.14 -3.1 l0 -7.78 c0 -0.18 -0.24 -0.2 -0.24 0 l0 7.78 c0 1.64 -1.18 2.84 -2.9 2.84 l-0.5 0 c-1.68 0 -2.88 -1.08 -2.88 -2.84 l0 -7.78 c0 -0.18 -0.24 -0.18 -0.24 0 z M85.18499999999999 14.780000000000001 c-0.28 0.58 -0.68 1.02 -1.24 1.28 l1.68 3.7 c0.06 0.12 -0.02 0.24 -0.14 0.24 l-2.46 0 c-0.08 0 -0.12 -0.04 -0.14 -0.1 l-1.56 -3.4 l-1.02 0 l0 3.32 c0 0.1 -0.08 0.18 -0.18 0.18 l-2.3 0 c-0.08 0 -0.14 -0.08 -0.14 -0.18 l0 -12.84 c0 -0.1 0.06 -0.18 0.14 -0.18 l4.16 0 c2.22 0 3.56 1.26 3.56 3.6 l0 2.52 c0 0.7 -0.12 1.36 -0.36 1.86 z M82.925 12.3 l0 -1.3 c0 -1.4 -0.52 -1.54 -2.04 -1.54 l-0.58 0 l0 4.42 l0.58 0 c1.26 0 2 -0.02 2.04 -1.58 z M79.145 18.78 l0 -3.42 l2.88 0 l1.68 3.46 c0.04 0.1 0.28 0.06 0.22 -0.12 l-1.68 -3.4 c1.56 -0.22 2.1 -1.04 2.1 -2.52 l0 -2.5 c0 -2.2 -2 -2.38 -2.62 -2.38 l-2.7 0 c-0.04 0 -0.12 0.06 -0.12 0.12 l0 10.76 c0 0.14 0.24 0.14 0.24 0 z M84.10499999999999 10.28 l0 2.5 c0 2.04 -1.3 2.32 -2.56 2.32 l-2.4 0 l0 -6.94 l2.58 0 c2.16 0 2.38 1.46 2.38 2.12 z M92.99 20 c-0.1 0 -0.16 -0.08 -0.16 -0.18 l0 -12.84 c0 -0.1 0.06 -0.18 0.16 -0.18 l6.8 0 c0.1 0 0.18 0.08 0.18 0.18 l0 2.14 c0 0.1 -0.08 0.18 -0.18 0.18 l-4.32 0 l0 2.72 l3.36 0 c0.1 0 0.16 0.08 0.16 0.18 l0 2.18 c0 0.1 -0.06 0.18 -0.16 0.18 l-3.36 0 l0 2.94 l4.32 0 c0.1 0 0.18 0.08 0.18 0.18 l0 2.14 c0 0.1 -0.08 0.18 -0.18 0.18 l-6.8 0 z M93.99 8.06 l0 10.64 c0 0.12 0.08 0.16 0.16 0.16 l4.6 0 c0.18 0 0.14 -0.24 0 -0.24 l-4.5 0 l0 -5.22 l3.68 0 c0.12 0 0.12 -0.28 0 -0.28 l-3.68 0 l0 -4.96 l4.5 0 c0.14 0 0.18 -0.26 0 -0.26 l-4.6 0 c-0.08 0 -0.16 0.06 -0.16 0.16 z M111.59499999999998 11.9 c1.52 0.72 3.5 1.86 3.5 3.92 c0 0.6 -0.1 1.76 -0.76 2.74 c-0.74 1.1 -1.9 1.64 -3.5 1.64 c-1.7 0 -3.68 -0.82 -4.3 -2.68 c-0.02 -0.06 0 -0.12 0.06 -0.16 l1.84 -1.58 c0.08 -0.06 0.2 -0.06 0.26 0.04 c0.04 0.1 0.12 0.26 0.22 0.46 c0.3 0.62 1.02 1.24 1.82 1.24 c0.62 0 1.46 -0.34 1.46 -1.3 c0 -0.92 -1.26 -1.44 -2.04 -1.74 c-0.9 -0.36 -1.82 -0.82 -2.6 -1.5 c-0.82 -0.76 -1.22 -1.6 -1.22 -2.6 c0 -2.5 2.3 -3.76 4.48 -3.76 c1.72 0 3 0.9 3.84 2.68 c0.04 0.08 0 0.18 -0.06 0.22 l-1.78 1.24 c-0.08 0.04 -0.12 0.04 -0.2 -0.06 c-0.68 -0.98 -1.28 -1.44 -2.08 -1.44 c-0.42 0 -1.4 0.16 -1.4 0.9 c0 0.9 1.66 1.36 2.46 1.74 z M107.95499999999998 17.42 c0.5 1 1.88 1.58 3 1.58 c1.46 0 2.64 -1 2.8 -2.52 c0.2 -1.86 -1.26 -2.66 -2.7 -3.38 l-0.64 -0.28 c-1.48 -0.66 -2.56 -1.16 -2.56 -2.54 c0 -1.52 1.4 -2.22 2.78 -2.22 c1.26 0 1.92 0.74 2.26 1.2 c0.12 0.16 0.32 0.02 0.2 -0.14 c-0.34 -0.42 -1.06 -1.3 -2.46 -1.3 c-1.58 0 -3.02 0.78 -3.02 2.46 c0 1.5 1.2 2.08 2.72 2.78 l0.62 0.3 c1.98 0.94 2.7 1.82 2.54 3.1 c-0.3 2.04 -1.86 2.3 -2.54 2.3 c-1.5 0 -2.5 -0.9 -2.8 -1.46 c-0.1 -0.1 -0.24 0 -0.2 0.12 z M133.225 20 c-0.1 0 -0.16 -0.08 -0.16 -0.18 l0 -12.84 c0 -0.1 0.06 -0.18 0.16 -0.18 l2.28 0 c0.1 0 0.18 0.08 0.18 0.18 l0 12.84 c0 0.1 -0.08 0.18 -0.18 0.18 l-2.28 0 z M134.26500000000001 8 l0 10.78 c0 0.18 0.22 0.18 0.22 0 l0 -10.78 c0 -0.14 -0.22 -0.14 -0.22 0 z M148.57 6.98 c0 -0.1 0.08 -0.18 0.18 -0.18 l2.3 0 c0.1 0 0.18 0.08 0.18 0.18 l0 12.84 c0 0.1 -0.08 0.18 -0.18 0.18 l-2.22 0 c-0.08 0 -0.16 -0.04 -0.18 -0.1 l-2.92 -6.58 l0 6.5 c0 0.1 -0.08 0.18 -0.18 0.18 l-2.28 0 c-0.1 0 -0.16 -0.08 -0.16 -0.18 l0 -12.84 c0 -0.1 0.06 -0.18 0.16 -0.18 l2.36 0 c0.08 0 0.12 0.06 0.14 0.1 l2.8 6.46 l0 -6.38 z M150.01 18.8 l0 -10.8 c0 -0.14 -0.26 -0.18 -0.26 0 l0 10.28 l-5.22 -10.32 c-0.06 -0.08 -0.22 -0.08 -0.22 0.04 l0 10.78 c0 0.18 0.24 0.18 0.24 0 l0 -10.26 l5.2 10.3 c0.08 0.14 0.26 0.1 0.26 -0.02 z M164.995 15.379999999999999 l0 -0.62 c0 -0.1 0.08 -0.18 0.18 -0.18 l2.28 0 c0.1 0 0.18 0.08 0.18 0.18 l0 1.26 c0 2.94 -1.58 4.18 -4.56 4.18 c-2.78 0 -4.6 -1.1 -4.6 -4.18 l0 -5.26 c0 -2.96 1.62 -4.14 4.6 -4.14 c2.82 0 4.56 1.08 4.56 4.14 l0 0.42 c0 0.1 -0.08 0.18 -0.18 0.18 l-2.3 0 c-0.1 0 -0.18 -0.08 -0.18 -0.18 l0 -0.32 c0 -1.1 -0.82 -1.56 -1.8 -1.56 l-0.24 0 c-0.66 0 -1.1 0.18 -1.4 0.58 c-0.28 0.38 -0.38 0.88 -0.38 1.54 l0 3.96 c0 1.74 0.98 2.12 1.78 2.12 l0.24 0 c1.26 0 1.78 -0.84 1.82 -2.12 z M163.035 7.859999999999999 c-2.14 0 -3.38 0.76 -3.38 3.2 l0 4.82 c0 2.22 1.14 3.04 3.38 3.04 c2.1 0 3.36 -0.76 3.36 -3.06 c0 -0.16 -0.24 -0.16 -0.24 0 c0 2.02 -1.1 2.84 -3.12 2.84 c-1.96 0 -3.16 -0.68 -3.16 -2.82 l0 -4.82 c0 -2.08 0.98 -2.98 3.16 -2.98 c2.84 0 2.94 1.8 2.94 2 c0 0.18 0.28 0.2 0.28 0 c0 -1.66 -1.68 -2.22 -3.22 -2.22 z M175.79999999999998 20.18 c-0.94 0 -1.74 -0.8 -1.74 -1.78 s0.8 -1.74 1.74 -1.74 c0.98 0 1.8 0.76 1.8 1.74 s-0.82 1.78 -1.8 1.78 z M175.82 19 c0.3 0 0.54 -0.22 0.54 -0.52 s-0.24 -0.52 -0.54 -0.52 s-0.52 0.22 -0.52 0.52 s0.22 0.52 0.52 0.52 z M175.82 18.2 c0.16 0 0.28 0.12 0.28 0.28 c0 0.18 -0.12 0.3 -0.28 0.3 s-0.3 -0.12 -0.3 -0.3 c0 -0.16 0.14 -0.28 0.3 -0.28 z" />
      </g>
    </svg>
  );
}
