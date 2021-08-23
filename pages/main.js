import { Card, CardBody, WidgetPricing } from "ui";
import { ColorSwatch, CursorClick, Link, Moon } from "icons/solid";
import axios from 'axios';
import Router from "next/router";
import { useRouter } from "next/router";
import NextLink from "next/link";
import ls from 'local-storage';
import useAxios from 'axios-hooks';
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import sleep from 'sleep-promise';

const PricingComponent = () => {
  const [count, setCount] = useState(0);
  const router = useRouter();
  let jwt = router.query.jwt;
  if (!jwt) {
    jwt = ls.get('upbase_jwt');
  } else {
    ls.set('update_jwt', jwt);
  }
  useEffect(() => {
    if (jwt) {
      const fetchHello = axios.post('/api/info', {
        jwt: jwt
      }).then((data) => {
        if (data.data.data.user.subscribed) {
          setCount(1);
        } else {
          sleep(1000).then(() => {
            if (data.data.data.user.checkout_url) {
              Router.push(data.data.data.user.checkout_url);
            } else {
              setCount(2);
            }
          });
        }
      }).catch((err) => {
        Router.push("/signin");
      });
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

  let url = `https://api-dev.upbase.dev/get_video.m3u8?stripe_price_ids[]=price_1JOwmEKSkowr7yEvFol7IKsl&stripe_price_ids[]=price_1JHzvCKSkowr7yEvf7fznUGd&vid=643eee61-c6c2-4d6d-a661-2e3ff2b14620&link=vz-4b2854f0-bc5.b-cdn.net&jwt=${jwt}`;

  return (
    <>
      {count == 1 &&
      <>
        <ReactPlayer url={url} controls={true} />
        <div style={{marginTop: '30px'}}>
          <Button onClick={fetchManage}>
            <a style={{color: 'white'}}>Manage Subscription</a> 
          </Button>
        </div>
      </>
      }
      {count == 2 && 
           <>
            <Button onClick={fetchSub}>
              <a style={{color: 'white'}}>Create Subscription</a> 
            </Button>
         </>    
      }
    </>
  )
};

export default PricingComponent;
