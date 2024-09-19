import { MdErrorOutline } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import { toast } from "sonner";

const ToastError = ({ message }: { message: string }) => {
  return toast(
    <div className="flex gap-2 ">
      <MdErrorOutline size="1.25rem" />
      <p>{message}</p>
    </div>,
  );
};

const ToastSuccess = ({ message }: { message: string }) => {
  return toast(
    <div className="flex gap-2 ">
      <IoIosCheckmarkCircleOutline size="1.25rem" />
      <p>{message}</p>
    </div>,
  );
};

export { ToastError, ToastSuccess };
