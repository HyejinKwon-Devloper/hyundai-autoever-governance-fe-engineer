function timestampToYYYYMMDD(timestamp: number, seperator: string) {
  if (timestamp <= 0) return timestamp;
  const date = new Date(timestamp);
  const formatted =
    date.getFullYear() +
    seperator +
    String(date.getMonth() + 1).padStart(2, '0') +
    seperator +
    String(date.getDate()).padStart(2, '0');
  return formatted;
}

export { timestampToYYYYMMDD };
