const Trade = artifacts.require("TransferTrade");
const assertRevert = require('./asserRevert');

contract('Trade', function(accounts) {
    let trade;
    let TicketPrice = 5 * 10 ** 15;

    beforeEach(async () => {
        trade = await Trade.new();

    })

    describe('Constructor', function () {
        it("constructor test", async () => {
            const transferee = await trade.transferee();

            console.log("transferee : ", transferee);

            assert.equal(transferee, 0x627306090abaB3A6e1400e9345bC60c78a8BEf57, "Wrong address");
        });
    })

    describe('ChangeTicketInfo', function () {
        it("ChangeTicketInfo test", async () => {
            const owner = await trade.changeTicketInfo.call();

            console.log("owner : ", owner);

            assert.equal(owner, 0x627306090abaB3A6e1400e9345bC60c78a8BEf57, "owner not change");
        });
    })

    describe('Pay', function () {
        it('should ticket price equal TicketPrice', async () => {
            // bet
            let result = await trade.pay({from: accounts[0], value: TicketPrice});
            await assertRevert(result);
        })

        it('should owner balance check', async () => {
            // bet
            // accounts[1]이 티켓 default의 owner인 것으로 확인
            let preBalance = await web3.eth.getBalance(accounts[1]);
            await trade.pay({from: accounts[0], value: TicketPrice});
            let balance = await web3.eth.getBalance(accounts[1]);
            console.log('preBalance : ', preBalance);
            console.log('Balance : ', balance);
            assert.equal(balance, Number(preBalance)+Number(TicketPrice), "Money didn't come in....");
        })
    })
});