const iconWidth = 50;
const ClearSkyDay = () => (<img alt="clearsky_day" style={{ width: iconWidth }} src="https://www.yr.no/assets/images/svg/01d.svg" />);
const ClearSkyNight = () => (<img alt="clearsky_night" style={{ width: iconWidth }} src="https://www.yr.no/assets/images/svg/01n.svg" />);
const FairNight = () => (<img alt="fair_night" style={{ width: iconWidth }} src="https://www.yr.no/assets/images/svg/02n.svg" />);
const FairDay = () => (<img alt="fair_day" style={{ width: iconWidth }} src="https://www.yr.no/assets/images/svg/02d.svg" />);
const PartlyCloudyDay = () => (<img alt="partlycloudy_day" style={{ width: iconWidth }} src="https://www.yr.no/assets/images/svg/03d.svg" />);
const PartlyCloudyNight = () => (<img alt="partlycloudy_night" style={{ width: iconWidth }} src="https://www.yr.no/assets/images/svg/03n.svg" />);
const Cloudy = () => (<img alt="cloudy" style={{ width: iconWidth }} src="https://www.yr.no/assets/images/svg/04.svg" />);

const symbolToIcon = {
  partlycloudy_day: (<PartlyCloudyDay />),
  partlycloudy_night: (<PartlyCloudyNight />),
  clearsky_day: (<ClearSkyDay />),
  clearsky_night: (<ClearSkyNight />),
  fair_night: (<FairNight />),
  fair_day: (<FairDay />),
  cloudy: (<Cloudy />)
};

export { symbolToIcon };