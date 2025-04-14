import HeaderComponent from '../components/HeaderComponent';
import { navbarItems } from '../mocks/navbar-mock';

export default async function PublicLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const navItems = navbarItems;
	return (
		<div className="bg-purple-400/50">
			<HeaderComponent navItems={navItems} />
			{children}
		</div>
	);
}
