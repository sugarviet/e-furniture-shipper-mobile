import { GOOGLE_API_KEY } from "../constants/key"

export const get_geo_code_api = (address) => `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GOOGLE_API_KEY}`