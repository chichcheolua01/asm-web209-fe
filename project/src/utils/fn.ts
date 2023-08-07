export const sort = (searchParams: URLSearchParams) =>
  searchParams.get("sort")!;

export const name = (searchParams: URLSearchParams) =>
  searchParams.get("name")!;

export const price_filter_gte = (searchParams: URLSearchParams) =>
  searchParams.get("price_filter_gte")!;

export const price_filter_lte = (searchParams: URLSearchParams) =>
  searchParams.get("price_filter_lte")!;

export const page = (searchParams: URLSearchParams) =>
  searchParams.get("page")!;

export const handleSortUrl = (
  value: string,
  name: string | null,
  price_filter_gte: string | null,
  price_filter_lte: string | null,
  page: string | number | null
) => {
  const sortUrl = `?sort=${value}${
    name || price_filter_gte || price_filter_lte || page
      ? `&name=${name === null ? "" : name}&price_filter_gte=${
          price_filter_gte === null ? "" : price_filter_gte
        }&price_filter_lte=${
          price_filter_lte === null ? "" : price_filter_lte
        }&page=${page === null ? "" : page}`
      : ""
  }`;

  return sortUrl;
};

export const handleNameUrl = (
  value: string,
  sort: string | null,
  price_filter_gte: string | null,
  price_filter_lte: string | null,
  page: string | number | null
) => {
  const nameUrl = `?name=${value}${
    sort || price_filter_gte || price_filter_lte || page
      ? `&sort=${sort === null ? "" : sort}&price_filter_gte=${
          price_filter_gte === null ? "" : price_filter_gte
        }&price_filter_lte=${
          price_filter_lte === null ? "" : price_filter_lte
        }&page=${page === null ? "" : page}`
      : ""
  }`;

  return nameUrl;
};

export const handleFilterPriceGteUrl = (
  value: string,
  name: string | null,
  sort: string | null,
  price_filter_lte: string | null,
  page: string | number | null
) => {
  const filterPriceGteUrl = `?price_filter_gte=${value}${
    name || price_filter_lte || sort || page
      ? `&name=${name === null ? "" : name}&sort=${
          sort === null ? "" : sort
        }&price_filter_lte=${
          price_filter_lte === null ? "" : price_filter_lte
        }&page=${page === null ? "" : page}`
      : ""
  }`;

  return filterPriceGteUrl;
};

export const handleFilterPriceLteUrl = (
  value: string,
  name: string | null,
  sort: string | null,
  price_filter_gte: string | null,
  page: string | number | null
) => {
  const filterPriceLteUrl = `?price_filter_lte=${value}${
    name || price_filter_gte || sort || page
      ? `&name=${name === null ? "" : name}&sort=${
          sort === null ? "" : sort
        }&price_filter_gte=${
          price_filter_gte === null ? "" : price_filter_gte
        }&page=${page === null ? "" : page}`
      : ""
  }`;

  return filterPriceLteUrl;
};

export const handlePageUrl = (
  value: string | number,
  name: string | null,
  sort: string | null,
  price_filter_gte: string | null,
  price_filter_lte: string | null
) => {
  const pageUrl = `?page=${value}${
    name || price_filter_gte || sort || price_filter_lte
      ? `&name=${name === null ? "" : name}&sort=${
          sort === null ? "" : sort
        }&price_filter_gte=${
          price_filter_gte === null ? "" : price_filter_gte
        }&price_filter_lte=${price_filter_lte === null ? "" : price_filter_lte}`
      : ""
  }`;

  return pageUrl;
};

export const generateRange = (start: number, end: number) => {
  const length = end + 1 - start;
  return Array.from({ length }, (_, index) => start + index);
};

export const formatCurrency = (amount: number | undefined) => {
  return ((amount as number) / 100).toLocaleString("vi-VN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

// start = 3, end = 6 ==> [3, 4, 5, 6]
