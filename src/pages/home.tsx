import { Button } from "@components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@components/ui/card";

const Home = () => {
  return (
    <div className="w-full h-screen justify-center items-center flex flex-col">
      <Card className="w-[1000px]">
        <CardHeader>
          <CardTitle>Active Jobs</CardTitle>
          <CardDescription>Today's workload</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                
              </div>
              <div className="flex flex-col space-y-1.5">
                
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="w-full">Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Home;
