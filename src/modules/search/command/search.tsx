import { memo, useEffect, useMemo, useState } from "react";
import { Command } from "cmdk";
import { cn } from "@utils/utils";
import "@search/style/cmdk.css";
import { IoIosSearch } from "react-icons/io";
import { JOBS } from "@job/constants/job.constant";
import { COLORS } from "@constants/colors.constant";
import { useAssistantActiveJobs } from "@job/hooks/use-assistant-active-jobs";

const cmdkVariants = {
  dialog:
    "fixed top-[30%] left-[calc(50%-300px)] -transform-x-[50%] -transform-y-[50%] w-[600px] rounded-lg border-2 border-gray-100 bg-[#00000095] glass text-gray-100 tracking-wide text-base  outline-none",
  input: "outline-none bg-transparent flex w-full",
  list: "p-4 overflow-y-scroll pt-0",
  group: "my-2 text-xs text-gray-300 font-normal ",
  item: "text-sm p-2 text-gray-100 hover:bg-gray-200/10 rounded-md transition-color duration-300 ease-in-out flex gap-2 items-center",
  empty: "text-sm",
};

const PLACEHOLDER_TEXT = "Search for Jobs, Forums, and others";

const fakeCorrectionData = [
  {
    type: "Correction",
    subject: "Computational Basket",
    classCode: "BE01",
    startDate: "06/09/2024",
    endDate: "27/09/2024",
    revision: "0",
  },
  {
    type: "Correction",
    subject: "Competitive Brainrot",
    classCode: "BY02",
    startDate: "06/09/2024",
    endDate: "27/09/2024",
    revision: "0",
  },
  {
    type: "Correction",
    subject: "PopularMMOs Network",
    classCode: "BX01",
    startDate: "06/09/2024",
    endDate: "27/09/2024",
    revision: "0",
  },
];

const CorrectionItems = memo(() => {
  return fakeCorrectionData.map((correction) => {
    const color = COLORS["Correction"];

    return (
      <Command.Item key={correction.subject} className={cn(cmdkVariants.item)}>
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: color }}
        />
        <span>
          {correction.subject}
          {correction.classCode && <span>{` - ${correction.classCode}`}</span>}
        </span>
      </Command.Item>
    );
  });
});

const JobItems = memo(() => {
  return JOBS.map((job) => {
    const color = COLORS[job];

    return (
      <Command.Item key={job} className={cn(cmdkVariants.item)}>
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: color }}
        />
        <span>{job}</span>
      </Command.Item>
    );
  });
});

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

  const key = useMemo(() => {
    return window.navigator.platform.includes("Mac") ? "⌘" : "Ctrl";
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
          <JobItems />
        </Command.Group>
        <Command.Group heading="Correction" className={cn(cmdkVariants.group)}>
          <CorrectionItems />
        </Command.Group>
      </Command.List>
      <div className="w-full flex justify-end p-2 text-xs">
        <section className="flex gap-2 items-center font-normal">
          <p className="text-gray-300">Actions:</p>
          <div className="rounded-md bg-gray-200/10 py-1 px-2 w-fit">
            <span>{key}</span>
          </div>
          <div className="rounded-md bg-gray-200/10 py-1 px-2 w-fit">
            <span>K</span>
          </div>
        </section>
      </div>
    </Command.Dialog>
  );
};

export default CommandSearch;
