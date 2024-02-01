import { cx } from "cva";
import { ComponentProps } from "react";

export const Input = ({ ...props }: ComponentProps<"input">) => (
  <input
    className={cx([
      "bg-gray-500 border border-gray-700 rounded-lg h-[54px]",
      "p-4 w-full outline-none",
      'text-gray-100',
      "placeholder:text-gray-300 focus:border-violet-500 hover:border-violet-500",
    ])}
    {...props}
  />
);
