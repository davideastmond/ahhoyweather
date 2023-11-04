import { PirateClientForeCastResult } from "../../data/locations/models/pirate-client-forecast-result";
import { Unit } from "../../data/unit";
import { BaseClient } from "../base-client";

// Used to get weather forcast for a specific location
export class PirateWeatherClient extends BaseClient {
  private apiKey: string = import.meta.env.VITE_PIRATE_WEATHER_API_KEY;

  constructor() {
    super(import.meta.env.VITE_PIRATE_WEATHER_BASE_URL);
  }
  public async getForcast(
    coords: { lat: number; long: number },
    units?: Unit
  ): Promise<PirateClientForeCastResult> {
    return super.getData(
      `/forecast/${this.apiKey}/${coords.lat},${coords.long}?&units=${
        units || Unit.SI
      }`
    );
  }
}
