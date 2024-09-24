import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@components/ui/table";
import { Separator } from "@components/ui/separator";

const activeJobs = [
    {
        type: "Case Make",
        subject: "Computational Basket",
        startDate: "06/09/2024",
        endDate: "27/09/2024",
        revision: "0"
    },
    {
        type: "TPA",
        subject: "Game",
        startDate: "06/09/2024",
        endDate: "27/09/2024",
        revision: "1"
    },
    {
        type: "Correction",
        subject: "Racism Neural Network",
        startDate: "06/09/2024",
        endDate: "27/09/2024",
        revision: "1000"
    },
    {
        type: "RIG",
        subject: "Orion",
        startDate: "20/09/2024",
        endDate: "30/12/2024",
        revision: "-"
    },
]

const ActiveJobTabs = () => {
    return (
        <div className="grid w-full items-center">
            <Table>
                <TableHeader>
                    <TableRow className="">
                    <TableHead className="pl-9">Type</TableHead>
                    <TableHead className="">Subject</TableHead>
                    <TableHead className="">Start Date</TableHead>
                    <TableHead className="">End Date</TableHead>
                    <TableHead className="text-right">Revision</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {activeJobs.map((job, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium pl-9">{job.type}</TableCell>
                            <TableCell>{job.subject}</TableCell>
                            <TableCell>{job.startDate}</TableCell>
                            <TableCell>{job.endDate}</TableCell>
                            <TableCell className="text-right">{job.revision}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Separator className="border-t-2"/>
        </div>
    );
};


export default ActiveJobTabs;