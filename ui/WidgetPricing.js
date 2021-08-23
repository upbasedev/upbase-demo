import PropTypes from "prop-types";
import { Ripple } from "./Ripple";
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export const WidgetPricing = ({ title, subtitle, price, features, icon, handleClick }) => (
  <>
    <div className="flex items-center justify-center mb-5 text-blue-500 py-4">
      {icon}
    </div>

    <div className="mb-5">
      <h5 className="mb-0">{title}</h5>
      <small className="mb-0 text-gray-500">{subtitle}</small>
    </div>

    <ul className="list-none mb-5">
      {features.map((feature, index) => (
        <li key={index}>{feature.title}</li>
      ))}
    </ul>

    {/* <p className="mb-5 text-sm">
      Perfect for small startups that have less than 10 team members
    </p> */}

    <div className="mt-auto">
      <p className="font-bold text-5xl mb-4">
        <span className="symbol">$</span>
        <span>{price} per month</span>
      </p>

      <Button onClick={handleClick}>
        <a style={{color: 'white'}}>Choose plan</a>
      </Button>
    </div>
  </>
);

WidgetPricing.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  price: PropTypes.number,
  handleClick: PropTypes.func,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      available: PropTypes.bool,
    })
  ),
};
