// Allows user to toggle between US and SI (Metric);

import styled from "@emotion/styled";
import { FormGroup, Stack, Switch, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Unit } from "../../data/unit";
import { COLOR_PALLET } from "../../stylings/color-pallet/color-pallet";

interface UnitsToggleProps {
  onToggle?: (unitSelected: Unit) => void;
  propsChecked: boolean;
  disabled?: boolean;
}
export function UnitsToggle({
  onToggle,
  propsChecked,
  disabled,
}: UnitsToggleProps) {
  const [checked, setChecked] = useState<boolean>(propsChecked);

  const handleToggle = (e: any) => {
    setChecked(e.target.checked);
    const unit: Unit = e.target.checked ? Unit.US : Unit.SI;
    onToggle && onToggle(unit);
  };

  useEffect(() => {
    setChecked(propsChecked);
  }, [propsChecked]);

  return (
    <StyledContainer>
      <FormGroup>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography fontWeight={`${checked ? 400 : "bold"}`}>
            Metric
          </Typography>
          <Switch
            checked={checked}
            inputProps={{ "aria-label": "ant design" }}
            onChange={handleToggle}
            disabled={disabled}
          />
          <Typography fontWeight={`${checked ? "bold" : 400}`}>
            Imperial
          </Typography>
        </Stack>
      </FormGroup>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin-top: 2rem;
  max-width: fit-content;
  color: ${COLOR_PALLET.lightBlue.hex};
  padding: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border: 1px solid ${COLOR_PALLET.ghostWhite.hex};
  border-radius: 5px;
`;
