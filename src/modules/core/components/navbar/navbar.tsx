import { useUser } from "@authentication/store/auth-store";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Button } from "@components/ui/button";
import { useAuthLogout } from "@authentication/hooks/use-auth-logout";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const primaryMenuItems = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Correction",
    subMenu: [
      {
        title: "My Correction List",
        description: "View a list of active corrections",
        link: "/correction/list",
      },
      {
        title: "Correction Groups",
        description: "View assigned correction groups",
        link: "/correction/groups",
      },
    ],
  },
  {
    label: "Case Making",
    subMenu: [
      {
        title: "Case Making List",
        description: "View a list of case making",
        link: "/case-make/list",
      },
      {
        title: "Case Making Groups",
        description: "View assigend case making groups",
        link: "/case-make/groups",
      },
    ],
  },
  {
    label: "RIG",
    subMenu: [
      {
        title: "RIG Groups",
        description: "View listed RIG groups",
        link: "/rig/groups",
      },
      {
        title: "RIG Submission",
        description: "Submit RIG case",
        link: "/rig/submission",
      },
    ],
  },
];

const NavBar = () => {
  const user = useUser();
  const { handleLogout, isPending: logoutPending } = useAuthLogout();

  return (
    <div className="cursor-pointer flex items-center w-full justify-between py-4 lg:py-8 ">
      <NavigationMenu>
        <NavigationMenuList className="gap-8">
          {primaryMenuItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              {item.subMenu ? (
                <>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent className="relative p-2">
                    <ul className="grid w-[400px] gap-4 md:w-[500px] md:grid-cols-2">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="text-sm hover:bg-accent duration-500 p-4 rounded-sm"
                        >
                          <Link to={subItem.link}>
                            <p className="font-medium">{subItem.title}</p>
                            <p className="text-muted-foreground">
                              {subItem.description}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link to={item.link}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <FaSearch />
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{user?.username}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Button
                disabled={logoutPending}
                variant="ghost"
                className={navigationMenuTriggerStyle()}
                onClick={handleLogout}
              >
                Sign Out
              </Button>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
export default NavBar;
