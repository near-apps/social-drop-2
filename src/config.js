const contractName = "dev-1612196920744-4249339";

module.exports = function getConfig(isServer = false) {
  let config = {
    networkId: "testnet",
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
    contractName,
  };

  if (process.env.REACT_APP_ENV !== undefined) {
    config = {
      ...config,
      GAS: "200000000000000",
      DEFAULT_NEW_ACCOUNT_AMOUNT: "5",
      contractMethods: {
        changeMethods: ["new", "drop", "transfer_drop", "transfer"],
        viewMethods: ["get_balance_dropped", "get_balance_tokens"],
      },
    };
  }

  if (process.env.REACT_APP_ENV === "prod") {
    config = {
      ...config,
      networkId: "mainnet",
      nodeUrl: "https://rpc.mainnet.near.org",
      walletUrl: "https://wallet.near.org",
      helperUrl: "https://helper.mainnet.near.org",
      contractName: "near",
    };
  }

  return config;
};
