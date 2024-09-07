import RehabServices from "../Components/Rehabservices";
import ServiceFeature from "../Components/servicefeature";
import Timeline from "../Components/TimelineServices";
const Services = () => {
  return (
    <div className="p-6">
      <RehabServices/>
      <Timeline/>
      <ServiceFeature/>
      
    </div>
  );
};

export default Services;
