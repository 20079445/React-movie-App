import React from "react";
import ActorDetails from "../components/actorDetails";
import sampleData2 from "./sampleData2";

export default {
  title: "Actor Details Page/peopleDetails",
  component: ActorDetails,
};

export const Basic = () => <ActorDetails movie={sampleData2} />;
Basic.storyName = "Default";