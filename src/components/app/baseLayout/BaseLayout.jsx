import React from 'react';
import { Layout } from 'antd';
import Header from '~/components/app/header/Header';
import './baseLayout.scss';

const { Content, Footer } = Layout;

const BaseLayout = ({ children }) => {
  return (
    <Layout className="base-layout">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
};

export default BaseLayout;
