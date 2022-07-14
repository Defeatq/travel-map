interface Params {
  bl_latitude: number,
  bl_longitude: number,
  tr_longitude: number,
  tr_latitude: number,
  // offset?: number,
  // limit?: number,
  // child_rm_ages?: string,
  // currency?: string,
  // pricesmax?: number,
  // pricesmin?: number,
  // subcategory?: string,
  // rooms?: number,
  // zff?: string,
  // hotel_class?: string,
  // amenities?: string,
  // adults?: number,
}

function getUrlBoundsList (params: Params) {
  return `https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary?bl_latitude=${ params.bl_latitude }&bl_longitude=${ params.bl_longitude }&tr_longitude=${ params.tr_longitude }&tr_latitude=${ params.tr_latitude }`
}

export default getUrlBoundsList;
