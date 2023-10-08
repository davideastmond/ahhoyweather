import { Box, CircularProgress, TextField } from "@mui/material";
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
  onSearchError?: (message: string) => void;
}

function SearchableTextBar(props: SearchableTextBarProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchResults, setSearchResults] =
    useState<IMapboxGeocodeResult | null>(null);
  const [isLoading, _] = useState<boolean>(false); //TODO Handle loading
  const [query, setQuery] = useState<string>("");
  const open = Boolean(anchorEl);

  // This ref is used to anchor the materialUI pop-up menu to the search box
  const searchTextBoxRef = useRef(null);

  const handleInputChange = async (e: any) => {
    setInputValue(e.target.value);
    if (e.target.value?.length > 0) {
      setAnchorEl(searchTextBoxRef.current);

      if (e.target.value.length >= 3) {
        try {
          const mapBoxClient: MapboxGeocodeClient = new MapboxGeocodeClient();
          const requestSearchResults: IMapboxGeocodeResult =
            await mapBoxClient.getGeocode(inputValue);
          setSearchResults(requestSearchResults);
          setQuery(e.target.value);
        } catch (exception: any) {
          props.onSearchError && props.onSearchError(JSON.stringify(exception));
        }
      }
    } else {
      setAnchorEl(null);
      setSearchResults(null);
    }
  };

  const handleMenuClose = () => {
    setSearchResults(null);
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
      </Box>
      {!isLoading && (
        <SearchableTextBarMenuPop
          open={open}
          onHandleMenuClose={handleMenuClose}
          anchorElement={anchorEl}
          searchResults={searchResults}
          query={query}
          onMenuItemClick={props.onLocationMenuItemClicked}
        />
      )}
      {isLoading && <CircularProgress />}
    </Box>
  );
}

export default SearchableTextBar;
