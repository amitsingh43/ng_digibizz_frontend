import { services } from "store/services_mapping";
import ServiceIcon from "./ServiceIcon";

const ExploreOurServices = () => {
  const services1 = services.slice(0, 5);
  const services2 = services.slice(5, 10);
  const services3 = services.slice(10, 15);
  const services4 = services.slice(15, services.length);
  return (
    <div className="container">
      <div className="heading">Explore our services</div>
      <p>
        Reimagine and transform your business with a full range of services
        offered by our digital partners.
      </p>
      <div className="row icons">
        <div className="col-md-1 col-sm-1"></div>
        {services1.map((service) => (
          <ServiceIcon
            tag={service.tag}
            img={service.image}
            label={service.label}
            key={service.label}
          />
        ))}
        <div className="col-md-1 col-sm-1"></div>
      </div>
      <div className="row icons">
        <div className="col-md-1 col-sm-1"></div>
        {services2.map((service) => (
          <ServiceIcon
            tag={service.tag}
            img={service.image}
            label={service.label}
            key={service.label}
          />
        ))}
        <div className="col-md-1 col-sm-1"></div>
      </div>
      <div className="row icons">
        <div className="col-md-1 col-sm-1"></div>
        {services3.map((service) => (
          <ServiceIcon
            tag={service.tag}
            img={service.image}
            label={service.label}
            key={service.label}
          />
        ))}
        <div className="col-md-3 col-sm-1"></div>
      </div>

      <div className="row icons">
        <div className="col-md-1 col-sm-1"></div>
        {services4.map((service) => (
          <ServiceIcon
            tag={service.tag}
            img={service.image}
            label={service.label}
            key={service.label}
          />
        ))}
        <div className="col-md-3 col-sm-1"></div>
      </div>
    </div>
  );
};

export default ExploreOurServices;
