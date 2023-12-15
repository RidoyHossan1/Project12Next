import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HomeProps } from '@/types';
import { CustomFilter, SearchBar, CarBody } from ".";
import { fuels, yearsOfProduction } from "@/constants";



const Catalogue = ({searchParams}: HomeProps) => {
  return (
    <>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="font-extrabold text-4xl">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        <CarBody searchParams={searchParams} />
      </div>
    </>
  );
};

export default Catalogue;
