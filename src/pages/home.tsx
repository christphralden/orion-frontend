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

const Home = () => {
  return (
    <div className="w-full h-full items-center flex flex-col mt-3">
      <div className="flex justify-between w-[1000px]">
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

      <Card className="w-[1000px]">
        <CardHeader>
          <CardTitle>Active Jobs</CardTitle>
          <CardDescription>Today's workload</CardDescription>
        </CardHeader>
        <Separator className="mb-5" />
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <Button variant="ghost" className="flex h-10 items-center w-[100%]">
              <div className="w-[10%]">Type</div>
              <Separator orientation="vertical" />
              <div className="w-[40%]">Matkul</div>
              <Separator orientation="vertical" />
              <div className="w-[7.5%]">Room</div>
              <Separator orientation="vertical" />
              <div className="w-[7.5%]">Class</div>
              <Separator orientation="vertical" />
              <div className="w-[15%]">Start Time</div>
              <Separator orientation="vertical" />
              <div className="w-[15%]">End Time</div>
              <Separator orientation="vertical" />
              <div className="w-[10%]">Status</div>
            </Button>
            <Button variant="ghost" className="flex h-10 items-center w-[100%]">
              <div className="w-[10%]">Teaching</div>
              <Separator orientation="vertical" />
              <div className="w-[40%]">LANG6969001 - Racism Neural Network</div>
              <Separator orientation="vertical" />
              <div className="w-[7.5%]">A1501</div>
              <Separator orientation="vertical" />
              <div className="w-[7.5%]">JE01</div>
              <Separator orientation="vertical" />
              <div className="w-[15%]">07:20</div>
              <Separator orientation="vertical" />
              <div className="w-[15%]">19:20</div>
              <Separator orientation="vertical" />
              <div className="w-[10%]">Ongoing</div>
            </Button>
          </div>
        </CardContent>
        {/* <CardFooter className="flex justify-between">
          
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default Home;
