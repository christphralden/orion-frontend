import { lazy, Suspense } from "react";
import BinusRibbon from "/assets/binus/binus-ribbon.png";
// import SLCLogo from "/assets/binus/binus-slc.svg";
import SLCLogoDark from "/assets/binus/binus-logo-dark.png";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@components/ui/card";
import { Input } from "@components/ui/input";
import GradientBackground from "@components/backgrounds/gradient-background";
import { useAuthLogin } from "@authentication/hooks/use-auth-login";
import { useNavigate, useSearchParams } from "react-router-dom";
const ConstellationBackground = lazy(
  () => import("@components/backgrounds/constellation-background"),
);

const COPYRIGHT = "Copyright © 2024 - Orion, LCAS - Binus University";

const Landing = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");

  const {
    handleLogin,
    isPending: loginLoading,
    isSuccess: loginSuccess,
  } = useAuthLogin();

  if (loginSuccess) {
    navigate("/");
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    handleLogin({ username, password });
  };

  return (
    <div className="relative w-full h-full">
      <GradientBackground className="fixed -z-10" />

      <Suspense fallback={null}>
        <ConstellationBackground mode={mode} />
      </Suspense>

      <section className="w-full h-screen flex justify-center items-center z-10 ">
        <Card className="w-[350px] z-[100] bg-[#0a0a0a90] glass border-[1px] border-gray-800 pb-4">
          <CardHeader className="py-0 mt-[-1px] px-2 pb-8 flex flex-row ">
            <div className="w-fit">
              <img
                draggable={false}
                src={BinusRibbon}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-40 scale-[0.8]">
              <img
                draggable={false}
                src={SLCLogoDark}
                className="object-cover w-full h-full"
              />
            </div>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input
                    id="username"
                    name="username"
                    placeholder="Username"
                    required
                    className="bg-[#0a0a0a20] glass border-[1px] border-gray-800 placeholder-white text-white"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    required
                    className="bg-[#0a0a0a20] glass border-[1px] border-gray-800 placeholder-white text-white"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between flex-col gap-4">
              <Button
                type="submit"
                disabled={loginLoading}
                className="w-full bg-blue"
              >
                Login
              </Button>
            </CardFooter>
          </form>
        </Card>
      </section>

      <section className="absolute bottom-0 w-full flex justify-center items-center p-4 px-12">
        <p className="text-white text-center text-sm">{COPYRIGHT}</p>
      </section>
    </div>
  );
};

export default Landing;
