import { useRouter } from "next/router";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ActiveLink({ children, href }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={classNames(
        router.asPath === href
          ? "underline decoration-trueGray-700 dark:text-trueGray-100  decoration-4 underline-offset-8 text-trueGray-700 dark:text-trueGray-100"
          : "text-trueGray-700 hover:underline decoration-4 hover:decoration-trueGray-700 dark:text-trueGray-100 dark:hover:decoration-trueGray-100 hover:underline-offset-8",
        "block px-3 py-2 rounded-md text-base font-medium"
      )}
    >
      {children}
    </Link>
  );
}

export default ActiveLink;
