import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

const HeaderSubNavBar = () => {
	return (
		<NavigationMenu className="bg-transparent hover:bg-transparent group-data-[state=open]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent focus:bg-transparent data-[state=open]:focus:bg-transparent">
			<NavigationMenuList className="bg-transparent hover:bg-transparent group-data-[state=open]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent focus:bg-transparent data-[state=open]:focus:bg-transparent">
				<NavigationMenuItem className="data-[state=open]:hover:text-yellow-500 hover:text-yellow-500 bg-transparent hover:bg-transparent group-data-[state=open]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent focus:bg-transparent data-[state=open]:focus:bg-transparent">
					<NavigationMenuTrigger className=" data-[state=open]:hover:text-yellow-500 cursor-pointer hover:text-yellow-500 bg-transparent hover:bg-transparent group-data-[state=open]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent focus:bg-transparent data-[state=open]:focus:bg-transparent">
						SOBRE
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<NavigationMenuLink>
							Link
						</NavigationMenuLink>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem className="data-[state=open]:hover:text-yellow-500 hover:text-yellow-500 bg-transparent hover:bg-transparent group-data-[state=open]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent focus:bg-transparent data-[state=open]:focus:bg-transparent">
					<NavigationMenuTrigger className="data-[state=open]:hover:text-yellow-500 cursor-pointer hover:text-yellow-500 bg-transparent hover:bg-transparent group-data-[state=open]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent focus:bg-transparent data-[state=open]:focus:bg-transparent">
						CONTATO
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<NavigationMenuLink>
							Link
						</NavigationMenuLink>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};
export default HeaderSubNavBar;
