import HomeItemComponent from '@/app/components/HomeItemComponent';
import { Product, productsMock } from '@/app/mocks/produtos-mock';
import highlightImage from '@/public/products/highlight.png';
import { Divide } from 'lucide-react';
import Image from 'next/image';
export default function HomePage() {
	const products = productsMock;
	return (
		<div className="bg-purple-400/50 flex flex-col items-center gap-y-8">
			<div className="flex justify-center">
				<Image alt="" src={highlightImage} />
			</div>
			<div className="grid grid-cols-4 gap-x-24 justify-center gap-y-8">
				{products.map((p: Product) => (
					<HomeItemComponent
						key={p.id}
						item={p}
					/>
				))}
			</div>
		</div>
	);
}
