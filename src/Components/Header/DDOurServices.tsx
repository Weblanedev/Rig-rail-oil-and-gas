import {  useNavigate } from "react-router-dom";

type Props = {
  setServicesHover: React.Dispatch<React.SetStateAction<boolean>>;
};
const DDOurServices: React.FC<Props> = ({ setServicesHover }) => {
  const nav = useNavigate();
  const handleServices = (val:string) => {
    if (val==="/storage"){
      nav("/product")
    }else  if (val==="/offshore"){
      nav("/offshore")
    }
  };
  return (
    <div className="ddAboutUs" onMouseLeave={() => setServicesHover(false)}>
      <p className="ddAboutUsText" onClick={()=>handleServices("/offshore")}>Offshore Intake/Offtake Facilities</p>
      <p className="ddAboutUsText" onClick={()=>handleServices("/storage")}>Storage Facilities </p>
      <p className="ddAboutUsText">Petroleum Products Marketing</p>
      <p className="ddAboutUsText">Logistics & Haulage Services</p>
    </div>
  );
};

export default DDOurServices;
