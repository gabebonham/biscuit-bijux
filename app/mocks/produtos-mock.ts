export type Product = {
	id: string;
	name: string;
	price: number;
	image: string;
	tryLink: string;
	buyLink: string;
	description: string;
};

export const productsMock = [
	{
		id: '1',
		name: 'Pulseira 1',
		price: 50,
		image: '/products/pulseira1.png',
		tryLink: '',
		buyLink: '/produtos/pulseira/1',
		description:
			'A Vivara utiliza em suas joias prata 925, considerada ideal para utilização na joalheria proporcionando um acabamento de brilho intenso e maior durabilidade. Nessa composição são utilizados 92,5% de prata pura e 7,5% de ligas especiais.',
	},
	{
		id: '2',
		name: 'Pulseira 2',
		price: 50,
		image: '/products/pulseira2.png',
		tryLink: '',
		buyLink: '/produtos/pulseira/2',
		description:
			'A Vivara utiliza em suas joias prata 925, considerada ideal para utilização na joalheria proporcionando um acabamento de brilho intenso e maior durabilidade. Nessa composição são utilizados 92,5% de prata pura e 7,5% de ligas especiais.',
	},
	{
		id: '3',
		name: 'Brinco 3',
		price: 50,
		image: '/products/brinco2.png',
		tryLink: '',
		buyLink: '/produtos/brincos/2',
		description:
			'A Vivara utiliza em suas joias prata 925, considerada ideal para utilização na joalheria proporcionando um acabamento de brilho intenso e maior durabilidade. Nessa composição são utilizados 92,5% de prata pura e 7,5% de ligas especiais.',
	},
	{
		id: '4',
		name: 'Colar 2',
		price: 40,
		image: '/products/colar2.png',
		tryLink: '',
		buyLink: '/produtos/colares/2',
		description:
			'A Vivara utiliza em suas joias prata 925, considerada ideal para utilização na joalheria proporcionando um acabamento de brilho intenso e maior durabilidade. Nessa composição são utilizados 92,5% de prata pura e 7,5% de ligas especiais.',
	},
	{
		id: '5',
		name: 'Brinco 2',
		price: 150,
		image: '/products/brinco1.png',
		tryLink: '',
		buyLink: '/produtos/brincos/1',
		description:
			'A Vivara utiliza em suas joias prata 925, considerada ideal para utilização na joalheria proporcionando um acabamento de brilho intenso e maior durabilidade. Nessa composição são utilizados 92,5% de prata pura e 7,5% de ligas especiais.',
	},
] as Product[];
