import Button from '../Button';

import PosMachine from '../../assets/images/pos-machine.png';

import './styles.css';

const GrowBussiness = () => {
  return (
    <div className="grow-bussiness-container-main">
      <div className="grow-bussiness-sub-container">
        <div className="rounded-component">
          <div className="rounded-component-card">
            <h1 className="rounded-component-card-heading">
              Grow your business with HUBBO POS
            </h1>
            <p className="rounded-component-card-paragraph">
              Manage menu updates, in-store orders, and deliveries across all
              major delivery platforms with HUBBO POS.
            </p>
            <Button className="FreeDemo" variant="primary" isActive={false}>
              Request Free Demo
            </Button>
          </div>
          <img src={PosMachine} alt="posMachine" className="posMachine" />
        </div>
      </div>
    </div>
  );
};

export default GrowBussiness;
