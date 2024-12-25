"use client";

import Dropdown from "@/atoms/Dropdown";
import FilterButton from "@/atoms/FilterButton";
import { Houses, Places, PropertyTypes } from "@/constants/dummy";
import HouseCard from "@/organism/home/HouseCard";
import React, { useState } from "react";

type Filter = {
  location: string | null;
  propertyType: string | null;
};

export default function HomePage() {
  const [filter, setFilter] = useState<Filter>({
    location: null,
    propertyType: null,
  });
  return (
    <div>
      <div>Rent</div>
      <div className="flex gap-2 ">
        <FilterButton src="/home/sort-settings.png" onClick={() => {}} />
        <FilterButton src="/home/sort.png" onClick={() => {}} />
        <Dropdown
          options={Places}
          selected={filter.location}
          onSelect={(e) => {
            setFilter({ ...filter, location: e });
          }}
          placeholder="Location"
        />
        <Dropdown
          options={PropertyTypes}
          selected={filter.propertyType}
          onSelect={(e) => {
            setFilter({ ...filter, propertyType: e });
          }}
          placeholder="Property Type"
        />
      </div>
      {Houses.map((house, index) => (
        <HouseCard key={index} />
      ))}
    </div>
  );
}
