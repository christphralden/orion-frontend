import { Separator } from "@radix-ui/react-separator";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "../ui/navigation-menu"
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "../ui/dropdown-menu"
import { navigationMenuTriggerStyle } from "../ui/navigation-menu"
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "@components/ui/button";

const NavBar = () => {
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
                        <NavigationMenuTrigger>TY23-1</NavigationMenuTrigger>
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