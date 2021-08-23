import { Card, CardBody, WidgetPricing } from "ui";
import { ColorSwatch, CursorClick, Link, Moon } from "icons/solid";
import axios from 'axios';
import Router from "next/router";
import { useRouter } from "next/router";
import NextLink from "next/link";
import ls from 'local-storage';
import useAxios from 'axios-hooks';
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const PricingComponent = () => {
  const [count, setCount] = useState(0);
  const router = useRouter();
  let jwt = router.query.jwt;
  useEffect(() => {
    if (jwt) {
      const fetchHello = axios.post('/api/info', {
          jwt: jwt
        }).then((data) => {
          ls.set('upbase_jwt', jwt);
          
          if (!data.data.data.user.subscribed) {
            Router.push(data.data.data.user.checkout_url);
          } else {
            setCount(1);
          }
        }).catch((err) => {
          Router.push("/signin");
        });
    } else {
      let jwt = ls.get('upbase_jwt');
      
      const fetchHello = axios.post('/api/info', {
        jwt: jwt
      }).then((data) => {
        if (data.data.data.user.subscribed) {
          setCount(1);
        } else {
          setCount(2);
        }
      }).catch((err) => {
        Router.push("/signin");
      });
    }
    if (!jwt) {
      jwt = ls.get('upbase_jwt');
    }
  })
  
  const fetchManage = () => axios.post('/api/manage', {
    return_url: "https://demo.upbase.com/main",
    jwt: jwt
  }).then((data) => {
    let url = data.data.data.url;
    Router.push(url);
  }).catch((err) => {
    console.log(err);
  });

  const fetchSub = () => axios.post('/api/sub', {
    jwt: jwt
  }).then((data) => {
    let url = data.data.data.url;
    Router.push(url);
  }).catch((err) => {
    console.log(err);
  });

  const url = `https://api-dev.upbase.dev/get_video?stripe_price_ids[]=price_1JOwmEKSkowr7yEvFol7IKsl&stripe_price_ids[]=price_1JHzvCKSkowr7yEvf7fznUGd&vid=643eee61-c6c2-4d6d-a661-2e3ff2b14620&link=vz-4b2854f0-bc5.b-cdn.net&jwt=${jwt}`;
  return (
    <>
      {count == 1 &&
      <>
        <ReactPlayer url={url} controls={true}  />
        <div>To watch this video - load the page in Safari (HLS video)</div>
        <div>
          <button onClick={fetchManage}>Manage Subscription</button> 
        </div>
      </>
      }
      {count == 2 && 
           <>
           <button onClick={fetchSub}>Create Subscription</button> 
         </>    
      }
    </>
  )
};

export default PricingComponent;
