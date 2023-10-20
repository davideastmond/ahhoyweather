# Ahoy! Weather

Search for a location and get detailed weather data.

## Features

- Search any location for current, short-term and long-term weather data.
- Option to use metric or imperial system
- Radar precipitation map

## Stack

- React, Vite, Typescript
- Material UI styled components, icons
- Vitest

## 3rd Party dependencies (API)

- Mapbox (for Geocoding) (https://www.mapbox.com/)
- Pirate Weather (weather data) (http://pirateweather.net/)
- Openweather for maps (https://openweathermap.org/api)
- Leaflet (https://leafletjs.com/)

## Setup

1. Clone project, navigate to the folder and run `npm i` to install dependencies
2. Sign up for API keys for the services mentioned in the 3rd-party dependencies
3. Create a .env file in the root folder of the project and fill in the required
   environment variables: `VITE_MAPBOX_API_KEY`, `VITE_PIRATE_WEATHER_API_KEY`, `VITE_OPENWEATHER_API_KEY`
4. Launch the dev project by running `npm run dev`.
5. Run tests using `npm t`
