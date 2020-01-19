import React from 'react';
import { Layout } from 'antd';
import Header from '~/components/app/header/Header';
import './baseLayout.scss';
const { Content, Footer } = Layout;

const BaseLayout = props => {
    return (
        <Layout className="base-layout">
            <Header />
            <Content>{props.children}</Content>
            <Footer></Footer>
        </Layout>
    );
};

export default BaseLayout;
