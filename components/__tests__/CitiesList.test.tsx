import { render, screen } from "@testing-library/react";
import CitiesList from "../CitiesList";

describe("CitiesList component", () => {
  const citiesData = [
    {
      name: "New York",
      local_names: {
        en: "New York",
      },
      state: "New York",
      country: "USA",
      lat: 40.7128,
      lon: -74.006,
    },
    {
      name: "Los Angeles",
      local_names: {
        en: "Los Angeles",
      },
      state: "California",
      country: "USA",
      lat: 34.0522,
      lon: -118.2437,
    },
  ];

  it("renders cities list with correct data", () => {
    const { getByRole, getAllByRole } = render(
      <CitiesList data={citiesData} />
    );

    const list = getByRole("list");
    const cities = getAllByRole("listitem");

    expect(list).toBeInTheDocument();
    expect(cities).toHaveLength(citiesData.length);

    cities.forEach((city, i) => {
      const cityData = citiesData[i];
      const cityName = cityData.name;
      const cityState = cityData.state;
      const cityCountry = cityData.country;
      const cityLat = cityData.lat;
      const cityLon = cityData.lon;

      expect(city).toHaveAttribute(
        "href",
        `/weather?city=${cityName.replace(
          / /g,
          "+"
        )}&country=${cityCountry}&lat=${cityLat}&lon=${cityLon}`
      );
      expect(city).toHaveAttribute("data-cy", `city-${i}`);
      expect(city).toHaveTextContent(cityName);
      expect(city).toHaveTextContent(`${cityState}, ${cityCountry}`);
      expect(city).toHaveTextContent(`Lat: ${cityLat}`);
      expect(city).toHaveTextContent(`Lon: ${cityLon}`);
    });
  });

  // it("renders empty list when no data provided", () => {
  //   const { queryByRole } = render(<CitiesList data={[]} />);
  //   const list = queryByRole("list");
  //   expect(list).not.toBeInTheDocument();
  // });
});
