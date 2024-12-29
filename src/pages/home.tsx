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
import ActiveJobsTable from "@job/components/active-jobs-table";

const Home = () => {
  return (
    <section className="flex w-full justify-between gap-6 xl:gap-12 h-full flex-col xl:flex-row relative">
      <Card className="h-full w-full xl:w-[65%] flex flex-col flex-1">
        <CardHeader>
          <CardTitle>Active Jobs</CardTitle>
          <CardDescription>Today's workload</CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="p-0 w-full flex-grow overflow-y-auto h-1 min-h-[75vh]">
          <ActiveJobsTable />
        </CardContent>
      </Card>
      <Card className="h-fit w-full xl:w-[35%] xl:max-w-[750px] flex-shrink ">
        <CardHeader>
          <CardTitle>Forums</CardTitle>
          <CardDescription>7 currently active forums</CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="p-0 h-full min-h-[75vh] xl:min-h-[50vh] xl:h-[50vh] flex flex-col overflow-y-auto">
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
