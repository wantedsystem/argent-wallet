import { ethers } from "ethers";
import { walletDetectorABI, walletGuardianABI } from "../data/constants";
import { erc20TokenABI, ercTokens } from "../data/erc2oTokens";
export class WalletService {
	walletDetectorAddress = process.env
		.REACT_APP_WALLET_DETECTOR_CONTRACT_ADDRESS as string;
	guardianContractAddress = process.env
		.REACT_APP_GUARDIAN_CONTRACT_ADDRESS as string;
	walletDetectorABI = walletDetectorABI;
	walletGuardianABI = walletGuardianABI;
	provider = new ethers.providers.InfuraProvider(
		process.env.REACT_APP_NETWORK,
		process.env.REACT_APP_INFURA_KEY
	);
	erc20Tokens = [];

	async getBalance(walletAddress: string) {
		const balance = await this.provider.getBalance(walletAddress);
		const balanceInEth = ethers.utils.formatEther(balance);
		return balanceInEth;
	}
	async verifyAddress(walletAddress: string) {
		const walletDetector = new ethers.Contract(
			this.walletDetectorAddress,
			this.walletDetectorABI,
			this.provider
		);
		const isArgent = await walletDetector.isArgentWallet(walletAddress);
		return isArgent;
	}

	async getGuardiansCount(address: string) {
		const walletContract = new ethers.Contract(
			this.guardianContractAddress,
			this.walletGuardianABI,
			this.provider
		);
		const count = await walletContract.guardianCount(address);
		return count;
	}

	getErc20TokensBalance(address: string) {
		const tokenBalances = ercTokens.map(async (token) => {
			const tokenContract = new ethers.Contract(
				token.contractAddress,
				erc20TokenABI,
				this.provider
			);
			const tokenBalance = await tokenContract.balanceOf(address);
			const balanceInEth = ethers.utils.formatEther(tokenBalance);
			return { [token.name]: balanceInEth };
		});
		return tokenBalances;
	}
}
