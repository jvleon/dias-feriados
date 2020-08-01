import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Navbar, NavbarBrand, ListGroup } from 'reactstrap';
import ListItem from '../components/ListItem';
import { fetchData, saveData } from '../actions';

const Home = ({ data, ...props }) => {

  const getDays = () => {
    props.fetchData();
  };

  useEffect(() => {
    getDays();
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
            data.map(({_id, ...item}) => (
              <ListItem
                data={{...item, _id}}
                save={props.saveData}
                key={_id}
                onSuccessSave={getDays}
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