import { useState } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import SearchResultArea from "./components/SearchResultArea";
import { WalletService } from "./services/walletService";

const DEFAULT_WALLET_DETAILS: walletDetailsType = {
	balance: "0.0",
	guardians: 0,
	tokens: [],
	searchCompleted: false,
	message: "Wallet details will be shown here",
};
function App() {
	const [walletDetails, setWalletDetails] = useState(DEFAULT_WALLET_DETAILS);
	const [scanningWallet, setScanningWallet] = useState(false);

	const scanWallet = async (walletAddress: string) => {
		const walletService = new WalletService();
		setScanningWallet(true);
		if (await walletService.verifyAddress(walletAddress)) {
			const balance = await walletService.getBalance(walletAddress);
			const totalGuardians = await walletService.getGuardiansCount(
				walletAddress
			);
			Promise.all(walletService.getErc20TokensBalance(walletAddress)).then(
				(result) => {
					setWalletDetails({
						balance: balance,
						guardians: parseInt(totalGuardians._hex, 16),
						tokens: result,
						searchCompleted: true,
						message: "",
					});
				}
			);
		} else {
			setWalletDetails({
				...DEFAULT_WALLET_DETAILS,
				message: "wallet is not an argent wallet address",
			});
		}
		setScanningWallet(false);
	};
	return (
		<>
			<Header scanWallet={scanWallet} />
			{!scanningWallet ? (
				<SearchResultArea walletDetails={walletDetails} />
			) : (
				<Loader />
			)}
		</>
	);
}

export default App;
