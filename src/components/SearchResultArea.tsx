interface searchAreaProps {
	walletDetails: walletDetailsType;
}
export default function SearchResultArea({ walletDetails }: searchAreaProps) {
	return (
		<div className="search-area-wrapper">
			{walletDetails.searchCompleted ? (
				<>
					{/* BALANCE CARD */}
					<div className="content-wrapper">
						<div className="bg-primary card">
							<div className="card__header">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="card__icon"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
									/>
								</svg>

								<p className="card__title">Balance</p>
							</div>
							<div className="card__details">{walletDetails.balance} ETH</div>
						</div>
						{/* GUARDIANS CARD */}
						<div className="bg-secondary card">
							<div className="card__header">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="card__icon"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
									/>
								</svg>

								<p className="card__title">Number of guardians</p>
							</div>
							<div className="card__details">{walletDetails.guardians}</div>
						</div>
					</div>
					{/* EXTRA */}
					<div className="search__area__extra__info">
						<h3>ERC20 Tokens</h3>

						{walletDetails.tokens.map((token, tIndex) => (
							<div className="extra" key={tIndex}>
								<h5>{Object.keys(token)[0]}</h5>
								<div className="bg-primary btn">{Object.values(token)[0]}</div>
							</div>
						))}
					</div>
				</>
			) : (
				<p className="message">{walletDetails.message}</p>
			)}
		</div>
	);
}
