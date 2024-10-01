import { memo, useEffect, useMemo, useState } from "react";
import { Command } from "cmdk";
import { cn } from "@utils/utils";
import "@search/style/cmdk.css";
import { IoIosSearch } from "react-icons/io";
import { COLORS } from "@constants/colors.constant";
import { useAssistantActiveJobs } from "@job/hooks/use-assistant-active-jobs";
import { IJob, JobList } from "@job/types/job.types";
import { groupByJob } from "@job/utils/job-parse";

const cmdkVariants = {
  dialog:
    "fixed top-[30%] left-[calc(50%-300px)] -transform-x-[50%] -transform-y-[50%] w-[600px] rounded-lg border-2 border-gray-100 bg-[#00000095] glass text-gray-100 tracking-wide text-base  outline-none",
  input: "outline-none bg-transparent flex w-full",
  list: "p-4 overflow-y-scroll pt-0",
  group: "my-2 text-xs text-gray-300 font-normal ",
  item: "text-sm p-2 text-gray-100 hover:bg-gray-200/10 rounded-md transition-color duration-300 ease-in-out flex gap-2 items-center",
  empty: "text-sm w-full flex justify-center items-center p-8",
};

const PLACEHOLDER_TEXT = "Search for Jobs, Forums, and others";

const JobItems = memo(
  ({ groupedJobs }: { groupedJobs: Record<string, IJob[]> }) => {
    return Object.entries(groupedJobs).map(([jobType, jobs]) => {
      const color = COLORS[jobType as JobList];
      return (
        <Command.Group
          heading={jobType}
          key={jobType}
          className={cn(cmdkVariants.group)}
        >
          {jobs.map((job, index) => (
            <Command.Item
              key={index}
              className={cn(cmdkVariants.item)}
              value={`${job.courseName} ${job.class} ${job.type}`}
              keywords={[jobType]}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span>
                {job.courseName} - {job.class} - {job.type}
              </span>
            </Command.Item>
          ))}
        </Command.Group>
      );
    });
  },
);
const CmdKIcon = () => {
  const key = useMemo(() => {
    return window.navigator.platform.includes("Mac") ? "⌘" : "Ctrl"; // WARN: might be deprecated but still works
  }, []);

  return (
    <>
      <div className="rounded-md bg-gray-200/10 py-1 px-2 w-fit">
        <span>{key}</span>
      </div>
      <div className="rounded-md bg-gray-200/10 py-1 px-2 w-fit">
        <span>K</span>
      </div>
    </>
  );
};

const CommandSearch = () => {
  const [open, setOpen] = useState(false);

  const { data: activeJobs, isPending: activeJobsLoading } =
    useAssistantActiveJobs({
      semesterId: "a7ff28f1-bd85-410b-b222-a29c619068fa",
    });

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

  const groupedJobs = useMemo(() => {
    if (activeJobs && activeJobs.data) {
      return groupByJob(activeJobs.data);
    }
    return {};
  }, [activeJobs]);

  return (
    <Command.Dialog
      className={cn(cmdkVariants.dialog)}
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      filter={(value, search, keywords) => {
        // Extend value with keywords (which include group name)
        const extendedValue = value + " " + keywords?.join(" ");
        return extendedValue.toLowerCase().includes(search.toLowerCase())
          ? 1
          : 0;
      }}
      shouldFilter={true} // Enable custom filtering
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
          <p className="text-center">
            {activeJobsLoading ? (
              <span>Fetching active jobs</span>
            ) : (
              <span>No results found.</span>
            )}
          </p>
        </Command.Empty>

        {Object.keys(groupedJobs).length > 0 && (
          <JobItems groupedJobs={groupedJobs} />
        )}
      </Command.List>
      <div className="w-full flex justify-end p-2 text-xs">
        <section className="flex gap-2 items-center font-normal">
          <p className="text-gray-300">Actions:</p>
          <CmdKIcon />
        </section>
      </div>
    </Command.Dialog>
  );
};

export default CommandSearch;
export { CmdKIcon };
