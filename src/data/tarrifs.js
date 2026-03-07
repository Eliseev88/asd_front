export const TARIFF_OBJ = {
	DE1: true,
	DE2: true,
	DE3: true,
	DE4: true,
	DE5: true,
	DE_EP1: true,
	DE_EP2: true,
	DE_EP3: true,
	DE_EP4: true,
	DE_EP5: true,
	DE_RX1: true,
	DE_RX2: true,
	DE_RX3: true,
	DE_RX4: true,
	DE_RX5: true,
	FN_EP1: true,
	FN_EP2: true,
	FN_EP3: true,
	FN_EP4: true,
	FN_EP5: true
}

export const GERMANY = {
	EPYC: {
		DE1: {
			name: 'EP-1',
			full_name: '[DE] EP-1_',
			code: 'DE1',
			class: 'tariffs__name--var1',
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
		DE2: {
			name: 'EP-2',
			full_name: '[DE] EP-2_',
			code: 'DE2',
			class: 'tariffs__name--var2',
			one: '16',
			three: {
				old: '48',
				new: '45,6'
			},
			six: {
				old: '96',
				new: '85,4'
			},
			twelve: {
				old: '192',
				new: '153,6'
			},
			discount: '12,8'
		},
		DE3: {
			name: 'EP-3',
			full_name: '[DE] EP-3_',
			code: 'DE3',
			class: 'tariffs__name--var3',
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
		DE4: {
			name: 'EP-4',
			full_name: '[DE] EP-4_',
			code: 'DE4',
			class: 'tariffs__name--var4',
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
		DE5: {
			name: 'EP-5',
			full_name: '[DE] EP-5_',
			code: 'DE5',
			class: 'tariffs__name--var5',
			one: '128',
			three: {
				old: '384',
				new: '364,8'
			},
			six: {
				old: '768',
				new: '691,2'
			},
			twelve: {
				old: '1536',
				new: '1229'
			},
			discount: '102,4'
		},
		IND: {
			name: 'Individual',
			class: 'tariffs__name--ind'
		}
	},
	Ryzen: {
		DE1: {
			name: 'RX-1',
			full_name: '[DE] RX-1_',
			code: 'DE1',
			class: 'tariffs__name--var1',
			one: '6',
			three: {
				old: '18',
				new: '17,1'
			},
			six: {
				old: '36',
				new: '32,4'
			},
			twelve: {
				old: '72',
				new: '57,6'
			},
			discount: '4,8'
		},
		DE2: {
			name: 'RX-2',
			full_name: '[DE] RX-2_',
			code: 'DE2',
			class: 'tariffs__name--var2',
			one: '12',
			three: {
				old: '36',
				new: '34,2'
			},
			six: {
				old: '72',
				new: '64,8'
			},
			twelve: {
				old: '144',
				new: '115,2'
			},
			discount: '9,6'
		},
		DE3: {
			name: 'RX-3',
			full_name: '[DE] RX-3_',
			code: 'DE3',
			class: 'tariffs__name--var3',
			one: '24',
			three: {
				old: '72',
				new: '68,4'
			},
			six: {
				old: '144',
				new: '129,6'
			},
			twelve: {
				old: '288',
				new: '230,4'
			},
			discount: '19,2'
		},
		DE4: {
			name: 'RX-4',
			full_name: '[DE] RX-4_',
			code: 'DE4',
			class: 'tariffs__name--var4',
			one: '48',
			three: {
				old: '144',
				new: '136,8'
			},
			six: {
				old: '288',
				new: '259,2'
			},
			twelve: {
				old: '576',
				new: '460,8'
			},
			discount: '38,4'
		},
		DE5: {
			name: 'RX-5',
			full_name: '[DE] RX-5_',
			code: 'DE5',
			class: 'tariffs__name--var5',
			one: '96',
			three: {
				old: '288',
				new: '273,6'
			},
			six: {
				old: '576',
				new: '518,4'
			},
			twelve: {
				old: '1152',
				new: '921,6'
			},
			discount: '76,8'
		},
		IND: {
			name: 'Individual',
			class: 'tariffs__name--ind'
		}
	},
	IND: {
		name: 'Individual',
		class: 'tariffs__name--ind'
	}
}

export const FINLAND = {
	'[FI] EP-1': {
		name: 'EP-1',
		full_name: '[FI] EP-1_',
		class: 'tariffs__name--var1',
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
	'[FI] EP-2': {
		name: 'EP-2',
		full_name: '[FI] EP-2_',
		class: 'tariffs__name--var2',
		one: '16',
		three: {
			old: '48',
			new: '45,6'
		},
		six: {
			old: '96',
			new: '85,4'
		},
		twelve: {
			old: '192',
			new: '153,6'
		},
		discount: '12,8'
	},
	'[FI] EP-3': {
		name: 'EP-3',
		full_name: '[FI] EP-3_',
		class: 'tariffs__name--var3',
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
	'[FI] EP-4': {
		name: 'EP-4',
		full_name: '[FI] EP-4_',
		class: 'tariffs__name--var4',
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
	'[FI] EP-5': {
		name: 'EP-5',
		full_name: '[FI] EP-5_',
		class: 'tariffs__name--var5',
		one: '128',
		three: {
			old: '384',
			new: '364,8'
		},
		six: {
			old: '768',
			new: '691,2'
		},
		twelve: {
			old: '1536',
			new: '1229'
		},
		discount: '102,4'
	},
	IND: {
		name: 'Individual',
		class: 'tariffs__name--_1ind'
	}
}

export const TARIFF_LINKS = {
	'[DE] RX-1_1': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D12%26period%3D1%26project%3D2',
	'[DE] RX-1_3': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D12%26period%3D3%26project%3D2',
	'[DE] RX-1_6': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D12%26period%3D6%26project%3D2',
	'[DE] RX-1_12': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D12%26period%3D12%26project%3D2',

	'[DE] RX-2_1': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D22%26period%3D1%26project%3D2',
	'[DE] RX-2_3': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D22%26period%3D3%26project%3D2',
	'[DE] RX-2_6': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D22%26period%3D6%26project%3D2',
	'[DE] RX-2_12': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D22%26period%3D12%26project%3D2',

	'[DE] RX-3_1': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D27%26period%3D1%26project%3D2',
	'[DE] RX-3_3': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D27%26period%3D3%26project%3D2',
	'[DE] RX-3_6': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D27%26period%3D6%26project%3D2',
	'[DE] RX-3_12': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D27%26period%3D12%26project%3D2',

	'[DE] RX-4_1': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D32%26period%3D1%26project%3D2',
	'[DE] RX-4_3': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D32%26period%3D3%26project%3D2',
	'[DE] RX-4_6': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D32%26period%3D6%26project%3D2',
	'[DE] RX-4_12': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D32%26period%3D12%26project%3D2',

	'[DE] RX-5_1': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D37%26period%3D1%26project%3D2',
	'[DE] RX-5_3': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D37%26period%3D3%26project%3D2',
	'[DE] RX-5_6': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D37%26period%3D6%26project%3D2',
	'[DE] RX-5_12': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D37%26period%3D12%26project%3D2',



	'[DE] EP-1_1': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D117%26period%3D1%26project%3D2',
	'[DE] EP-1_3': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D117%26period%3D3%26project%3D2',
	'[DE] EP-1_6': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D117%26period%3D6%26project%3D2',
	'[DE] EP-1_12': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D117%26period%3D12%26project%3D2',

	'[DE] EP-2_1': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D123%26period%3D1%26project%3D2',
	'[DE] EP-2_3': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D123%26period%3D3%26project%3D2',
	'[DE] EP-2_6': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D123%26period%3D6%26project%3D2',
	'[DE] EP-2_12': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D123%26period%3D12%26project%3D2',

	'[DE] EP-3_1': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D129%26period%3D1%26project%3D2',
	'[DE] EP-3_3': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D129%26period%3D3%26project%3D2',
	'[DE] EP-3_6': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D129%26period%3D6%26project%3D2',
	'[DE] EP-3_12': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D129%26period%3D12%26project%3D2',

	'[DE] EP-4_1': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D135%26period%3D1%26project%3D2',
	'[DE] EP-4_3': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D135%26period%3D3%26project%3D2',
	'[DE] EP-4_6': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D135%26period%3D6%26project%3D2',
	'[DE] EP-4_12': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D135%26period%3D12%26project%3D2',

	'[DE] EP-5_1': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D141%26period%3D1%26project%3D2',
	'[DE] EP-5_3': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D141%26period%3D3%26project%3D2',
	'[DE] EP-5_6': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D141%26period%3D6%26project%3D2',
	'[DE] EP-5_12': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D141%26period%3D12%26project%3D2',



	'[FI] EP-1_1': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D87%26period%3D1%26project%3D2',
	'[FI] EP-1_3': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D87%26period%3D3%26project%3D2',
	'[FI] EP-1_6': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D87%26period%3D6%26project%3D2',
	'[FI] EP-1_12': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D87%26period%3D12%26project%3D2',

	'[FI] EP-2_1': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D93%26period%3D1%26project%3D2',
	'[FI] EP-2_3':'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D93%26period%3D3%26project%3D2',
	'[FI] EP-2_6':'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D93%26period%3D6%26project%3D2',
	'[FI] EP-2_12': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D93%26period%3D12%26project%3D2',

	'[FI] EP-3_1': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D99%26period%3D1%26project%3D2',
	'[FI] EP-3_3': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D99%26period%3D3%26project%3D2',
	'[FI] EP-3_6': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D99%26period%3D6%26project%3D2',
	'[FI] EP-3_12': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D99%26period%3D12%26project%3D2',

	'[FI] EP-4_1': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D105%26period%3D1%26project%3D2',
	'[FI] EP-4_3': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D105%26period%3D3%26project%3D2',
	'[FI] EP-4_6': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D105%26period%3D6%26project%3D2',
	'[FI] EP-4_12': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D105%26period%3D12%26project%3D2',

	'[FI] EP-5_1': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D111%26period%3D1%26project%3D2',
	'[FI] EP-5_3': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D111%26period%3D3%26project%3D2',
	'[FI] EP-5_6': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D111%26period%3D6%26project%3D2',
	'[FI] EP-5_12': 'https://my.asdhere.net?func=register&redirect=startpage%3Dvds%26startform%3Dvds%252Eorder%252Eparam%26pricelist%3D111%26period%3D12%26project%3D2',
}
