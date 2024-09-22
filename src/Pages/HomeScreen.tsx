import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Box } from "@chakra-ui/react";
import CaptionCarousel from "../Components/Carousel";
import RegistrationForm from "./RegistrationForm";
import ourServices from "../data/ourServices";
import Login from "./Login";
import Signup from "./Signup";
import FlexRow from "../_ui/flex/FlexRow";
import FlexColumn from "../_ui/flex/FlexColumn";
import Footer from "../Components/Footer";
import ServicesCards from "../Components/Cards/ServicesCards";
import ProfileCards from "../Components/Cards/ProfileCard";
import ExpertAreaCard from "../Components/Cards/ExpertAreaCard";
import MarqueeSection1 from "../Components/MarqueeSection";
import StateCityDropdown from "../Components/SearchFilter";
import Assistant from "../Components/Assistant";

const HomeScreen = () => {
  return (
    <>
      <CaptionCarousel />
      <Assistant/>
      <StateCityDropdown/>
      <MarqueeSection1 />
      <FlexRow hrAlign="space-between" paddingLeft="1.5rem">
        {ourServices.map((val, index) => (
          <ServicesCards
            key={index}
            // imgsrc={val.imgsrc}
            index={val._id}
            title={val.title}
            description={val.description}
          />
        ))}
      </FlexRow>
      

      {/* <ProfileCards/> */}
      {/* <Login />
      <Signup />
      <RegistrationForm /> */}
      {/* <Footer /> */}
      {/* <ExpertAreaCard /> */}
    </>
  );
};

export default HomeScreen;
