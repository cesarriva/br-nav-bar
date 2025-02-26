import { BuildingRadarIcon } from "../icons/BuildingRadarIcon";
import { DisqualifiedIcon } from "../icons/DisqualifiedIcon";
import { EllipsisIcon } from "../icons/EllipsisIcon";
import { MarkedDoneIcon } from "../icons/MarkedDoneIcon";
import { PipelineIcon } from "../icons/PipelineIcon";
import { ResourceCenterIcon } from "../icons/ResourceCenterIcon";
import { ScreeningIcon } from "../icons/ScreeningIcon";
import { SettingsIcon } from "../icons/SettingsIcon";
import { TenderGptIcon } from "../icons/TenderGptIcon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../Tooltip";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <aside className="h-screen border-black w-16 flex flex-col bg-navbar-default justify-between">
      <section className="top-menu-items w-full">
        <NavbarItem
          href="https://app.buildingradar.com/home"
          className="hover:[&>svg]:fill-indigo-600"
          tooltip="Home"
        >
          <BuildingRadarIcon className="size-10" />
        </NavbarItem>

        <NavbarItem
          href="https://app.buildingradar.com/screening"
          className="hover:[&>svg]:fill-indigo-600"
          tooltip="Screening"
        >
          <ScreeningIcon className="size-9" />
        </NavbarItem>

        <NavbarItem
          href="https://app.buildingradar.com/pipelines"
          className="hover:[&>svg]:stroke-indigo-600"
          tooltip="Pipelines"
        >
          <PipelineIcon className="size-8" />
        </NavbarItem>

        <NavbarItem
          href="#"
          className="menu-active hover:[&>svg]:stroke-indigo-600"
          tooltip="Tender GPT"
          displayNewBadge
        >
          <TenderGptIcon className="size-9" />
        </NavbarItem>

        <NavbarItem
          href="https://app.buildingradar.com/marked-done"
          className="hover:[&>svg]:stroke-indigo-600"
          tooltip="Marked done"
        >
          <MarkedDoneIcon className="size-7" />
        </NavbarItem>

        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex h-16 w-full items-center justify-center hover:cursor-pointer hover:[&>svg]:stroke-indigo-600 bg-navbar-item">
                <EllipsisIcon className="size-7" />
              </div>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="bg-white border border-gray-200 py-2 px-4"
            >
              <a
                href="https://app.buildingradar.com/disqualified"
                className="flex gap-3 items-center"
              >
                <DisqualifiedIcon />
                <span className="font-semibold">Disqualified</span>
              </a>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </section>

      <section className="h-full bg-navbar-item"></section>

      <section className="bottom-menu-items w-full">
        <NavbarItem
          href="https://lp.buildingradar.com/online-support-jwgb2f"
          target="_blank"
          className="hover:[&>svg]:stroke-indigo-600"
          tooltip="Resource Center"
        >
          <ResourceCenterIcon className="size-7" />
        </NavbarItem>

        <NavbarItem
          href="https://app.buildingradar.com/user-settings/account"
          target="_blank"
          className="hover:[&>svg]:stroke-indigo-600"
          tooltip="Settings"
        >
          <SettingsIcon className="size-7" />
        </NavbarItem>
      </section>
    </aside>
  );
};

export default Navbar;
