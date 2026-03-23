// =============================================================
//  MEETING COST CONFIGURATION
//  Edit these values to match your company's numbers.
// =============================================================

const CONFIG = {
  // Average fully-loaded hourly cost per employee (EUR).
  // "Fully loaded" = salary + benefits + overhead.
  // Tip: a common rule of thumb is 1.3-1.5x gross hourly wage.
  averageHourlyRate: 75,

  // Currency symbol shown in the notification bar
  currency: "€",

  // ISO currency code (used for Intl.NumberFormat)
  currencyCode: "EUR",

  // Locale for number formatting (da-DK uses dot as thousands separator)
  locale: "da-DK",

  // Cost threshold (EUR) — above this the bar turns orange/warning
  warningThreshold: 500,

  // Cost threshold (EUR) — above this the bar turns red/critical
  criticalThreshold: 1000,
};
