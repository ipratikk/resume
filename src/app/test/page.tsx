export default function TestPage() {
  return (
    <div>
      <div className="h-screen bg-blue-500 flex items-center justify-center text-white">
        TOP
      </div>

      <div className="h-[200vh] bg-red-500 flex items-center justify-center text-white">
        SCROLL AREA
      </div>

      <div className="h-screen bg-green-500 flex items-center justify-center text-white">
        BOTTOM
      </div>
    </div>
  );
}