import { FC } from "react";

interface IPricer {
  number: number;
}

export const Pricer: FC<IPricer> = ({ number }) => {
  const formatted = new Intl.NumberFormat("ru-RU").format(number);
  return (
    <span>
      {formatted} <span className="font_ptsans">&#8399;</span>
    </span>
  );
};
