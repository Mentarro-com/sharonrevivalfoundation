import {Service1,RehabServices} from "../Components/Rehabservices";
import Timeline from "../Components/TimelineServices";
const Services = () => {
  return (
    <div className="p-6">
      <Service1/>
      <RehabServices/>
      <Timeline/>      
    </div>
  );
};

export default Services;
