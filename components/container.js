import cn from "classnames";

export default function Container({ children, full }) {
  return (
    <>
      <div
        className={cn("container", "mx-auto", "px-4", "my-2", "min-h-full", {
          "h-full": full,
        })}
      >
        {children}
      </div>
    </>
  );
}
