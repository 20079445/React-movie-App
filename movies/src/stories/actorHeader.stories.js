import React from "react";
import ActorHeader from "../components/headerActor";
import sampleData2 from "./sampleData2";

export default {
  title: "actor Details Page/ActorHeader",
  component: ActorHeader,
};

export const Basic = () => <ActorHeader actor={sampleData2} />;
Basic.storyName = "Default";