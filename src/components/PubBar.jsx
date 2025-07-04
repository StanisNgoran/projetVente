export function PubBar({image1,image2,image3,image4}) {
  return (
    <div className="overflow-hidden  shadow-sm  h-40 mx-1 relative">
      <div
        className="flex animate-slide w-[400%] h-full"
        style={{
          animation: "slide 3s linear infinite",
        }}
      >
        <img src={image1} alt="Pub 1" className="w-full object-cover" />
        <img src={image2} alt="Pub 2" className="w-full object-cover" />
        <img src={image3} alt="Pub 3" className="w-full object-cover" />
        <img src={image4} alt="Pub 4" className="w-full object-cover" />
      </div>

      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
            0% { transform: translateX(0%); }

          }
        `}
      </style>
    </div>
  );
}
