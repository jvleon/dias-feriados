import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Navbar, NavbarBrand, ListGroup } from 'reactstrap';
import ListItem from '../components/ListItem';
import { fetchData, saveData } from '../actions';

const Home = ({ data, ...props }) => {

  useEffect(() => {
    props.fetchData();
  }, []);

 return (
    <Container>
      <Navbar color="dark" expand="md">
        <NavbarBrand href="#">Dias no laborales en Argentina. 2020</NavbarBrand>
      </Navbar>
      <Row>
        <Col xl="12">
          <ListGroup>
          {
            data.map(({ motivo, dia, mes, tipo, info, _id }, i) => (
              <ListItem
                motivo={motivo}
                dia={dia}
                mes={mes}
                tipo={tipo}
                info={info}
                save={props.saveData}
                _id={_id}
                key={i}
              />
            ))
          }
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ data, loading }) => ({
  data,
  loading
});

const mapDispatchToProps = {
  fetchData,
  saveData
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);