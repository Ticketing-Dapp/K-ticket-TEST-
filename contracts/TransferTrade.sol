pragma solidity 0.5.16;

contract TransferTrade {

    struct TicketInfo {
        string concertName;
        string day;   // 나중에 타입 다시 생각하기
        string time;  // 나중에 타입 다시 생각하기
        Seat seat;
        uint32 ticketPrice;
        bool isTransferred;
        address payable owner;
    }

    struct Seat {
        string typeOfSeat;
        uint32 seatNumber;
    }

    // 디폴트 티켓 생성
    Seat public defaultSeat = Seat("VIP", 30);
    TicketInfo defaultTicket = TicketInfo("EXO", "2021-06-18", "18:00", defaultSeat, 100000, false, 0xf17f52151EbEF6C7334FAD080c5704D77216b732);

    // 상수
    uint256 constant internal TICKET_PRICE = 5 * 10 ** 15;

    // 변수
    address payable public transferee;

    // 이벤트
    event GetMyTransferringTicket(string concertName, string day, string time, string typeOfSeat, uint32 seatNumber, uint32 ticketPrice);
    event GetMyTicket(string concertName, string day, string time, string typeOfSeat, uint32 seatNumber, uint32 ticketPrice);
    event FinishPay(address transferee);

    // 생성자
    constructor() public {
        transferee = msg.sender;
    }

    /**
    * @dev 양도 신청 처리 함수
    */
    function transferApplication() public returns (bool){
        // alreadyTransferringTicket을 확인, 임시로 데모를 위해 require만을 사용하여 거래가 진행중인지 확인한다.
        require(defaultTicket.isTransferred == false, "Already ticket is transferred");

        // pay
        pay();

        // changeTicketInfo
        changeTicketInfo();

        return true;
    }

    /**
    * @dev 이미 거래중인 티켓인 경우
    */
    function alreadyTransferringTicket() internal returns (bool result){
        return false;
    }

    /**
    * @dev 양수인의 계좌에서 티켓 가격을 받아 양도인에게 송금한다.
    */
    function pay() public payable returns (bool) {
        // 현재 가나슈를 실행중이 아니라서 ticket info의 owner 정보가 없어서 주석처리함
        require(msg.value == TICKET_PRICE, "Not enough ETH");

        defaultTicket.owner.transfer(TICKET_PRICE);
        emit FinishPay(transferee);

        return true;
    }

    /**
    * @dev 양도거래가 끝난 티켓의 정보를 수정한다.
    */
    function changeTicketInfo() public returns (address) {
        // owner change
        // 현재 가나슈를 실행중이 아니라서 ticket info의 owner 정보가 없어서 주석처리함
        defaultTicket.owner = transferee;
        return defaultTicket.owner;
    }

    /**
    * @dev 마이페이지에서 진행중인 양도거래 티켓을 보여준다.
    */
    function getMyTransferringTicket() public {

    }

    /**
    * @dev 마이페이지에서 소유하고 있는 티켓을 보여준다.
    */
    function getMyTicket() public {

    }
}