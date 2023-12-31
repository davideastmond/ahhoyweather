import { Box, Popper, styled } from "@mui/material";
import { Coords } from "../../../data/locations/models/coords";
import { IMapboxGeocodeResult } from "../../../data/locations/models/mapbox-gecode-result";
import { COLOR_PALLET } from "../../../stylings/color-pallet/color-pallet";
import SelectableSearchResultItem from "./Selectable-serach-result-item.component";

interface SearchableTextBarMenuPopProps {
  open: boolean;
  onHandleMenuClose: () => void;
  anchorElement: null | HTMLElement;
  searchResults: IMapboxGeocodeResult | null;
  query: string;
  onMenuItemClick?: ({
    place_name,
    coords,
  }: {
    place_name: string;
    coords: Coords;
  }) => void;
}

function SearchableTextBarMenuPop({
  onHandleMenuClose,
  onMenuItemClick,
  query,
  searchResults,
  open,
  anchorElement,
}: SearchableTextBarMenuPopProps) {
  const handleTextBarMenuPopClose = ({
    place_name,
    coords,
  }: {
    place_name: string;
    coords: Coords;
  }) => {
    onMenuItemClick && onMenuItemClick({ place_name, coords });
    onHandleMenuClose();
  };

  return (
    <Box>
      <StyledPopper
        id={"pop-menu"}
        open={open}
        anchorEl={anchorElement}
        sx={{ zIndex: 1000 }}
      >
        {searchResults?.features &&
          searchResults.features.map((feature) => (
            <SelectableSearchResultItem
              key={feature.id}
              id={feature.id}
              place_name={feature.place_name}
              searchQuery={query}
              onClick={handleTextBarMenuPopClose}
              coords={{
                long: feature.center[0],
                lat: feature.center[1],
              }}
            />
          ))}
      </StyledPopper>
    </Box>
  );
}

const StyledPopper = styled(Popper)((props) => ({
  "&.MuiPopper-root": {
    overflow: "clip",
    backgroundColor: COLOR_PALLET.darkMidnightBlue.hex,
    border: `1px solid ${COLOR_PALLET.lightBlue.hex}`,
  },
  [props.theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

export default SearchableTextBarMenuPop;
