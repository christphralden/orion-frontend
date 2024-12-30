import { getUser } from "@authentication/store/auth-store";
import { Button } from "@components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@components/ui/dialog"
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import RIGGroupTable from "@job/components/rig-group-table";
import { Plus } from "lucide-react";
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
const RIGGroup = () => {
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
                <CardHeader className="flex flex-row items-center">
                    <CardTitle className="">
                        RIG Groups
                    </CardTitle>
                    {!user?.roles.includes("") && 
                        <div className="w-full flex justify-end items-center">
                            <Dialog>
                            <DialogTrigger>
                                <Button variant="default" className="flex items-center space-x-1">
                                    <Label>Create new Group</Label>
                                    <Plus className="w-5"/>
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                <DialogTitle>Create RIG Group</DialogTitle>
                                <DialogDescription>
                                    List new group to RIG list
                                </DialogDescription>
                                </DialogHeader>
                                <div className="flex space-x-1 py-1 justify-start">
                                    {/* Asssistant List */}
                                    <div className=" flex flex-col w-1/2 overflow-y-scroll min-h-[30vh] max-h-[30vh] space-y-1">
                                        {assistantList.map((ast) => (
                                            <Button
                                                key={ast}
                                                variant={selectedAssistant.includes(ast)
                                                    ? "destructive"
                                                    : "outline"}
                                                    onClick={() => toggleAssistantSelection(ast)}
                                            >
                                                {ast}
                                            </Button>
                                        ))}
                                    </div>
                                    {/* Guider List */}
                                    <div className="flex flex-col w-1/2 overflow-y-scroll min-h-[30vh] max-h-[30vh] space-y-1">
                                        {guiderList.map((gui) => (
                                            <Button
                                                key={gui}
                                                variant={selectedGuider === gui
                                                    ? "destructive"
                                                    : "outline"}
                                                    onClick={() => setSelectedGuider(gui)}
                                            >
                                                {gui}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    Selected Member : {selectedAssistant}
                                    <br />
                                    Selected Guider : {selectedGuider}
                                </div>
                                <DialogFooter>
                                    <Button variant="default">
                                        Create
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                            </Dialog>
                        </div>
                    }
                </CardHeader>
                <CardContent className="w-full flex-grow overflow-y-auto">
                    <div className="flex space-x-2">
                        <RIGGroupTable />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
  
export default RIGGroup;
  