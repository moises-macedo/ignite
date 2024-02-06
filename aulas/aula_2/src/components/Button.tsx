import { cva, VariantProps } from "cva";
import { ComponentProps } from "react";

const tw = cva(
  [
    "py-4 px-10 w-full z-10 rounded-lg",
    "flex items-start justify-center gap-2 relative font-bold",
    "duration-300 transition-all overflow-hidden",
    'before:content-[""] before:w-0 before:h-20  before:absolute ',
    "before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2",
    "before:duration-500 ease-in-out before:transition-all before:-z-10",
    "hover:before:w-full hover:before:h-[300%]",
  ],
  {
    variants: {
      appearance: {
        start: [
          "bg-green-500  before:bg-green-700",
          "text-gray-100",
          "disabled:bg-green-700 disabled:text-gray-200 disabled:cursor-not-allowed",
        ],
        interrupt: [
          "text-white",
          "bg-red-500 before:bg-red-700",
          "disabled:bg-red-700 disabled:cursor-not-allowed disabled:text-gray-200",
        ],
      },
    },
    defaultVariants: {
      appearance: "start",
    },
  }
);

type ButtonsProps = ComponentProps<"button"> & VariantProps<typeof tw>;
export const Button = ({ appearance, className, ...props }: ButtonsProps) => (
  <button className={tw({ className, appearance })} {...props} />
);
