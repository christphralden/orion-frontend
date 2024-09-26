import type { Job } from "@core/types/job.types";
import type { GenericMessage } from "@forum/types/message.types";

import { COLORS } from "@constants/colors.constant";
import { FaChevronRight } from "react-icons/fa6";
import { cn } from "@utils/utils";

const MiniForumTab = ({
  id,
  jobType,
  classCode,
  name,
  subco,
  lastMessage,
  unreadMessages,
  className,
}: {
  id: number; //TODO: fix later
  jobType: Job;
  classCode?: string;
  name: string;
  subco: string;
  participantCount: number;
  unreadMessages?: number;
  lastMessage: GenericMessage;
  className?: string;
}) => {
  const color = COLORS[jobType];

  return (
    <div
      id={`forum-${id}`}
      className={cn(
        "w-full h-fit p-4 flex-col gap-2 flex hover:bg-gray-100 group",
        className,
      )}
    >
      <section className="w-full flex justify-between items-center gap-4">
        <div className="rounded-md border-2 border-gray-300 px-2 flex gap-2 justify-start items-center w-fit">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: color }}
          />
          <p className="text-xs font-medium text-gray-500">{jobType}</p>
        </div>
        <div className="flex text-gray-500 text-sm w-full justify-end gap-4">
          <p>{subco}</p>
        </div>
      </section>

      <section>
        <div className="flex gap-2 justify-start items-baseline">
          <p className="text-sm font-medium ">
            {name} {classCode && <span>{`- ${classCode}`}</span>}
          </p>
          <div className="w-fit h-fit overflow-hidden">
            <FaChevronRight
              size="0.7rem"
              className="-translate-x-[100%] group-hover:translate-x-[0%] transition-all duration-300 ease-in-out font-bold"
            />
          </div>
        </div>

        <div className="flex w-full h-fit text-sm text-gray-500 gap-2 items-center">
          <div className="flex gap-6 items-end justify-between w-full">
            <p className="truncate text-sm space-x-2">
              <span className="text-nowrap ">{lastMessage.sender}&nbsp;:</span>
              <span>{lastMessage.message}</span>
            </p>
          </div>
          {import.meta.env.VITE_EXPERIMENTAL === "true" && (
            <p className="text-gray-500 text-sm">{lastMessage.time}&nbsp;</p>
          )}
          {unreadMessages && (
            <div className="w-fit h-fit rounded-full px-2 items-center flex text-xs bg-blue text-white">
              <span>{unreadMessages}</span>
            </div>
          )}{" "}
        </div>
      </section>
    </div>
  );
};

export default MiniForumTab;
