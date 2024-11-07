export const formatEvent = (plausibleEvent?: string) => {
  if (!plausibleEvent) return "";

  return `plausible-event-name--${plausibleEvent}`;
};
