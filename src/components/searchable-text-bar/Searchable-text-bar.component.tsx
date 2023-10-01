import { Box, Button, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { MapboxGeocodeClient } from "../../clients/map-box/geo-code-client";
import { Coords } from "../../data/locations/models/coords";
import { IMapboxGeocodeResult } from "../../data/locations/models/mapbox-gecode-result";
import SearchableTextBarMenuPop from "./menu-pop/Searchable-text-bar-menu-pop.component";

interface SearchableTextBarProps {
  label: string;
  onLocationMenuItemClicked: ({
    place_name,
    coords,
  }: {
    place_name: string;
    coords: Coords;
  }) => void;
}

function SearchableTextBar(props: SearchableTextBarProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchResults, setSearchResults] =
    useState<IMapboxGeocodeResult | null>(null);

  const open = Boolean(anchorEl);
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
  // This ref is used to anchor the materialUI pop-up menu to the search box
  const searchTextBoxRef = useRef(null);

  const handleGoSearchClick = async () => {
    setAnchorEl(searchTextBoxRef.current);

    const mapBoxClient: MapboxGeocodeClient = new MapboxGeocodeClient();
    const requestSearchResults: IMapboxGeocodeResult =
      await mapBoxClient.getGeocode(inputValue);
    setSearchResults(requestSearchResults);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box component={"div"} mt={4}>
      <Box display="flex">
        <TextField
          id="location-search-field"
          required
          type="search"
          {...props}
          sx={{ width: "100%" }}
          value={inputValue}
          onChange={handleInputChange}
          ref={searchTextBoxRef}
          autoComplete={"true"}
        />
        <Box ml={2} padding={1}>
          <Button
            disabled={inputValue.length < 3}
            onClick={handleGoSearchClick}
          >
            Go
          </Button>
        </Box>
      </Box>
      <SearchableTextBarMenuPop
        open={open}
        onHandleMenuClose={handleMenuClose}
        anchorElement={anchorEl}
        searchResults={searchResults}
        onMenuItemClick={props.onLocationMenuItemClicked}
      />
    </Box>
  );
}

export default SearchableTextBar;
