import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Input } from "@components/ui/input";

const Landing = () => {
  return (
    <div className="w-full h-screen bg-[#fafafa] flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Welcome to Orion.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input id="name" placeholder="Username" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input id="name" placeholder="Password" />
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

export default Landing;
