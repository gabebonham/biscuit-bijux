import { Product, productsMock } from '@/app/mocks/produtos-mock';
import { Button } from '@/components/ui/button';
import { Params } from 'next/dist/server/request/params';
import Image from 'next/image';
type Props = {
	params: { id: string };
};
export default function ProductIdPage({ params }: Props) {
	const id = params.id;
	const product = productsMock[
		id as keyof typeof productsMock
	] as Product;
	return (
		<div className="w-full flex justify-center gap-x-8 pt-8">
			<Image
				alt=""
				className="rounded-2xl shadow-lg"
				src={product.image}
				width={400}
				height={400}
			/>
			<div className="space-y-4">
				<div className="text-5xl">{product.name}</div>
				<div className="text-3xl">
					R${product.price}
				</div>
				<div className="w-96">
					{product.description}
				</div>
				<Button className="w-full rounded-xs bg-purple-500 hover:bg-pink-400 hover:text-purple-600 cursor-pointer">
					Comprar
				</Button>
			</div>
		</div>
	);
}
