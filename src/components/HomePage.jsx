import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoAPI";

const HomePage=()=>{
    const{data, isFetching}=useGetCryptosQuery();
    const globalStats=data?.data?.stats;
    if(isFetching) return "Loading......";
    console.log(data);
    return(
       <>
       <Typography.Title level={2} className="heading">Global Crypto Stats</Typography.Title>
       <Row>
           <Col span={12}><Statistic title="Total Crypto Currencies" value={globalStats.total}  /></Col>
           <Col span={12}><Statistic title="Total Crypto Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
           <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
           <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
           <Col span={12}><Statistic title="Total Market" value={millify(globalStats.totalMarkets)} /></Col>
       </Row>
       </>
    );
}
export default HomePage;