const transferTrade = artifacts.require("TransferTrade");

module.exports = function(deployer) {
    deployer.deploy(transferTrade);
};