import { Trash } from "@phosphor-icons/react";
import { cva, cx, VariantProps } from "cva";
import { ComponentProps } from "react";

const tw = cva(
  [
    "flex items-center justify-center gap-2 group",
    "relative z-10 transition-all ease-in-out duration-500",
  ],
  {
    variants: {
      model: {
        submit: [
          "p-4 rounded-lg bg-blue-600 overflow-hidden",
          "text-white text-sm font-bold",
          "after:absolute after:content-[''] after:top-0 after:-left-4 after:transition-all after:ease-in-out after:duration-500",
          "after:bg-blue-300 after:invisible after:w-0 after:h-0 after:-z-10 after:rounded-lg",
          "hover:after:visible hover:after:w-[125%] hover:after:translate-x-2 hover:after:h-full",
          "active:scale-95",
        ],
        delete: [
          "text-gray-300",
          "px-1.5 py-1.5 rounded h-fit",
          'after:content-["delete"] after:absolute after:-top-full after:left-1/2 after:-translate-x-1/2',
          "after:w-fit after:h-fit after:bg-danger after:py-1 after:px-2 after:rounded after:ease-in-out ",
          "after:duration-500 after:text-white after:text-xs after:uppercase after:opacity-0 after:invisible",
          "hover:after:visible hover:after:opacity-100 hover:after:-top-[140%]",
          "hover:bg-gray-400 hover:text-danger hover:scale-110",
        ],
      },
    },
    defaultVariants: {
      model: "submit",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof tw>;
export const Button = ({
  className,
  model,
  children,
  ...props
}: ButtonProps) => (
  <button className={cx(tw({ model }), className)} {...props}>
    {model === "submit" ? children : <Trash size={14} />}
  </button>
);
