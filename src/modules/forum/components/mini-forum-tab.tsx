import { COLORS } from "@constants/colors";
import { FaChevronRight, FaUserGroup } from "react-icons/fa6";

interface GenericMessage {
  sender: string;
  message: string;
  time: string; //TODO: fix later
}

const typeToColorsMap: Record<string, string> = {
  // TODO: ?
  TPA: COLORS.TPA,
  Casemaking: COLORS.CASEMAKING,
  Correction: COLORS.CORRECTION,
};

const MiniForumTab = ({
  type,
  name,
  subco,
  participantCount,
  lastMessage,
}: {
  type: string;
  name: string;
  subco: string;
  participantCount: number;
  lastMessage: GenericMessage;
}) => {
  const color = typeToColorsMap[type];

  return (
    <div className="w-full h-fit p-6 px-8 flex-col gap-2 flex hover:bg-gray-100 group">
      <section className="w-full flex justify-between items-center gap-4">
        <div className="rounded-md border-2 border-gray-300 px-2 flex gap-2 justify-start items-center w-fit">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: color }}
          />
          <p className="text-sm text-gray-500">{type}</p>
        </div>
        <div className="flex text-gray-500 text-sm w-full justify-end gap-4">
          {import.meta.env.VITE_EXPERIMENTAL === "true" && (
            <div className="w-fit flex gap-1 justify-center items-center">
              <FaUserGroup />
              <p>{participantCount}</p>
            </div>
          )}
          <p>{subco}</p>
          <p className="text-gray-500 text-sm">{lastMessage.time}&nbsp;</p>
        </div>
      </section>

      <section>
        <div className="flex gap-2 justify-start items-baseline">
          <h1 className="text-base font-semibold">{name}</h1>
          {import.meta.env.VITE_EXPERIMENTAL === "true" && (
            <div className="w-fit h-fit overflow-hidden">
              <FaChevronRight
                size="0.75rem"
                className="-translate-x-[100%] group-hover:translate-x-[0%] transition-all duration-300 ease-in-out font-bold"
              />
            </div>
          )}
        </div>

        <div className="flex w-full h-fit text-sm text-gray-500 gap-2 items-center">
          <div className="flex gap-6 items-end justify-between w-full">
            <p className="truncate text-sm space-x-2">
              <span className="text-nowrap ">{lastMessage.sender}&nbsp;:</span>
              <span>{lastMessage.message}</span>
            </p>
          </div>
          <div className="w-fit h-fit rounded-full border-2  px-2 items-center flex text-xs ">
            3
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiniForumTab;
