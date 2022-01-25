import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Row, Typography, Col, Statistic } from 'antd';
// Redux
import { useGetCryptosQuery } from '../services/cryptoApi';

// Components
import { Cryptocurrencies, News } from '../components';
import Loader from './Loader';
const { Title } = Typography;

// Component
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(12);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <Title level={2} className="heading">
        Globals Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic value={globalStats.total} title="Total Cryptocurrencies" />
        </Col>
        <Col span={12}>
          <Statistic
            value={millify(globalStats.totalExchanges)}
            title="Total Exchanges"
          />
        </Col>
        <Col span={12}>
          <Statistic
            value={millify(globalStats.totalMarketCap)}
            title="Total Market Cap"
          />
        </Col>
        <Col span={12}>
          <Statistic
            value={millify(globalStats.total24hVolume)}
            title="Total 24hr Volume"
          />
        </Col>
        <Col span={12}>
          <Statistic
            value={millify(globalStats.totalMarkets)}
            title="Total Markets"
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top Cryptocurrencies
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
