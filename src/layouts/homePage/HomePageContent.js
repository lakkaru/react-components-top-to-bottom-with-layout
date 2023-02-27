import React from "react";
import OnlineMembers from "./homePageContent/OnlineMembers";
import PrimaryNav from "./homePageContent/PrimaryNav";
import SecndaryNav from "./homePageContent/SecondaryNav";
import SocialStatics from "./homePageContent/SocialStatics";
import TrafficGraph from "./homePageContent/TrafficGraph";

export default function HomePageContent() {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        width: "100%",
        borderRadius: "0px 10px 10px 0px",
        
      }}
    >
      <PrimaryNav />
      <hr />
      <SecndaryNav />
      <hr />
      <div>
        <div style={{padding: "0px 20px 5px 20px",backgroundColor: "#ebeef6"}}>
          <OnlineMembers />
          <TrafficGraph />
          <SocialStatics />
        </div>
      </div>
    </div>
  );
}
