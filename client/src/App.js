
import React, {Component} from 'react';
import './App.css'
import NavBar from './NavBar.js'
import { Button, ListGroup, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



class List extends Component{
  
  alertClicked=()=>{
    alert("OK");
  }
  render() {
    return (
      <div className="List">
        <ListGroup horizontal>
          <ListGroup.Item variant="warning">1</ListGroup.Item>
          <ListGroup.Item>21년 5월 25일 엔플라잉 콘서트</ListGroup.Item>
          <ListGroup.Item variant="warning" onClick={this.alertClicked}>읽기</ListGroup.Item>
        </ListGroup>

        <ListGroup horizontal>
          <ListGroup.Item variant="warning">2</ListGroup.Item>
          <ListGroup.Item>21년 5월 25일 에프엑스 콘서트</ListGroup.Item>
          <ListGroup.Item variant="warning">읽기</ListGroup.Item>
        </ListGroup>

        <ListGroup horizontal>
          <ListGroup.Item variant="warning">3</ListGroup.Item>
          <ListGroup.Item>21년 5월 25일 뉴이스트 콘서트</ListGroup.Item>
          <ListGroup.Item variant="warning">읽기</ListGroup.Item>
        </ListGroup>

        <ListGroup horizontal>
          <ListGroup.Item variant="warning">4</ListGroup.Item>
          <ListGroup.Item>21년 5월 25일 소녀시대 콘서트</ListGroup.Item>
          <ListGroup.Item variant="warning">읽기</ListGroup.Item>
        </ListGroup>

        <ListGroup horizontal>
          <ListGroup.Item variant="warning">5</ListGroup.Item>
          <ListGroup.Item>21년 5월 25일 블랙핑크 콘서트</ListGroup.Item>
          <ListGroup.Item variant="warning">읽기</ListGroup.Item>
        </ListGroup>

        <ListGroup horizontal>
          <ListGroup.Item variant="warning">6</ListGroup.Item>
          <ListGroup.Item>21년 5월 25일 에이핑크 콘서트</ListGroup.Item>
          <ListGroup.Item variant="warning">읽기</ListGroup.Item>
        </ListGroup>

        <ListGroup horizontal>
          <ListGroup.Item variant="warning">7</ListGroup.Item>
          <ListGroup.Item>21년 5월 25일 에이티즈 콘서트</ListGroup.Item>
          <ListGroup.Item variant="warning">읽기</ListGroup.Item>
        </ListGroup>

        <ListGroup horizontal>
          <ListGroup.Item variant="warning">8</ListGroup.Item>
          <ListGroup.Item>21년 5월 25일 오마이걸 콘서트</ListGroup.Item>
          <ListGroup.Item variant="warning">읽기</ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

class App extends Component{
  render() {
    return (
      <div className="App">
        <NavBar/>
        <br/>
        <Row>
          <Col>
            <h4 align="center">양도거래 커뮤니티</h4>
            <List/>
            <br/>
            <Button variant="outline-warning" size="sm">글 등록</Button>{' '}
          </Col>
          <Col>
            <h4 align="center">글</h4>
          </Col>
          <Col>
          <h4 align="center">My Page</h4>
          </Col>
        </Row>
        
      </div>
    );
  }
}
export default App;