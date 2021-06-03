
import React, {Component} from 'react';
import './App.css'
import NavBar from './NavBar.js'
import { Button, ListGroup, Row, Col, Modal, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Web3 from 'web3';

//let TTcontract = '컨트랙트 주소'
//let TTcontractABI = '컨트랙트 ABI'
class App extends Component{

  /**
    * @dev initialize Web3
    */
  initWeb3 = async () => {
    if(window.ethereum){
      this.web3 = new Web3(window.ethereum);
      try{
        await window.ethereum.enable();

      }catch(error){
        console.log(`User denied account access error : ${error}`)
      }
    }else if(window.web3){
      this.web3 = new Web3(Web3.currentProvider);
    }else{
      console.log("Non ethereum browser detected. You should consider trying MetaMask!");
    }
    let accounts = await this.web3.eth.getAccounts();
    this.account = accounts[0];

  }

  /**
    * @dev Getting 'GetMyTicket' event. 
    */
 /* getMyTicketEvent = async()=>{

    let evnets = await this.TTcontract.getPastEvents('GetMyTicket', {fromBlock: ,toBlock: 'latest'});
  }
*/
  
  /**
    * @dev Getting 'GetMyTransferringTicket' event. 
    */
 /* getMyTransferringTicketEvent = async()=>{

    let evnets = await this.TTcontract.getPastEvents('GetMyTransferringTicket', {fromBlock: ,toBlock: 'latest'});
  }
*/

  /**
    * @dev Viewing Concert Information 
    */
  alertClicked=()=>{
    alert("OK");
  }
  /**
    * @dev 양도 거래 목록
    */
  getList = (_index, _title)=> {
    return (
      <ListGroup horizontal>
          <ListGroup.Item variant="warning">{_index}</ListGroup.Item>
          <ListGroup.Item>{_title}</ListGroup.Item>
          <ListGroup.Item variant="warning"onClick={this.alertClicked}>읽기</ListGroup.Item>
      </ListGroup>
    )
  }
  /**
    * @dev Getting Ticket Information
    */
  getCard = (_user)=> {
    return (
      <Card>
              <Card.Header style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>{_user}</Card.Header>
              <Card.Body>
                <Card.Text>
                  <p>내가 가진 티켓</p>
                  <br/>
                  <p>양도거래 중인 티켓</p>
                  <br/>
                </Card.Text>
              </Card.Body>
            </Card>
    )
  }
  /**
    * @dev Getting Concert Information
    */
  getContent = (_user)=> {
    return (
      <Modal.Dialog>
        <Modal.Header style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
          <Modal.Title> ~공연 이름~ {_user}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>공연 날짜 : </p>
          <p>공연 시간 : </p>
          <p>좌석 정보 : </p>
          <p>티켓 가격 : </p>
        </Modal.Body>

        <Modal.Footer style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
            <Button variant="warning">신청</Button>
        </Modal.Footer>
      </Modal.Dialog>
    )
  }


  render() {
    return (
      <div className="App">
        <NavBar/>
        <br/>
        <Row>
          <Col>
            <h4 align="center">양도거래 커뮤니티</h4>
            <Modal.Dialog>
              <Modal.Header style={{ display: "flex", justifyContent: "center", alignItems: "center",}}>
                <Modal.Title>
                  양수인 구합니다.
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <div className="list">
                  {this.getList(1, '21년 5월 25일 엔플라잉 콘서트')}
                  {this.getList(2, '21년 5월 25일 오마이걸 콘서트')}
                  {this.getList(3, '21년 5월 25일 블랙핑크 콘서트')}
                  {this.getList(4, '21년 5월 25일 에이티즈 콘서트')}
                  {this.getList(5, '21년 5월 25일 뉴이스트 콘서트')}
                  {this.getList(6, '21년 5월 25일 소녀시대 콘서트')} 
                </div>
              </Modal.Body>

              <Modal.Footer style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                <Button variant="outline-warning" size="sm" >글 등록</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Col>
          <Col>
            <h4 align="center">글</h4>
            <br/>
            <div>
              {this.getContent('양수인')}
            </div>

          </Col>
          <Col>
            <h4 align="center">My Page</h4>
            <div>
              {this.getCard('양수인')}
              {this.getCard('양도인')}
            </div>
            
          </Col>
        </Row>
        
      </div>
    );
  }
}
export default App;