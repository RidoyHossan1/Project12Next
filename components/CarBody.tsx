import { fetchCars } from "@/utils";
import React from "react";
import { CarCard, ShowMore } from ".";
import { HomeProps } from "@/types";

const CarBody = async ({ searchParams }: HomeProps) => {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty =
    !allCars || !Array.isArray(allCars) || allCars.length === 0;

  return (
    <>
      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {allCars.map((car) => (
              <CarCard car={car} />
            ))}
          </div>

          <ShowMore
          pageNumber = {(searchParams.limit || 10) / 10}
          isNext = {(searchParams.limit || 10) > allCars.length}
           />

        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          <p>{allCars?.message}</p>
        </div>
      )}
    </>
  );
};

export default CarBody;
