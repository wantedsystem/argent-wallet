export const ercTokens = [
	{
		name: "Tether USD",
		contractAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
	},
	{
		name: "DAI",
		contractAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
	},
	{
		name: "BNB",
		contractAddress: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
	},
	{
		name: "BAT",
		contractAddress: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
	},
	{
		name: "MATIC",
		contractAddress: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
	},
];

export const erc20TokenABI = [
	{
		constant: true,
		inputs: [],
		name: "name",
		outputs: [
			{
				name: "",
				type: "string",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{
				name: "_spender",
				type: "address",
			},
			{
				name: "_value",
				type: "uint256",
			},
		],
		name: "approve",
		outputs: [
			{
				name: "",
				type: "bool",
			},
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "totalSupply",
		outputs: [
			{
				name: "",
				type: "uint256",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{
				name: "_from",
				type: "address",
			},
			{
				name: "_to",
				type: "address",
			},
			{
				name: "_value",
				type: "uint256",
			},
		],
		name: "transferFrom",
		outputs: [
			{
				name: "",
				type: "bool",
			},
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "decimals",
		outputs: [
			{
				name: "",
				type: "uint8",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [
			{
				name: "_owner",
				type: "address",
			},
		],
		name: "balanceOf",
		outputs: [
			{
				name: "balance",
				type: "uint256",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "symbol",
		outputs: [
			{
				name: "",
				type: "string",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{
				name: "_to",
				type: "address",
			},
			{
				name: "_value",
				type: "uint256",
			},
		],
		name: "transfer",
		outputs: [
			{
				name: "",
				type: "bool",
			},
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [
			{
				name: "_owner",
				type: "address",
			},
			{
				name: "_spender",
				type: "address",
			},
		],
		name: "allowance",
		outputs: [
			{
				name: "",
				type: "uint256",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		payable: true,
		stateMutability: "payable",
		type: "fallback",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				name: "spender",
				type: "address",
			},
			{
				indexed: false,
				name: "value",
				type: "uint256",
			},
		],
		name: "Approval",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "from",
				type: "address",
			},
			{
				indexed: true,
				name: "to",
				type: "address",
			},
			{
				indexed: false,
				name: "value",
				type: "uint256",
			},
		],
		name: "Transfer",
		type: "event",
	},
];
