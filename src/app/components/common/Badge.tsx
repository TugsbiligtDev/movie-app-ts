const Badge = ({ genre }: { genre: string }) => {
  return (
    <div className="flex gap-2 py-0.5 pr-1 pl-2.5 border border-[#E4E4E7] rounded-full">
      <p className="text-xs text-[#09090B] font-semibold leading-4">{genre}</p>
      <img src="chevron-right.svg" alt="right icon" />
    </div>
  );
};

export default Badge;
