const regexPatterns = {
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  maxPrice: /(?<=max_price=)\d+/,
  minPrice: /(?<=min_price=)\d+/,
  minPriceText: /min_price=\d+/,
  maxPriceText: /max_price=\d+/,
};

export default regexPatterns;
