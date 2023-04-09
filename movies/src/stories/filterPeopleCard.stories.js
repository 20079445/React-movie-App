import React from "react";
import FilterPeopleCard from "../components/filterPeopleCard";

export default {
  title: "Home Page/FilterPeopleCard",
  component: FilterPeopleCard,
};

export const Basic = () => {
  return <FilterPeopleCard />;
};
Basic.storyName = "Default";