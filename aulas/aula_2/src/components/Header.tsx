import { Ignite } from "@/icons";
import { Scroll, Timer } from "@phosphor-icons/react";
import { cx } from "cva";
import { NavLink, useLocation } from "react-router-dom";

export const Header = () => {
  const { pathname: isActive } = useLocation();
  
  return (
    <header className="flex items-center justify-between p-10 pb-20">
      <Ignite />
      <div className="flex items-center justify-center gap-2">
        <NavLink
          to={"/"}
          className={cx(
            [
              "border-b-2 border-transparent hover:border-green-500 text-gray-100 pb-2 transition-colors",
            ],
            {
              "text-green-500": isActive === "/",
            }
          )}
          title="Timer"
        >
          <Timer size={48} />
        </NavLink>
        <NavLink
          to={"/history"}
          className={cx(
            [
              "border-b-2 border-transparent hover:border-green-500 text-gray-100 pb-2 transition-colors",
            ],
            {
              "text-green-500": isActive === "/history",
            }
          )}
          title="History"
        >
          <Scroll size={48} />
        </NavLink>
      </div>
    </header>
  );
};
