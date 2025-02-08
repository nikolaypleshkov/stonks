export const alpha = (color: string, alpha: number) => {
    const [r, g, b] = color.match(/\w\w/g)!.map((x) => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  };