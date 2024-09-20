import NavBar from "@components/navbar/navbar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@components/ui/card";
import { Separator } from "@components/ui/separator"

const Home = () => {
  return (
    <div className="w-full h-screen justify-center items-center flex flex-col">
      <NavBar />

      <Card className="w-[1000px]">
        <CardHeader>
          <CardTitle>Active Jobs</CardTitle>
          <CardDescription>Today's workload</CardDescription>
        </CardHeader>
        <Separator className="mb-5"/>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              asdasa
            </div>
            <div className="flex flex-col space-y-1.5">
              asdas
            </div>
          </div>
        </CardContent>
        {/* <CardFooter className="flex justify-between">
          
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default Home;
