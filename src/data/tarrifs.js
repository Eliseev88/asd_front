export const TARIFF_OBJ = {
	DE1: true,
	DE2: true,
	DE3: true,
	DE4: true,
	DE5: true,
	Gbps1: true,
	Gbps10: true,
	Gbps25: true,
	Gbps40: true,
	Gbps100: true
}

export const VIRTUAL = {
	DE1: {
		name: 'DE1',
		class: 'tariffs__name--var1',
		one: '4',
		three: {
			old: '12',
			new: '11,4'
		},
		six: {
			old: '24',
			new: '21,6'
		},
		twelve: {
			old: '48',
			new: '38,4'
		},
		discount: '3,2'
	},
	DE2: {
		name: 'DE2',
		class: 'tariffs__name--var2',
		one: '8',
		three: {
			old: '24',
			new: '22,8'
		},
		six: {
			old: '48',
			new: '43,2'
		},
		twelve: {
			old: '96',
			new: '76,8'
		},
		discount: '6,4'
	},
	DE3: {
		name: 'DE3',
		class: 'tariffs__name--var3',
		one: '16',
		three: {
			old: '48',
			new: '45,6'
		},
		six: {
			old: '96',
			new: '86,4'
		},
		twelve: {
			old: '192',
			new: '153,6'
		},
		discount: '12,8'
	},
	DE4: {
		name: 'DE4',
		class: 'tariffs__name--var4',
		one: '32',
		three: {
			old: '96',
			new: '91,2'
		},
		six: {
			old: '192',
			new: '172,8'
		},
		twelve: {
			old: '384',
			new: '307,2'
		},
		discount: '25,6'
	},
	DE5: {
		name: 'DE5',
		class: 'tariffs__name--var5',
		one: '64',
		three: {
			old: '192',
			new: '182,4'
		},
		six: {
			old: '384',
			new: '345,6'
		},
		twelve: {
			old: '768',
			new: '614,4'
		},
		discount: '51,2'
	},
	IND: {
		name: 'Individual',
		class: 'tariffs__name--ind'
	}
}

export const DEDICATED = {
	Gbps1: {
		name: '1 Gbps',
		class: 'tariffs__name--var1',
		one: '500',
		three: {
			old: '1500',
			new: '1425'
		},
		six: {
			old: '3000',
			new: '2700'
		},
		twelve: {
			old: '6000',
			new: '4800'
		},
		discount: '400'
	},
	Gbps10: {
		name: '10 Gbps',
		class: 'tariffs__name--var2',
		one: '2000',
		three: {
			old: '6000',
			new: '5700'
		},
		six: {
			old: '12000',
			new: '10800'
		},
		twelve: {
			old: '24000',
			new: '19200'
		},
		discount: '1600'
	},
	Gbps25: {
		name: '25 Gbps',
		class: 'tariffs__name--var3',
		one: '3750',
		three: {
			old: '11250',
			new: '10687'
		},
		six: {
			old: '22500',
			new: '20250'
		},
		twelve: {
			old: '45000',
			new: '36000'
		},
		discount: '3000'
	},
	Gbps40: {
		name: '40 Gbps',
		class: 'tariffs__name--var4',
		one: '5000',
		three: {
			old: '15000',
			new: '14250'
		},
		six: {
			old: '30000',
			new: '27000'
		},
		twelve: {
			old: '60000',
			new: '48000'
		},
		discount: '4000'
	},
	Gbps100: {
		name: '100 Gbps',
		class: 'tariffs__name--var5',
		one: '10000',
		three: {
			old: '30000',
			new: '28500'
		},
		six: {
			old: '60000',
			new: '54000'
		},
		twelve: {
			old: '120000',
			new: '96000'
		},
		discount: '8000'
	},
	IND: {
		name: 'Individual',
		class: 'tariffs__name--ind'
	}
}

export const TARIFF_LINKS = {
	DE1_1: 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D12%26period%3D1%26project%3D2',
	DE1_3: 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D12%26period%3D3%26project%3D2',
	DE1_6: 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D12%26period%3D6%26project%3D2',
	DE1_12: 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D12%26period%3D12%26project%3D2',

	DE2_1: 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D22%26period%3D1%26project%3D2',
	DE2_3: 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D22%26period%3D3%26project%3D2',
	DE2_6: 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D22%26period%3D6%26project%3D2',
	DE2_12: 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D22%26period%3D12%26project%3D2',

	DE3_1: 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D27%26period%3D1%26project%3D2',
	DE3_3: 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D27%26period%3D3%26project%3D2',
	DE3_6: 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D27%26period%3D6%26project%3D2',
	DE3_12: 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D27%26period%3D12%26project%3D2',

	DE4_1: 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D32%26period%3D1%26project%3D2',
	DE4_3: 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D32%26period%3D3%26project%3D2',
	DE4_6: 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D32%26period%3D6%26project%3D2',
	DE4_12: 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D32%26period%3D12%26project%3D2',

	DE5_1: 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D37%26period%3D1%26project%3D2',
	DE5_3: 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D37%26period%3D3%26project%3D2',
	DE5_6: 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D37%26period%3D6%26project%3D2',
	DE5_12: 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D37%26period%3D12%26project%3D2',
}