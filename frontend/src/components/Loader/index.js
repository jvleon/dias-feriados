import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';
import Container from './styled';

const Loader = ({ loading }) => (
  <>
  {
    loading ?
      <Container>
        <Spinner color="success" size="xl"  />
      </Container>
    :
      null
  }
  </>
);

const mapStateToProps = ({ loading }) => ({
  loading
});

export default connect(mapStateToProps, null)(Loader);