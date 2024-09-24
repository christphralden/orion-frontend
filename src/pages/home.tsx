import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Separator } from "@components/ui/separator";

import { fakeForumData } from "@forum/constants/forum-faker.constant";
import MiniForumTab from "src/modules/forum/components/mini-forum-tab";
import ActiveJobTabs from "src/modules/jobs/components/active-jobs-tab";

const Home = () => {
  return (
    <div className="w-full h-full items-center flex flex-col mt-3">
      <section className="flex w-full gap-8 h-full">
        <Card className="w-[65%] h-[90%]">
          <CardHeader>
            <CardTitle>Active Jobs</CardTitle>
            <CardDescription>Today's workload</CardDescription>
          </CardHeader>
          <Separator className="" />
          <CardContent className="p-6">
            <ActiveJobTabs />
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
                  <MiniForumTab {...data} className="p-6 px-8 " />
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
