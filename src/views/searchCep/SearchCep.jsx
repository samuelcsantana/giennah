import React, { useRef, useLayoutEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Spin, Row, Col } from 'antd';
import { editToGeocode } from '~/helpers/utils';
import gmapsAction from '~/actions/gmapsAction';
import Map from '~/components/googleMaps/GoogleMaps';
import Panel from '~/components/panel/Panel';
import './searchCep.scss';

const SearchCep = () => {
  const { Paragraph, Title } = Typography;
  const address = useSelector(state => state.localization.address);
  const geocode = useSelector(state => state.localization.geocode);
  const { loadingAddress, loadingGeocode } = useSelector(
    state => state.app.loading
  );

  const dispatch = useDispatch();

  const seachOnMaps = useCallback(() => {
    dispatch(gmapsAction.getGeocode(editToGeocode(address), 'loadingGeocode'));
  }, [dispatch, address]);

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    seachOnMaps();
  }, [seachOnMaps]);

  return (
    <div className="box-cep">
      <Row gutter={24} type="flex" justify="center">
        <Panel className="searchCepPanel">
          <Spin
            spinning={loadingAddress || loadingGeocode}
            className="width-max"
          >
            <Col>
              <Title level={3}>{address.logradouro}</Title>
              <Paragraph >
                Endereço: {address.bairro},
                {`${address.localidade} - ${address.uf}`}
              </Paragraph>
              <Paragraph> Cep: {address.cep}</Paragraph>
              <div className="gmaps">
                <Map
                  initialCenter={geocode}
                  center={geocode}
                  zoom={17}
                  info={address.logradouro}
                />
              </div>
            </Col>
          </Spin>
        </Panel>
      </Row>
    </div>
  );
}

export default SearchCep;
