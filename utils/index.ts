// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '1a43e87468msh01173d37a2f6dfbp12d7b3jsnf891448bafff',
// 		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
// 	}
// };

import { CarProps, FilterProps } from "@/types";

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, limit, fuel, model } = filters;

  const headers = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;

  try {
    const response = await fetch(url, { headers: headers });
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};


export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams (window.location.search);
    
  searchParams.set(type, value)

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`

  return newPathName;
}
