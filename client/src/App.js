
import React, {Component} from 'react';
import './App.css'
import NavBar from './NavBar.js'
import { Button, ListGroup, Row, Col, Modal, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TransferTrade from "./contracts/TransferTrade.json";
import getWeb3 from "./getWeb3";

//let TTcontract = '컨트랙트 주소'
//let TTcontractABI = '컨트랙트 ABI'

class App extends Component{

  state = { web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try{
      const web3 = await getWeb3();

      const accounts = await web3.eth.getAccounts();

      const networkId = await web3.eth.net.getId();
      const deployedNetwork = TransferTrade.networks[networkId];
      const instance = new web3.eth.Contract(
          TransferTrade.abi,
          deployedNetwork && deployedNetwork.address,
      );

      this.setState({ web3, accounts, contract: instance });
    } catch (error) {
      alert(
          'Failed to load web3, accounts, or contract. Check console for details',
      );
      console.error(error);
    }
  };

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
  constructor(props) {
    super(props);

    this.state = {
    title: "공연이름",
    day:"",
    time:"",
    seat:"",
    price:"",
    };
}
  /**
    * @dev Viewing Concert Information 
    */
  alertClicked=()=>{
    this.setState({
      title: "오마이걸",
      day:" 6월 18일",
      time:" 18:00시",
      seat:" VIP 30",
      price:"100000000",

      });
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
          <Modal.Title> {this.state.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>공연 날짜 : {this.state.day}</p>
          <p>공연 시간 : {this.state.time}</p>
          <p>좌석 정보 : {this.state.seat}</p>
          <p>티켓 가격 : {this.state.price}</p>
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