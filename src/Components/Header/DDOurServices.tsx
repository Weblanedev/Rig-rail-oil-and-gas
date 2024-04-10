type Props = {
  setServicesHover: React.Dispatch<React.SetStateAction<boolean>>;
};
const DDOurServices: React.FC<Props> = ({ setServicesHover }) => {
  const handleServices = () => {};
  return (
    <div className="ddAboutUs" onMouseLeave={() => setServicesHover(false)}>
      <p className="ddAboutUsText">Offshore Intake/Offtake Facilities</p>
      <p className="ddAboutUsText">Storage Facilities </p>
      <p className="ddAboutUsText">Petroleum Products Marketing</p>
      <p className="ddAboutUsText">Logistics & Haulage Services</p>
    </div>
  );
};

export default DDOurServices;
