export default function PhotoBand() {
  return (
    <div className="grid grid-cols-3 h-[320px] md:h-[320px] max-md:h-[180px] overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
        alt="Textile close-up"
        className="w-full h-full object-cover"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80"
        alt="Sports apparel"
        className="w-full h-full object-cover"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80"
        alt="Community workshop"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
