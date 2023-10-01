import { Box, ListItemText, MenuItem, styled } from "@mui/material";
import { capitalize } from "lodash";
import { Coords } from "../../../data/locations/models/coords";
import { COLOR_PALLET } from "../../../stylings/color-pallet/color-pallet";

interface SelectableSearchResultItemProps {
  id: string;
  // Toronto, Toronto International Airport, Ontario, CA
  place_name: string; // maps to place name
  searchQuery?: string; // should refer to query
  coords: Coords;
  onClick?: ({
    place_name,
    coords,
  }: {
    place_name: string;
    coords: Coords;
  }) => void;
}

function SelectableSearchResultItem(props: SelectableSearchResultItemProps) {
  const handleMenuItemOnClick = () => {
    props.onClick &&
      props.onClick({ place_name: props.place_name, coords: props.coords });
  };

  return (
    <MenuItem key={props.id} onClick={handleMenuItemOnClick}>
      <Box display={"flex"}>
        <StyledListItemPrefixText>
          {capitalize(props.searchQuery)}
        </StyledListItemPrefixText>
        <StyledListItemDetailText>{props.place_name}</StyledListItemDetailText>
      </Box>
    </MenuItem>
  );
}

export default SelectableSearchResultItem;

const StyledListItemPrefixText = styled(ListItemText)(() => ({
  "& .MuiTypography-root": {
    marginRight: 10,
    color: COLOR_PALLET.lightBlue.hex,
    fontWeight: "bold",
  },
}));
const StyledListItemDetailText = styled(ListItemText)(() => ({
  "& .MuiTypography-root": {
    marginLeft: 10,
    fontWeight: 100,
  },
}));
