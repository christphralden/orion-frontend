import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Separator } from "@components/ui/separator";

import { Button } from "@components/ui/button";
import MiniForumTab from "@forum/components/mini-forum-tab";

import { fakeForumData } from "@forum/constants/forum-faker";

const Home = () => {
  return (
    <div className="w-full h-full items-center flex flex-col mt-3">
      <section className="flex w-full gap-8 h-full">
        <Card className="w-[65%] h-[90%]">
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
                className="flex h-10 items-center w-[100%] font-normal"
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

        <Card className="min-w-[500px] flex-grow h-fit overflow-x-hidden">
          <CardHeader>
            <CardTitle>
              <div className="flex justify-between">
                <h1>Forums</h1>
              </div>
            </CardTitle>
            <CardDescription>
              {fakeForumData.length}&nbsp;currently active forums
            </CardDescription>
          </CardHeader>
          <Separator />
          <CardContent className="flex flex-col cursor-pointer p-0 h-[50%] max-h-[500px] overflow-scroll">
            {fakeForumData.map((data) => {
              return (
                <div key={data.id}>
                  <MiniForumTab {...data} />
                  <Separator />
                </div>
              );
            })}
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Home;
