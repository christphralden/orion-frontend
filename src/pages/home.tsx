import NavBar from "@components/navbar/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Separator } from "@components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";

import { Button } from "@components/ui/button";
import MiniForumTab from "src/modules/forum/components/mini-forum-tab";

const fakeForumData = [
  {
    type: "Correction",
    name: "Racism Neural Network",
    subco: "WB23-1",
    participantCount: 12,
    lastMessage: {
      sender: "AL23-2",
      message: "Ko, boleh liat ini gimana cara nilai nya ga",
      time: "23:22",
    },
  },
  {
    type: "TPA",
    name: "TPA Network",

    subco: "EF23-2",
    participantCount: 11,
    lastMessage: {
      sender: "VH23-2",
      message: "BUSET GAMPANG BANGET WKWKWK",
      time: "02:21",
    },
  },
];

const Home = () => {
  return (
    <div className="w-[85%] h-full items-center flex flex-col mt-3">
      <div className="flex justify-between w-full">
        <div>Logo</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Odd Semester 24/25</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Even Semester 23/24</DropdownMenuItem>
            <DropdownMenuItem>Odd Semester 23/24</DropdownMenuItem>
            <DropdownMenuItem>Even Semester 22/23</DropdownMenuItem>
            <DropdownMenuItem>Odd Semester 22/23</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <NavBar />
      <section className="flex w-full gap-8 h-screen">
        <Card className="w-[65%] h-[85%]">
          <CardHeader>
            <CardTitle>Active Jobs</CardTitle>
            <CardDescription>Today's workload</CardDescription>
          </CardHeader>
          <Separator className="mb-4" />
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <Button
                variant="ghost"
                className="flex h-10 items-center w-[100%]"
              >
                <div className="w-[10%]">Type</div>
                <Separator orientation="vertical" />
                <div className="w-[40%]">Matkul</div>
                <Separator orientation="vertical" />
                <div className="w-[7.5%]">Class</div>
                <Separator orientation="vertical" />
                <div className="w-[15%]">Start Time</div>
                <Separator orientation="vertical" />
                <div className="w-[15%]">End Time</div>
                <Separator orientation="vertical" />
                <div className="w-[10%]">Status</div>
              </Button>
              <Button
                variant="ghost"
                className="flex h-10 items-center w-[100%]"
              >
                <div className="w-[10%]">Teaching</div>
                <Separator orientation="vertical" />
                <div className="w-[40%]">
                  LANG6969001 - Racism Neural Network
                </div>
                <Separator orientation="vertical" />
                <div className="w-[7.5%]">JE01</div>
                <Separator orientation="vertical" />
                <div className="w-[15%]">2024/10/12 </div>
                <Separator orientation="vertical" />
                <div className="w-[15%]">2024/11/2</div>
                <Separator orientation="vertical" />
                <div className="w-[10%]">Ongoing</div>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="max-w-[500px] flex-grow h-[50%]">
          <CardHeader>
            <CardTitle>Forums</CardTitle>
            <CardDescription>Recently active forum</CardDescription>
          </CardHeader>
          <Separator />
          <CardContent className="flex flex-col cursor-pointer p-0">
            {fakeForumData.map((data, i) => {
              return (
                <>
                  <MiniForumTab key={i} {...data} />
                  <Separator />
                </>
              );
            })}
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Home;
