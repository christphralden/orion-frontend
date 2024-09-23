import { FaMessage, FaChevronRight } from "react-icons/fa6";

interface GenericMessage {
  sender: string;
  message: string;
  time: string; //TODO: fix later
}
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
  return (
    <div className="w-full h-fit p-6 rounded-md flex-col gap-2 flex hover:bg-gray-100 group">
      <section className="w-full flex justify-between items-center">
        <div className="rounded-md border-2 border-gray-300 px-2 flex gap-2 justify-start items-center w-fit">
          <div className="w-2 h-2 rounded-full bg-blue"></div>
          <p className="text-sm">{type}</p>
        </div>
        <div className="flex gap-4 text-gray-500 text-sm ">
          <p>{subco}</p>
          <div className="w-fit flex gap-1 justify-center items-center">
            <FaMessage />
            <p>{participantCount}</p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex gap-2 justify-start items-baseline">
          <h1 className="text-base font-semibold">{name}</h1>
          <div className="w-fit h-fit overflow-hidden">
            <FaChevronRight
              size="0.75rem"
              className="-translate-x-[100%] group-hover:translate-x-[0%] transition-all duration-300 ease-in-out font-bold"
            />
          </div>
        </div>
        <div className="flex gap-6 text-sm text-gray-500 items-end justify-between">
          <p className="truncate text-sm">
            <span className="text-nowrap ">{lastMessage.sender}:&nbsp;</span>
            <span>{lastMessage.message}</span>
          </p>
          <p>{lastMessage.time}</p>
        </div>
      </section>
    </div>
  );
};

export default MiniForumTab;
