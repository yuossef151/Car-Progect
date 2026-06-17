import OurClients from "../Components/AboutComponents/OurClients";
import OurEndeavor from "../Components/AboutComponents/OurEndeavor";
import Statistics from "../Components/AboutComponents/Statistics";
import Story from "../Components/AboutComponents/Story";
import We from "../Components/AboutComponents/We";
import WhyUs from "../Components/AboutComponents/WhyUs";

export default function About() {
  return (
    <>
      <div>
        <We />
        <Story />
        <WhyUs />
        <Statistics />
        <OurEndeavor />
        <OurClients />
      </div>
    </>
  )
}
