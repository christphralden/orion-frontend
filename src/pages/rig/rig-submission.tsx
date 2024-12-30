import { Button } from "@components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@components/ui/card";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { useState } from "react";
  

/* 
TODO : 
Get Group by ID
Automatically check user group ID and pass the id to get group by id

*/
const RIGSubmission = () => {
    const [link, setLink] = useState('');
 
    return (
        <div className="h-full space-y-2">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                <Card className="md:w-1/2 w-full flex flex-col flex-1">
                    <CardHeader>
                        <CardTitle>Group Members</CardTitle>
                        <CardDescription className="flex">
                            Your RIG friends ;D
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="w-full flex-grow overflow-y-auto space-y-2">
                        {/* FOR EACH MEMBER */}
                        <Label>Name</Label>
                    </CardContent>
                </Card>

                <Card className="md:w-1/2 w-full flex flex-col flex-1">
                    <CardHeader className="flex justify-center items-center h-full">
                        <CardTitle className="text-red-600">DEADLINE : 30 December 2024</CardTitle>
                    </CardHeader>
                </Card>
            </div>

            <Card className="w-full flex flex-col flex-1">
                <CardHeader>
                <CardTitle>RIG Submission</CardTitle>
                <CardDescription className="flex">
                    Today's workload filtered by corrections
                </CardDescription>
                </CardHeader>
                <CardContent className="w-full flex-grow overflow-y-auto">
                    <div className="flex space-x-2">
                        <Input 
                            value={link}
                            onChange={(e) => {setLink(e.target.value)}}
                            className="bg-white"
                        />
                        <Button variant="default">
                            Submit Link
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
  
export default RIGSubmission;
  