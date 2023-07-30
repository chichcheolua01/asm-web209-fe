function generateFilterUrl(
  paramFilter: string,
  value: string,
  name: string,
  sort: string,
  price_filter_gte: string,
  price_filter_lte: string
) {
  const queryParams = [];

  if (name !== null) {
    paramFilter === name ? queryParams.push(`name=${name}`) : "";
  }

  if (sort !== null) {
    paramFilter === sort ? queryParams.push(`sort=${sort}`) : "";
  }

  if (price_filter_gte !== null) {
    paramFilter === price_filter_gte
      ? queryParams.push(`price_filter_gte=${price_filter_gte}`)
      : "";
  }

  if (price_filter_lte !== null) {
    paramFilter === price_filter_lte
      ? queryParams.push(`price_filter_lte=${price_filter_lte}`)
      : "";
  }

  const queryString = queryParams.join("&");
  const filterUrl = `/products/?${paramFilter}=${value}${
    queryString ? "&" + queryString : ""
  }`;

  return filterUrl;
}

export { generateFilterUrl };
