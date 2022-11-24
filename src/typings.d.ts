interface walletDetailsType {
	balance: string;
	guardians: number;
	tokens: { [x: string]: string }[];
	searchCompleted: boolean;
	message: string;
}
