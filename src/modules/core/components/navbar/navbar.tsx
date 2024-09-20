// import { Separator } from "@components/ui/separator";
import { useAuthStore } from "@authentication/store/auth-store";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "../ui/dropdown-menu"
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";
// import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "@components/ui/button";

const NavBar = () => {
  const { user } = useAuthStore(); // TODO: middleware

  return (
    <div className="cursor-pointer mb-6 flex items-center w-[1000px] justify-between">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Case Making</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Correction
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{user?.username}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex p-2">
                <Button variant="ghost" className="">
                  Sign Out
                </Button>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
export default NavBar;
