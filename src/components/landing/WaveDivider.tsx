export function WaveDivider({ aboveColor = "#ffffff" }: { aboveColor?: string }) {
  return (
    <div className="relative w-full h-16 pointer-events-none select-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Flat top + narrow rounded notch dipping into the section below */}
        <path
          d="M0,0 L1440,0 L1440,32 L765,32 C765,44 730,58 720,58 C710,58 675,44 675,32 L0,32 Z"
          fill={aboveColor}
        />
      </svg>
      {/* Chevron at the bottom of the notch */}
      <div className="absolute left-1/2 -translate-x-1/2" style={{ top: "44px" }}>
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L7 7L13 1" stroke="#4A7D52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
