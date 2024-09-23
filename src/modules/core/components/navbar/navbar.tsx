import { useUser } from "@authentication/store/auth-store";

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
import { Button } from "@components/ui/button";
import { useAuthLogout } from "@authentication/hooks/use-auth-logout";

const NavBar = () => {
  const user = useUser();
  const { handleLogout, isPending: logoutPending } = useAuthLogout();

  return (
    <div className="cursor-pointer mb-6 flex items-center w-full justify-between">
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
                <Button
                  disabled={logoutPending}
                  variant="ghost"
                  className=""
                  onClick={handleLogout}
                >
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
