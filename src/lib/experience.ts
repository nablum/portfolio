/** Number of full years elapsed since `start` (e.g. "2021-09"). */
export function yearsSince(start: string, now = new Date()): number {
  const [year, month] = start.split("-").map(Number);
  const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month);
  return Math.max(0, Math.floor(months / 12));
}
