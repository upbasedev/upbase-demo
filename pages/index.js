import { Card, CardBody, WidgetPricing } from "ui";
import { ColorSwatch, CursorClick, Link, Moon } from "icons/solid";
import axios from 'axios';
import Router from "next/router";
import { useRouter } from "next/router";
import NextLink from "next/link";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
  {
    handleClick: () => {
      const fetchHello = axios.get('/api/create_tenant').then((data) => {
        let qr = data.data.data.user.qr;
        Router.push({ pathname: "/",  query: { qr: qr }});
      }).catch((err) => {
        console.log(err);
      });
    },
    icon: <Moon width={32} height={32} />,
    title: "Gold Plan",
    subtitle: "",
    price: 10,
    onClick: data => console.log(data),
    features: [
      {
        title: "Basic+More Content",
      },
    ],
  }
];

const PricingComponent = () => {
  const router = useRouter();
  if (!router.query.qr || router.query.qr == "") {
    return (
      <>
          <div>Weclome to the Upbase Demo! Please choose a price!</div>
          <div className="block xl:flex flex flex-wrap flex-row items-stretch ">
            {data.map((item, index) => (
              <div
                className="w-full lg:w-2/4 xl:w-1/4 px-2 text-center px-3 py-5"
                key={index}
              >
                <Card
                  key={index}
                  className={`${index === 1 ? "border border-indigo-500" : ""}`}
                >
                  <CardBody>
                    <WidgetPricing
                      title={item.title}
                      subtitle={item.subtitle}
                      price={item.price}
                      features={item.features}
                      icon={item.icon}
                      handleClick={item.handleClick}
                    />
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
      </>
    );
  } else {
    let src = `data:image/png;base64,${router.query.qr}`;
    return (
      <>
        <div>
          <div style={{color: 'white', marginBottom: '20px'}}>Please scan this QR code in Authy to get your login information then login</div>
          <img src={src} alt="QR Code" />
        </div>
        <div style={{marginTop: '30px'}}>
          <Button>
            <NextLink href="/signin">
              <a style={{color: 'white', textDecoration: 'none'}}>Login</a>
            </NextLink>
          </Button>
        </div>
      </>
    );
  }
};

export default PricingComponent;
