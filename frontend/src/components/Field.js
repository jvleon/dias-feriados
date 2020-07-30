import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  FormGroup,
  Label,
  Col,
} from 'reactstrap';


const Field = ({ edit, name, value, label, size, type, onChange }) => {
  return (
    <Col xl={size}>
      {
        edit ? 
          <FormGroup>
            <Label xl={1} for="exampleEmail">{label}</Label>
            <Col xl={11}>
              <Input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
              />
            </Col>
          </FormGroup>
        :
          type === 'text' ?
            <span>{`${label}: ${value}`}</span>
          :
            <a href={value}>{value}</a>
      }
    </Col>
  );
};

Field.defaultProps = {
  type: 'text',
};

Field.propTypes = {
  type: PropTypes.string,
  edit: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Field;