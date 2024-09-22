import React from "react";
import Marquee from "react-fast-marquee";
import { Box } from "@chakra-ui/react";
import ExpertAreaCard from "./Cards/ExpertAreaCard";

const GradientBox = ({ children }: any) => {
  return <Box width="100%" sx={{

    "@media (max-width: 480px)": {
      borderRadius: "10px",
      padding: "1px"
    }
  }}>
    {children}
  </Box>
}


export default function MarqueeSection(props: any) {

  return (
    <>
      <Box
        style={{ marginTop: "30px", padding: "" }}
        sx={{
          "@media screen and (max-width: 768px)": {
            display: "none",
            //desktop
          },
        }}
      >
        <Marquee
          speed={props.speed}>
          <GradientBox>
            <ExpertAreaCard category="Criminal" imgUrl="https://gateway.lighthouse.storage/ipfs/QmT4PfR4ubRZPTbzPLCceqDT1o4rRXzgLYFhAP9ZrM1fhc" />
          </GradientBox>
          <GradientBox>
            <ExpertAreaCard category="Family Issue" imgUrl="https://gateway.lighthouse.storage/ipfs/QmQRR1q4YzJuu8P1NtjntLLh6fb6kpqu6WBfPG1Fuyi2R2/family-matters.webp"/>
          </GradientBox>
          <GradientBox>
            <ExpertAreaCard category="Corporate" imgUrl="https://gateway.lighthouse.storage/ipfs/QmQRR1q4YzJuu8P1NtjntLLh6fb6kpqu6WBfPG1Fuyi2R2/startup-business.webp"/>
          </GradientBox>
          <GradientBox>
            <ExpertAreaCard category="Child Custody" imgUrl="https://gateway.lighthouse.storage/ipfs/QmQRR1q4YzJuu8P1NtjntLLh6fb6kpqu6WBfPG1Fuyi2R2/child-custody.webp"/>
          </GradientBox>
          <GradientBox>
            <ExpertAreaCard category="Blackmailing Issues" imgUrl="https://gateway.lighthouse.storage/ipfs/QmQRR1q4YzJuu8P1NtjntLLh6fb6kpqu6WBfPG1Fuyi2R2/blackmailed-online.webp" />
          </GradientBox>
          <GradientBox>
            <ExpertAreaCard category="Property Disputes" imgUrl="https://gateway.lighthouse.storage/ipfs/QmQRR1q4YzJuu8P1NtjntLLh6fb6kpqu6WBfPG1Fuyi2R2/buying-property.webp"/>
          </GradientBox>

        </Marquee>
      </Box>
    </>
  );
}
