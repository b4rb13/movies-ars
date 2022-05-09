export function toDate(date) {
  return Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    year: "numeric",
    month: "long",
  }).format(new Date(date));
}
