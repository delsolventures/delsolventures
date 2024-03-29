export default function SectionTitle(props) {
  return (
    <div
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.pretitle && (
        <div className="text-md font-bold tracking-wider text-trueGray-700 dark:text-trueGray-100 uppercase">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-trueGray-700 dark:text-trueGray-100 lg:leading-tight lg:text-4xl">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-trueGray-700 lg:text-xl xl:text-xl dark:text-trueGray-100">
          {props.children}
        </p>
      )}
    </div>
  );
}
