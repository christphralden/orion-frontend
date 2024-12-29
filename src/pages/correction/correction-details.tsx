import { Button } from "@components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@components/ui/navigation-menu";
import AssistantListTable from "@job/components/assistant-list-table";
import { Separator } from "@radix-ui/react-separator";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CorrectionDetails = () => {
    const { id } = useParams();

    const [selectedTab, setSelectedTab] = useState("List"); // Default value is "List"
    const handleTabChange = (tab: string) => {
        setSelectedTab(tab);
    };

    return (
        <div className="h-full flex flex-col space-y-4">
            <div className="flex flex-col">
                <p className="text-2xl font-semibold">courseId - courseName</p>
                <p className="text-xl">assignmentType</p>
            </div>

            <div className="flex space-x-4">
                <Button
                    variant={"outline"}
                    onClick={() => handleTabChange("List")}
                    className={selectedTab === "List" ? "font-bold " : ""}
                >
                    List
                </Button>
                <Button
                    variant={"outline"}
                    onClick={() => handleTabChange("Forum")}
                    className={selectedTab === "Forum" ? "font-bold " : ""}
                >
                    Forum
                </Button>
            </div>


            <div className="mt-4">
                {selectedTab === "List" && 
                <>
                    <Card className="h-full w-full flex flex-col flex-1">
                        <CardHeader>
                            <CardTitle>Assistant List</CardTitle>
                            <CardDescription>Assistants that has the correction.</CardDescription>
                        </CardHeader>
                        <Separator />
                        <CardContent className="p-0 w-full flex-grow overflow-y-auto h-1 min-h-[75vh]">
                            <AssistantListTable />
                        </CardContent>
                    </Card>
                </>
                }
                {selectedTab === "Forum" && 
                <>
                    Forum
                </>
                }
            </div>

        </div>
    );
};
  
export default CorrectionDetails;
  