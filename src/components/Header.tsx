import { FormEvent } from "react";

export default function Header({
	scanWallet,
}: {
	scanWallet: (address: string) => void;
}) {
	const searchHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const walletAddress = new FormData(e.currentTarget).get(
			"wallet-address"
		) as string;
		if (walletAddress) {
			scanWallet(walletAddress);
		}
	};
	return (
		<header className="navbar">
			<form onSubmit={searchHandler}>
				<input
					type="text"
					className="wallet-search-bar"
					placeholder="Enter your wallet address"
					name="wallet-address"
				/>
				<button type="submit" className="search-button">
					{" "}
					{">>>"}{" "}
				</button>
			</form>
		</header>
	);
}
