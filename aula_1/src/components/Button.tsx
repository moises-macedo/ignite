import { cva, VariantProps } from "cva";
import { ComponentPropsWithRef } from "react";

const tw = cva(
  [
    "flex items-center gap-x-2.5 justify-center",
    "px-6 rounded-lg pt-4 pb-3 w-full",
    "font-bold",
    "overflow-hidden relative transition z-10 duration-500",
    'before:content-[""] before:block before:w-0 before:h-0 before:transition-all before:duration-500 before:ease-in-out',
    "before:-top-4 before:-left-4",
    "before:-translate-y-2/4 before:-translate-x-2/4 before:absolute before:rounded-full before:z-[-1]",
    'after:content-[""] after:block after:w-0 after:h-0 after:transition-all after:duration-500 after:ease-in-out',
    "after:-translate-y-2/4 after:-translate-x-2/4 after:absolute after:rounded-full after:z-[-1]",
    "after:top-[calc(100%_+_1em)] after:left-[calc(100%_+_1em)]  ",
    "hover:before:w-[135%] hover:before:h-[200px] hover:after:w-[135%] hover:after:h-[200px]",
    "active:bg-green-600/80",
  ],
  {
    variants: {
      appearance: {
        primary: [
          "bg-green-500 text-white",
          "after:bg-green-300 before:bg-green-300 outline-green-300",
        ],
        secondary: [
          "border border-green-500 text-green-500 hover:text-white",
          "after:bg-green-500 before:bg-green-500 outline-green-500",
        ],
      },
    },
    defaultVariants: {
      appearance: "primary",
    },
  }
);

type ButtonProps = { asChild?: boolean } & ComponentPropsWithRef<"button"> &
  VariantProps<typeof tw>;

export const Button = ({ appearance, className, ...props }: ButtonProps) => (
  <button className={tw({ appearance, className })} {...props} />
);
