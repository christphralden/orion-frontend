import BinusRibbon from "/assets/binus/binus-ribbon.png";
import SLCLogo from "/assets/binus/binus-slc.svg";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@components/ui/card";
import { Input } from "@components/ui/input";
import GradientBackground from "@components/backgrounds/gradient-background";

const COPYRIGHT = "Copyright © 2024 - Orion, LCAS - Binus University";

const Landing = () => {
  return (
    <div className="relative w-full h-screen">
      <GradientBackground className="absolute -z-10" />

      <section className="w-full h-screen flex justify-center items-center z-10">
        <Card className="w-[350px]">
          <CardHeader className="py-0 mt-[-1px] px-2 pb-8 flex flex-row">
            <div className="w-fit">
              <img src={BinusRibbon} className="object-cover w-full h-full" />
            </div>
            <div className="w-40 scale-[0.8]">
              <img src={SLCLogo} className="object-cover w-full h-full" />
            </div>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input id="name" placeholder="Username" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input
                    id="password"
                    placeholder="Password"
                    type="password"
                    autoComplete="on"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="w-full bg-blue">Login</Button>
          </CardFooter>
        </Card>
      </section>

      <section className="absolute bottom-0 w-full flex justify-center items-center p-4 px-12">
        <p className="text-white text-center">{COPYRIGHT}</p>
      </section>
    </div>
  );
};

export default Landing;
