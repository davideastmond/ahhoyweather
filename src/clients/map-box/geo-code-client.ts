import { IMapboxGeocodeResult } from "../../data/locations/models/mapbox-gecode-result";
import { BaseClient } from "../base-client";

export class MapboxGeocodeClient extends BaseClient {
  constructor() {
    super(import.meta.env.VITE_MAP_BOX_BASE_URL, {
      urlQueryParams: {
        access_token: import.meta.env.VITE_MAPBOX_API_KEY,
      },
    });
  }

  public async getGeocode(query: string): Promise<IMapboxGeocodeResult> {
    const url: string = `/geocoding/v5/mapbox.places/${encodeURIComponent(
      query
    )}.json`;
    return super.getData<IMapboxGeocodeResult>(url);
  }
}
