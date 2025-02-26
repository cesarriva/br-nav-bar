import React, { HTMLAttributeAnchorTarget } from "react";
import { cn } from "../utils";
import { Tooltip } from "@radix-ui/react-tooltip";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "../Tooltip";

interface Props {
  children: React.ReactNode;
  href: string;
  target?: HTMLAttributeAnchorTarget | undefined;
  tooltip: string;
  displayNewBadge?: boolean;
  className?: string;
}

const NavbarItem = ({
  children,
  href,
  target,
  tooltip,
  displayNewBadge,
  className,
}: Props) => {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={href}
            target={target}
            className={cn(
              "relative flex h-16 w-full items-center justify-center  bg-navbar-item",
              className,
            )}
          >
            {children}
            {displayNewBadge && (
              <div className="absolute bottom-1 right-0.5 flex h-4 w-auto flex-row items-center justify-center rounded bg-pink-500 px-1 py-0.5 text-xs text-white">
                New
              </div>
            )}
          </a>
        </TooltipTrigger>
        <TooltipContent
          side="right"
          className="bg-white border border-gray-200 py-2 px-4"
        >
          {tooltip}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default NavbarItem;
