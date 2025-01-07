import { getUser } from "@authentication/store/auth-store";
import { Button } from "@components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@components/ui/card";
import { Label } from "@components/ui/label";
import RIGGroupTable from "@job/components/rig-group-table";
import TPAListTable from "@job/components/tpa-list-table";
import { useState } from "react";
  
const assistantList = [
    "AL23-2", "RV23-2", "VH23-2", "DG23-2", "TN23-2", "YN23-2", "RR23-2", "DM23-2", "CN23-2", "JE23-2", "DC23-2"
];

const guiderList = [
    "TY23-1", "RA23-1", "KS23-1", "WB23-1", "NC23-1", "TR23-1"
]
/* 
TODO : 
Get Group by ID
Automatically check user group ID and pass the id to get group by id

*/
const TPAList = () => {
    const user = getUser();
    const [selectedAssistant, setSelectedAssistant] = useState<string[]>([]);
    const [selectedGuider, setSelectedGuider] = useState<string>('');

    const toggleAssistantSelection = (group: string) => {
        setSelectedAssistant((prev) =>
            prev.includes(group)
                ? prev.filter((g) => g !== group)
                : [...prev, group]
        );
    };

    return (
        <div className="h-full space-y-2">
            <Card className="w-full flex flex-col flex-1">
                <CardHeader className="flex flex-row">
                    <CardTitle className="">
                        TPA List
                    </CardTitle>
                </CardHeader>
                <CardContent className="w-full flex-grow overflow-y-auto">
                    <div className="flex space-x-2">
                        <TPAListTable />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
  
export default TPAList;
  