import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Coords } from "../../../data/locations/models/coords";
import { useScriptLoader } from "../../loaders/leaflet-script-loader/Leaflet-script-loader";
interface LeafletMapContainerProps {
  coords: Coords;
}

export function LeafletMapContainer({ coords }: LeafletMapContainerProps) {
  useScriptLoader(
    { id: "leaflet", url: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" },
    () => {
      var L = (window as any).L;
      if (L) {
        var container = L.DomUtil.get("map");
        if (container !== null) {
          container._leaflet_id = null;
        }
        var map = L.map("map").setView([coords.lat, coords.long], 13);
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);
        L.tileLayer(
          "https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid={api_key}",
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            api_key: import.meta.env.VITE_OPENWEATHER_API_KEY,
            layer: "precipitation_new",
            maxZoom: 10,
          }
        ).addTo(map);
      }
    }
  );

  return <CustomStyledBox id="map"></CustomStyledBox>;
}

const CustomStyledBox = styled(Box)`
  margin-top: 5px;
  height: 280px;
  width: 80%;
`;
