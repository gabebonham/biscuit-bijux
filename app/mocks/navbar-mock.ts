export type NavBarItem = {
	id: string;
	name: string;
	link: string;
};

export const navbarItems = [
	{
		id: '1',
		name: 'brincos',
		link: '/produtos/brincos',
	},
	{ id: '2', name: 'colares', link: '/produtos/colares' },
	{ id: '3', name: 'pulseiras', link: '/produtos/pulseiras' },
	{ id: '4', name: 'aneis', link: '/produtos/aneis' },
	{ id: '5', name: 'provador', link: '/produtos/provador' },
] as NavBarItem[];
