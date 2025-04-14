'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Product } from '../mocks/produtos-mock';
import { useRouter } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import Link from 'next/link';

const HomeItemComponent = ({ item }: { item: Product }) => {
	const router = useRouter();
	return (
		<div className="w-fit">
			<Popover>
				<PopoverTrigger>
					<Image
						width={150}
						height={150}
						alt=""
						className="rounded-xl shadow cursor-pointer"
						src={item.image}
					/>
				</PopoverTrigger>
				<PopoverContent>
					<Link href={item.buyLink}>
						<Image
							width={600}
							height={600}
							alt=""
							className="rounded-xl shadow"
							src={item.image}
						/>
					</Link>
				</PopoverContent>
			</Popover>
			<div>
				<div className="justify-between flex">
					<p>{item.name}</p>
					<p>{item.price}</p>
				</div>
				<Separator />
				<div className="flex justify-end">
					<Button
						className="bg-transparent p-0 text-black cursor-pointer hover:bg-transparent"
						onClick={() =>
							router.push(
								item.tryLink,
							)
						}
					>
						PROVAR
					</Button>
				</div>
				<div>
					<Button
						className="w-full rounded-xs bg-purple-500 hover:bg-pink-400 hover:text-purple-600 cursor-pointer"
						onClick={() =>
							router.push(
								item.buyLink,
							)
						}
					>
						Comprar
					</Button>
				</div>
			</div>
		</div>
	);
};
export default HomeItemComponent;
