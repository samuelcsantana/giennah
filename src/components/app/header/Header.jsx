import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Typography, Form, Button } from 'antd';
import './header.scss';
import ReactInputMask from 'react-input-mask';
import viacepAction from '~/actions/viacepAction';
import Panel from '~/components/panel/Panel';

const Header = ({ form }) => {
  const dispatch = useDispatch();

  const { Title } = Typography;

  const {
    getFieldDecorator,
    getFieldsError,
    getFieldError,
    isFieldTouched,
  } = form;

  // Só mostre os erros após o campo ser 'tocado'
  const cepError = isFieldTouched('cep') && getFieldError('cep');

  const formValidation = form.validateFields;

  const searchCep = e => {
    e.preventDefault();
    formValidation((errors, values) => {
      if (!errors) {
        dispatch(viacepAction.getCep(values.cep, 'loadingAddress'));
      }
    });
  };

  const hasErrors = fieldsError => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  };

  const seachErrors = useCallback(() => {
    formValidation();
  }, [formValidation]);

  useEffect(() => {
    // Para desativar o botão de submit ao iniciar
    seachErrors();
  }, [seachErrors]);

  return (
    <header className="header">
      <Row gutter={24} className="magalu">
        <Col span={24}>
          <div> </div>
        </Col>
      </Row>
      <div className="box">
        <Form onSubmit={searchCep} layout="inline">
          <Row type="flex" justify="center" >
            <Panel
            >
              <Col className="gutter-input">
                <Title level={2}>Consultar</Title>
                <Form.Item
                  validateStatus={cepError ? 'error' : ''}
                  help={cepError || ''}
                  style={{ width: 'max-content' }}
                  label="CEP"
                >
                  {getFieldDecorator('cep', {
                    initialValue: '',
                    rules: [
                      { required: true, message: 'Insira um CEP válido.' },
                      { len: 9, message: 'Mínimo de 8 digitos' },
                    ],
                  })(
                    <ReactInputMask
                      placeholder="02050-010"
                      mask="99999-999"
                      maskChar={null}
                      onChange={e =>
                        form.setFieldsValue({
                          cep: e.target.value,
                        })
                      }
                    />
                  )}
                </Form.Item>
                <Form.Item style={{ width: 'max-content', }}>
                  <Button
                    type="primary"
                    className="box-button"
                    htmlType="submit"
                    disabled={hasErrors(getFieldsError())}
                  >
                    Buscar
                  </Button>
                </Form.Item>
              </Col>
            </Panel>
          </Row>
        </Form>
      </div>
    </header>
  );
};

export default Form.create({ name: 'cepForm' })(Header);
