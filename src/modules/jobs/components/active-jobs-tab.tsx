import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";
const activeJobs = [
  {
    type: "agagagaggagagagaggaggaga",
    subject: "Computational Basket",
    startDate: "06/09/2024",
    endDate: "27/09/2024",
    revision: "0",
  },
  {
    type: "TPA",
    subject: "Game",
    startDate: "06/09/2024",
    endDate: "27/09/2024",
    revision: "1",
  },
  {
    type: "Correction",
    subject: "Racism Neural Network",
    startDate: "06/09/2024",
    endDate: "27/09/2024",
    revision: "1000",
  },
  {
    type: "RIG",
    subject: "Orion",
    startDate: "20/09/2024",
    endDate: "30/12/2024",
    revision: "-",
  },
];

const ActiveJobTabs = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="px-10">Type</TableHead>
          <TableHead>Subject</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>End Date</TableHead>
          <TableHead className="text-right px-10">Revision</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {activeJobs.map((job, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium px-10">{job.type}</TableCell>
            <TableCell>{job.subject}</TableCell>
            <TableCell>{job.startDate}</TableCell>
            <TableCell>{job.endDate}</TableCell>
            <TableCell className="text-right px-10">{job.revision}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ActiveJobTabs;
