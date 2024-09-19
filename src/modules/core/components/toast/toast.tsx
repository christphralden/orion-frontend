import { MdErrorOutline } from "react-icons/md";
import { toast } from "sonner";

const ToastError = ({ message }: { message: string }) => {
  return toast.error(message, {
    icon: <MdErrorOutline />,
  });
};

export { ToastError };
