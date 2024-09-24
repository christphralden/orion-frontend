import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Separator } from "@components/ui/separator";
import MiniForumTab from "src/modules/forum/components/mini-forum-tab";
import ActiveJobTabs from "src/modules/jobs/components/active-jobs-tab";


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
  {
    type: "Casemaking",
    name: "Computational Cooking",
    subco: "WB23-1",
    participantCount: 12,
    lastMessage: {
      sender: "AL23-2",
      message: "Ko, boleh liat ini gimana cara nilai nya ga",
      time: "23:22",
    },
  },
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
];

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
          <CardContent className="p-0">

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
            {fakeForumData.map((data, i) => {
              return (
                <>
                  <MiniForumTab key={data.name} {...data} />
                  <Separator key={i} />
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
