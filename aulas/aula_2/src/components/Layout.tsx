import { cx } from "cva";
import { ComponentProps } from "react";

export const Layout = ({ ...props }: ComponentProps<"div">) => (
  <div
    className={cx([
      "flex flex-col items-center justify-center",
      "bg-gray-900 w-full min-h-screen p-5 md:p-10 xl:-20",
    ])}
  >
    <div
      className="bg-gray-700 rounded-lg w-full xl:max-w-7xl h-[calc(100vh-10rem)]"
      {...props}
    />
  </div>
);
