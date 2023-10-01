import { Menu, MenuList, Paper } from "@mui/material";
import { Coords } from "../../../data/locations/models/coords";
import { IMapboxGeocodeResult } from "../../../data/locations/models/mapbox-gecode-result";
import SelectableSearchResultItem from "./Selectable-serach-result-item.component";

interface SearchableTextBarMenuPopProps {
  open: boolean;
  onHandleMenuClose: () => void;
  anchorElement: null | HTMLElement;
  searchResults: IMapboxGeocodeResult | null;
  onMenuItemClick?: ({
    place_name,
    coords,
  }: {
    place_name: string;
    coords: Coords;
  }) => void;
}
function SearchableTextBarMenuPop(props: SearchableTextBarMenuPopProps) {
  const handleTextBarMenuPopClose = ({
    place_name,
    coords,
  }: {
    place_name: string;
    coords: Coords;
  }) => {
    props.onMenuItemClick && props.onMenuItemClick({ place_name, coords });
    props.onHandleMenuClose();
  };
  return (
    <Paper>
      <Menu
        open={props.open}
        onClose={props.onHandleMenuClose}
        anchorEl={props.anchorElement}
      >
        <MenuList>
          {props.searchResults?.features &&
            props.searchResults.features.map((feature) => (
              <SelectableSearchResultItem
                key={feature.id}
                id={feature.id}
                place_name={feature.place_name}
                searchQuery={props.searchResults?.query?.join(" ")}
                onClick={handleTextBarMenuPopClose}
                coords={{
                  long: feature.center[0],
                  lat: feature.center[1],
                }}
              />
            ))}
        </MenuList>
      </Menu>
    </Paper>
  );
}

export default SearchableTextBarMenuPop;
