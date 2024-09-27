import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Separator } from "@components/ui/separator";
import { fakeForumData } from "@forum/constants/forum-faker.constant";
import MiniForumTab from "@forum/components/mini-forum-tab";
import ActiveJobTabs from "@job/components/active-jobs-tabs";

const Home = () => {
  return (
    <section className="flex w-full justify-between gap-10 h-full flex-col xl:flex-row relative">
      <Card className="h-[90%] w-full xl:w-[65%] flex flex-col">
        <CardHeader>
          <CardTitle>Active Jobs</CardTitle>
          <CardDescription>Today's workload</CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="p-0 w-full flex-grow overflow-y-auto">
          <ActiveJobTabs />
        </CardContent>
      </Card>
      <Card className="h-fit w-full xl:w-[35%] xl:max-w-[750px] flex-shrink ">
        <CardHeader>
          <CardTitle>Forums</CardTitle>
          <CardDescription>7 currently active forums</CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="p-0 h-full h-[400px] flex flex-col overflow-y-auto">
          {fakeForumData.map((forum, idx) => {
            return (
              <div key={idx}>
                <MiniForumTab className="px-6 py-4 " {...forum} />
                <Separator />
              </div>
            );
          })}
        </CardContent>
      </Card>
    </section>
  );
};

export default Home;
