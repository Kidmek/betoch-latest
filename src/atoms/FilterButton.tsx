"use client";

import Image from "next/image";

type Props = {
  src: string;
  onClick: () => void;
};

export default function FilterButton({ src, onClick }: Props) {
  return (
    <div
      style={{
        borderWidth: "1px",
        borderColor: "var(--primary-text-color)",
        cursor: "pointer",
        borderStyle: "solid",
        padding: "0.2rem 0.3rem",
        borderRadius: "0.2rem",
      }}
    >
      <Image onClick={onClick} alt="img" src={src} width={30} height={30} />
    </div>
  );
}
