import { cx } from "cva";
import { ComponentProps } from "react";
import * as CheckboxPrimiteve from "@radix-ui/react-checkbox";
import { Check } from "@phosphor-icons/react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type RootProps = {
  completed: boolean;
} & ComponentProps<"div">;

export const Root = ({ completed, ...props }: RootProps) => {
  const [parent] = useAutoAnimate();

  return (
    <div
      ref={parent}
      className={cx(
        [
          "bg-gray-500 border border-gray-400",
          "p-4 rounded-lg justify-between w-full flex gap-3",
        ],
        {
          "border-gray-500": completed,
        }
      )}
      {...props}
    />
  );
};

type TextProps = {
  completed: boolean;
} & ComponentProps<"p">;
export const Text = ({ completed, ...props }: TextProps) => (
  <p
    className={cx("text-sm text-gray-100", {
      "line-through text-gray-300": completed,
    })}
    {...props}
  />
);

export const Checkbox = ({ ...props }: CheckboxPrimiteve.CheckboxProps) => (
  <CheckboxPrimiteve.Root
    className={cx([
      "flex items-center justify-center w-6 h-6 flex-none",
      "rounded-full border-blue-300 transition-colors border-2 text-gray-100",
      "data-[state=checked]:bg-violet-500 data-[state=checked]:border-violet-500",
      "data-[state=checked]:hover:bg-violet-300 data-[state=checked]:hover:border-violet-300 hover:border-blue-600",
    ])}
    {...props}
  >
    <CheckboxPrimiteve.Indicator className="text-violet11">
      <Check />
    </CheckboxPrimiteve.Indicator>
  </CheckboxPrimiteve.Root>
);
