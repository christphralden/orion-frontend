import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";
import { GroupThreads } from "@job/types/group.types";

export const ThreadsList = ({ threads }: { threads: GroupThreads[] }) => {
  // const [filter, setFilter] = useState<"all" | "open" | "closed">("all");
  //
  // const filteredThreads = threads.filter((thread) =>
  //   filter === "all" ? true : thread.status === filter,
  // );

  return (
    <>
      <Table className="table-auto w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-3/5 px-6">Title</TableHead>
            <TableHead className="text-right w-1/5 px-6">Author</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {threads.length > 0 ? (
            threads.map((thread) => (
              <TableRow
                key={thread.id}
                className="hover:bg-gray-50 cursor-pointer "
              >
                <TableCell className="px-6">
                  <a
                    href={`/thread/${thread.id}`}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    {thread.title}
                  </a>
                  <p className="text-gray-500 text-xs">{thread.title}</p>
                </TableCell>

                <TableCell className="text-right text-gray-500 px-6">
                  {thread.authorInitial}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center text-gray-500 py-4">
                No threads found for the selected filter.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};
