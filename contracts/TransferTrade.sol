pragma solidity >=0.4.21 <0.7.0;

contract TransferTrade {

    struct TicketInfo {
        byte concertName;
        byte day;   // 나중에 타입 다시 생각하기
        byte time;  // 나중에 타입 다시 생각하기
        Seat seat;
        uint32 ticketPrice;
    }

    struct Seat {
        byte typeOfSeat;
        uint32 seatNumber;
    }

    // 디폴트 티켓 생성


    // 변수

    /**
    * @dev 양도 신청 처리 함수
    */
    function transferApplication() {
        // alreadyTransferringTicket을 확인
        // pay
        // changeTicketInfo

    }

    /**
    * @dev 이미 거래중인 티켓인 경우
    */
    function alreadyTransferringTicket() {

    }

    /**
    * @dev 양수인의 계좌에서 티켓 가격을 받아 양도인에게 송금한다.
    */
    function pay() {

    }

    /**
    * @dev 양도거래가 끝난 티켓의 정보를 수정한다.
    */
    function changeTicketInfo() {

    }

    /**
    * @dev 마이페이지에서 진행중인 양도거래 티켓을 보여준다.
    */
    function getMyTransferringTicket() {

    }

    /**
    * @dev 마이페이지에서 소유하고 있는 티켓을 보여준다.
    */
    function getMyTicket() {

    }
}