export const toCommas = (num: number, commas = 1): number => {
  return Math.round(num * Math.pow(10, commas)) / Math.pow(10, commas);
};

export const bpsPrettyPrint = (bits: number) => {
  return bits > 1000 * 1000 * 1000
    ? `${(bits / 1000 / 1000 / 1000).toFixed(1)} Gb/s`
    : bits > 1000 * 1000
    ? `${(bits / 1000 / 1000).toFixed(1)} Mb/s`
    : bits > 1000
    ? `${(bits / 1000).toFixed(1)} Kb/s`
    : `${bits.toFixed(1)} b/s`;
};

export const bytePrettyPrint = (byte: number): string => {
  return byte > 1024 * 1024 * 1024 * 1024 * 10
    ? `${(byte / 1024 / 1024 / 1024 / 1024).toFixed(1)} TiB`
    : byte > 1024 * 1024 * 1024
    ? `${(byte / 1024 / 1024 / 1024).toFixed(1)} GiB`
    : byte > 1024 * 1024
    ? `${(byte / 1024 / 1024).toFixed(1)} MiB`
    : byte > 1024
    ? `${(byte / 1024).toFixed(1)} KiB`
    : `${byte.toFixed(1)} B`;
};

export const celsiusToFahrenheit = (celsius: number): number =>
  (celsius * 9) / 5 + 32;
