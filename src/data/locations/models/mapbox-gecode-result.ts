export interface IMapboxGeocodeResult {
  query: string[];
  features: IMapboxGeocodeFeature[];
}

interface IMapboxGeocodeFeature {
  id: string;
  relevance: number;
  text: string;
  place_name: string; // ie. 'Toronto, Ontario, Canada
  center: number[];
  context: IMapboxGeocodeFeatureContext[];
  properties: IMapboxGeocodeFeatureProperty;
}

interface IMapboxGeocodeFeatureProperty {
  mapbox_id: string;
  landmark?: string;
  address?: string;
  category?: string;
  maki?: string;
}

interface IMapboxGeocodeFeatureContext {
  id: string;
  mapbox_id: string;
  short_code: string;
  text: string;
}
