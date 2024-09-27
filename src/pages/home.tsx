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
import ActiveJobTabs from "@job/components/active-jobs-tab";

const Home = () => {
  return (
    <div className="w-full h-full items-center flex flex-col ">
      <section className="flex w-full min-h-full gap-8 h-full flex-col xl:flex-row ">
        <Card className="w-full xl:w-[65%] h-fit xl:h-full flex flex-col ">
          <CardHeader>
            <CardTitle>Active Jobs</CardTitle>
            <CardDescription>Today's workload</CardDescription>
          </CardHeader>
          <Separator />
          <CardContent className="p-0 ">
            <ActiveJobTabs className="h-fit max-h-[600px] xl:h-full" />
          </CardContent>
        </Card>

        <Card className="h-fit">
          <CardHeader>
            <CardTitle>
              <div className="flex justify-between">
                <h2>Forums</h2>
              </div>
            </CardTitle>
            <CardDescription>
              {fakeForumData.length}&nbsp;currently active forums
            </CardDescription>
          </CardHeader>
          <Separator />
          <CardContent className="flex flex-col xl:max-h-[500px] max-h-[600px] cursor-pointer p-0 overflow-scroll">
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
