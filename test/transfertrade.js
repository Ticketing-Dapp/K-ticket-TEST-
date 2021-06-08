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

    describe('check my ticket', function () {
        // 함수 반환값을 확인하고 싶을 때 .call() 사용, 함수의 동작 후의 과정이 궁금한 경우 .call() 사용 x
        it('check my ticket', async () => {
            let concertName = "EXO";
            const transferee = await trade.transferee();
            console.log("transferee : ", transferee);

            let beforeTransferring = await trade.getMyTicket.call({from: accounts[1]}); // owner에서 확인 요청
            console.log("owner : ", accounts[1]);
            assert.equal(accounts[1], beforeTransferring[1], "Not equal owner");
            assert.equal(concertName, beforeTransferring[0], "Not equal concert name");
            await trade.changeTicketInfo({from: transferee}); // 이더가 없으므로 티켓 owner만 수정했을 때도 잘 동작하는 지 확인
            let result = await trade.getMyTicket.call({from: transferee}); // transferee == accounts[1]
            console.log("owner : ", transferee);
            assert.equal(transferee, result[1], "Not equal owner");
            assert.equal(concertName, result[0], "Not equal concert name");
        })

        it('check my transferring ticket', async () => {
            let concertName = "EXO";
            let checkTransferring = await trade.getMyTransferringTicket.call({from: accounts[1]}); // owner에서 확인 요청
            assert.equal(concertName, checkTransferring, "Not equal concert name");
        })
    })
});