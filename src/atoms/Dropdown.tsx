"use client";

type Props = {
  options: string[];
  selected: string | null;
  onSelect: (selected: string) => void;
  placeholder: string;
};
export default function Dropdown({
  onSelect,
  options,
  selected,
  placeholder,
}: Props) {
  return (
    <select
      onChange={(e) => onSelect(e.target.value)}
      style={{
        borderRadius: "0.5rem",
        padding: "1rem 0.25rem",
        fontSize: "1rem",
      }}
    >
      <option value="" disabled selected>
        {placeholder}
      </option>
      {options.map((o) => {
        return (
          <option value={o} key={o} selected={o === selected}>
            {o}
          </option>
        );
      })}
    </select>
  );
}
