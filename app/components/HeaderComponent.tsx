'use client';

import {
	CircleUserRound,
	LucideSearch,
	Search,
	ShoppingCart,
	X,
} from 'lucide-react';
import Link from 'next/link';
import { NavBarItem } from '../mocks/navbar-mock';
import HeaderSubNavBar from './HeaderSubNavBar';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import logo from '@/public/logo.png';
import Image from 'next/image';
const HeaderComponent = ({ navItems }: { navItems: NavBarItem[] }) => {
	return (
		<header className="bg-gradient-to-r from-pink-300 to-pink-700 px-4 py-2 text-white ">
			<div className="flex justify-between w-full">
				<div className="flex items-end w-full">
					<div>
						<Image
							alt=""
							src={logo}
							width={200}
							height={200}
						/>
					</div>
					<div className="pb-4">
						<HeaderSubNavBar />
					</div>
					<div className="w-full flex justify-end gap-x-4 pb-4">
						<div className="bg-white h-6 flex items-center rounded-r-2xl rounded-l-2xl w-72">
							<Input className=" h-6 rounded-r-2xl rounded-l-2xl shadow-none border-0 focus-visible:border-0 focus-visible:ring-0 focus-visible:outline-0" />
							<LucideSearch className="text-white bg-black rounded-full" />
						</div>
						<ShoppingCart />
						<CircleUserRound />
					</div>
				</div>
			</div>
			<Separator className="bg-yellow-200" />
			<div className="flex justify-center gap-x-24 py-4 text-2xl ">
				{navItems.map((n: NavBarItem) => (
					<Link
						key={n.id}
						href={n.link}
						className="box-border border-b-1 hover:text-yellow-400 transition-all duration-200   border-b-transparent hover:border-b-yellow-400"
					>
						{n.name}
					</Link>
				))}
			</div>
		</header>
	);
};

export default HeaderComponent;
