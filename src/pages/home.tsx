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
import { FaUserGroup, FaMessage } from "react-icons/fa6";

import { Button } from "@components/ui/button";

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
          <Separator className="mb-5" />
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
          <Separator className="mb-5" />
          <CardContent className="flex flex-col cursor-pointer">
            <div className="w-full h-fit p-4 rounded-md flex-col gap-2 flex hover:bg-gray-100">
              <section className="w-full flex justify-between items-center">
                <div className="rounded-md border-2 border-gray-300 px-2 flex gap-2 justify-start items-center w-fit">
                  <div className="w-2 h-2 rounded-full bg-blue"></div>
                  <p className="text-sm">Correction</p>
                </div>
                <div className="flex gap-4 text-gray-500 text-sm ">
                  <p>WB23-1</p>
                  <div className="w-fit flex gap-1 justify-center items-center">
                    <FaMessage />
                    <p>23</p>
                  </div>
                </div>
              </section>
              <section>
                <h1 className="text-base font-semibold">
                  Racism Neural Network
                </h1>
                <div className="flex gap-2 text-sm text-gray-500">
                  <p className="text-nowrap ">AL23-2:</p>
                  <p className="truncate">
                    Ko ini gimana anjg susah banget gw gangerti bangsat anjg lah
                    tolooooong
                  </p>
                </div>
              </section>
            </div>

            <Separator />

            <div className="w-full h-fit p-4 rounded-md flex-col gap-2 flex hover:bg-gray-100">
              <section className="w-full flex justify-between items-center">
                <div className="rounded-md border-2 border-gray-300 px-2 flex gap-2 justify-start items-center w-fit">
                  <div className="w-2 h-2 rounded-full bg-[#ff000080]"></div>
                  <p className="text-sm">TPA</p>
                </div>
                <div className="flex gap-4 text-gray-500 text-sm ">
                  <p>EF23-2</p>
                  <div className="w-fit flex gap-1 justify-center items-center">
                    <FaMessage />
                    <p>23</p>
                  </div>
                </div>
              </section>
              <section>
                <h1 className="text-base font-semibold">TPA Network</h1>
                <div className="flex gap-2 text-sm text-gray-500">
                  <p className="text-nowrap ">EF23-2:</p>
                  <p className="truncate">
                    Untuk revisi 1 kalian gaada yang lulus ya{" "}
                  </p>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Home;
