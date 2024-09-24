import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { cn } from "@utils/utils";
import "@search/style/cmdk.css";
import { IoIosSearch } from "react-icons/io";
import { JOBS } from "@constants/job.constant";
import { COLORS } from "@constants/colors.constant";

const cmdkVariants = {
  dialog:
    "fixed top-[30%] left-[calc(50%-300px)] -transform-x-[50%] -transform-y-[50%] w-[600px] rounded-lg border-2 border-gray-100 bg-[#00000095] glass text-gray-100 font-light tracking-wide text-base  outline-none",
  input: "outline-none bg-transparent flex w-full",
  list: "p-4",
  group: "text-xs text-gray-300 font-normal ",
  item: "font-light text-sm p-2 text-gray-100 hover:bg-gray-200/10 rounded-md transition-color duration-300 ease-in-out flex gap-2 items-center",
  empty: "text-sm",
};

const PLACEHOLDER_TEXT = "Search for Jobs, Forums, and others";

const CommandSearch = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command.Dialog
      className={cn(cmdkVariants.dialog)}
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
    >
      <div className="flex justify-start items-center p-4 gap-2">
        <IoIosSearch size="1.25rem" color="#d1d5db" />

        <Command.Input
          placeholder={PLACEHOLDER_TEXT}
          className={cn(cmdkVariants.input)}
        />
      </div>
      <Command.List className={cn(cmdkVariants.list)}>
        <Command.Empty className={cmdkVariants.empty}>
          No results found.
        </Command.Empty>

        <Command.Group heading="Jobs" className={cn(cmdkVariants.group)}>
          <div className="mt-2">
            {JOBS.map((job) => {
              const color = COLORS[job];

              return (
                <Command.Item className={cn(cmdkVariants.item)}>
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <span>{job}</span>
                </Command.Item>
              );
            })}
          </div>
        </Command.Group>
      </Command.List>
      <div className="w-full flex justify-end p-2">
        <section className="text-xs flex gap-2 items-center">
          <p className="text-sm text-gray-300 font-normal">Actions:</p>
          <div className="rounded-md bg-gray-200/10 py-1 px-2 w-fit">
            <span>Ctrl</span>
          </div>
          <div className="rounded-md bg-gray-200/10 py-1 px-2 w-fit">
            <span>k</span>
          </div>
        </section>
      </div>
    </Command.Dialog>
  );
};

export default CommandSearch;
