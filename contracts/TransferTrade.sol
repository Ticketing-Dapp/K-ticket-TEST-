pragma solidity >=0.4.21 <0.7.0;

contract TransferTrade {

    struct TicketInfo {
        string concertName;
        string day;   // 나중에 타입 다시 생각하기
        string time;  // 나중에 타입 다시 생각하기
        Seat seat;
        uint32 ticketPrice;
    }

    struct Seat {
        string typeOfSeat;
        uint32 seatNumber;
    }

    // 디폴트 티켓 생성
    Seat public defaultSeat = Seat("VIP", 30);
    TicketInfo defaultTicket = TicketInfo("EXO", "2021-06-18", "18:00", defaultSeat, 100000);


    // 변수

    /**
    * @dev 양도 신청 처리 함수
    */
    function transferApplication() public {
        // alreadyTransferringTicket을 확인
        // pay
        // changeTicketInfo

    }

    /**
    * @dev 이미 거래중인 티켓인 경우
    */
    function alreadyTransferringTicket() internal {

    }

    /**
    * @dev 양수인의 계좌에서 티켓 가격을 받아 양도인에게 송금한다.
    */
    function  pay() internal {

    }

    /**
    * @dev 양도거래가 끝난 티켓의 정보를 수정한다.
    */
    function changeTicketInfo() internal {

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