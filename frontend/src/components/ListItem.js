import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Row,
  Button,
  Col
} from 'reactstrap';
import Field from './Field';
import { toast } from 'react-toastify';

const ListItem = ({ dia, motivo, tipo, info, mes, save, _id }) => {
  const [form, setForm] = useState({
    dia,
    motivo,
    tipo,
    info,
    mes
  });
  const [edit, setEdit] = useState(false);

  const handleChange = ({target: { name, value }}) => {
    const data = form;
    data[name] = value;
    setForm({ ...data });
  };

  const handleEdit = () => {
    if(edit) {
      setForm({
        dia,
        motivo,
        tipo,
        info,
        mes
      });
      setEdit(false)
    } else setEdit(true);
  };

  const onSuccess = () => {
    handleEdit();
    toast.success('Cambios realizados');
  };

  const onSave = () => {
    if(
      form['motivo'] !== null &&
      form['tipo'] !== null &&
      form['info'] !== null &&
      form['dia'] !== null &&
      form['mes'] !== null
    ) {
      console.log('>>', _id);
      save(form, _id, onSuccess);
    } else {
      console.log('else');
      toast.error('Todos los campos son requeridos');
    }
  };
  
  return (
    <ListGroupItem>
      <ListGroupItemHeading>{motivo}</ListGroupItemHeading>
      <ListGroupItemText>
        <Row className="pt-2">
          <Field
            onChange={handleChange}
            edit={edit} 
            size={3}
            label="Tipo"
            name="tipo"
            value={form['tipo']}
          />
          <Field
            onChange={handleChange}
            edit={edit}
            size={9}
            label="Info"
            name="info"
            value={form['info']}
            type="link"
          />
        </Row>
        <Row className="pt-2">
          <Field
            onChange={handleChange}
            edit={edit}
            size={3}
            label="Mes"
            name="mes"
            value={form['mes']}
            type="number"
          />
          <Field
            onChange={handleChange}
            edit={edit}
            size={3}
            label="Dia"
            name="dia"
            value={form['dia']}
            type="number"
          />
          <Field
            onChange={handleChange}
            edit={edit}
            size={3}
            label="Motivo"
            name="motivo"
            value={form['motivo']}
            type="string"
          />
        </Row>
        <Row className="pt-4">
          <Col xl={12}>
            {
              edit ?
                <>
                  <Button
                    color="danger"
                    onClick={handleEdit}
                    className="mr-2"
                  >
                    Cancelar
                  </Button>
                  <Button 
                    color="success" 
                    onClick={onSave}
                    type="button"
                  >
                      Guardar
                  </Button>
                </>
              :
                <Button color="primary" onClick={handleEdit}>Editar</Button>
            }
          </Col>
        </Row>
      </ListGroupItemText>
    </ListGroupItem>
  );
};

ListItem.propTypes = {
  motivo: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  mes: PropTypes.number.isRequired,
  dia: PropTypes.number.isRequired,
  save: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired
};


export default ListItem;