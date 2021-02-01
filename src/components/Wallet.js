import React from 'react';

export const Wallet = ({ wallet, account }) => {

	if (wallet && wallet.signedIn) {
		return <>
			<h3>Wallet Account</h3>
			<p>Signed In: { account.accountId }</p>
			<p>Balance: { wallet.balance }</p>
			<button onClick={() => wallet.signOut()}>Sign Out</button>
		</>;
	}

	return <>
		<h3>Sign in with your NEAR Wallet</h3>
		<button onClick={() => wallet.signIn()}>Sign In</button>
	</>;
};

