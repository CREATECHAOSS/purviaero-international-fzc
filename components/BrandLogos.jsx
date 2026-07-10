export const BRAND_LOGOS = {
  aeroshell: {
    name: "AeroShell (Shell)",
    category: "Lubricants/Greases",
    svg: (props) => (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        {/* Red & yellow pecten-inspired shape */}
        <path d="M50 5C38 5 15 28 15 55C15 78 30 90 50 90C70 90 85 78 85 55C85 28 62 5 50 5Z" fill="#F4CA16"/>
        <path d="M50 5C44 5 15 28 15 55C15 70 20 80 30 85L50 55L70 85C80 80 85 70 85 55C85 28 56 5 50 5Z" fill="#DD161C"/>
        <path d="M35 88C40 92 45 95 50 95C55 95 60 92 65 88L50 65L35 88Z" fill="#DD161C"/>
      </svg>
    )
  },
  exxonmobil: {
    name: "ExxonMobil",
    category: "Lubricants/Greases",
    svg: (props) => (
      <svg viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="10" y="38" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="32" fill="#E10A17" letterSpacing="-1">ExxonMobil</text>
      </svg>
    )
  },
  castrol: {
    name: "Castrol",
    category: "Lubricants/Greases",
    svg: (props) => (
      <svg viewBox="0 0 150 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M10 5H140V45H10V5Z" fill="#007A33"/>
        <path d="M10 25H140V45H10V25Z" fill="#DA291C"/>
        <text x="25" y="34" fontFamily="Impact, Arial Black, sans-serif" fontStyle="italic" fontWeight="900" fontSize="24" fill="#FFFFFF">Castrol</text>
      </svg>
    )
  },
  pidilite: {
    name: "Pidilite",
    category: "Adhesives/Sealants",
    svg: (props) => (
      <svg viewBox="0 0 150 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        {/* Simplified Pidilite blue lockup with dual bird element */}
        <path d="M20 25C20 15 35 15 35 25C35 35 50 35 50 25" stroke="#0F2C59" strokeWidth="4" strokeLinecap="round"/>
        <path d="M30 25C30 15 45 15 45 25C45 35 60 35 60 25" stroke="#E31E24" strokeWidth="4" strokeLinecap="round"/>
        <text x="70" y="33" fontFamily="var(--font-outfit), sans-serif" fontWeight="800" fontSize="18" fill="#0F2C59">Pidilite</text>
      </svg>
    )
  },
  loctite: {
    name: "Loctite (Henkel)",
    category: "Adhesives/Sealants",
    svg: (props) => (
      <svg viewBox="0 0 150 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="150" height="50" rx="6" fill="#E10A17"/>
        <text x="15" y="34" fontFamily="Georgia, serif" fontWeight="bold" fontSize="26" fill="#FFFFFF" letterSpacing="1">LOCTITE</text>
      </svg>
    )
  },
  three_m: {
    name: "3M Aerospace",
    category: "Adhesives/Sealants",
    svg: (props) => (
      <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="10" y="38" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="38" fill="#FF0000" letterSpacing="-4">3M</text>
      </svg>
    )
  },
  ppg: {
    name: "PPG Aerospace",
    category: "Paints/Coatings",
    svg: (props) => (
      <svg viewBox="0 0 120 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="5" y="10" width="110" height="30" rx="4" fill="#005A9C"/>
        <text x="15" y="32" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="22" fill="#FFFFFF" letterSpacing="2">PPG</text>
      </svg>
    )
  },
  akzonobel: {
    name: "AkzoNobel",
    category: "Paints/Coatings",
    svg: (props) => (
      <svg viewBox="0 0 150 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        {/* Simplified human shape element */}
        <circle cx="25" cy="18" r="6" fill="#002D62"/>
        <path d="M12 35C15 22 35 22 38 35" stroke="#002D62" strokeWidth="4" strokeLinecap="round"/>
        <text x="50" y="33" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" fill="#002D62">AkzoNobel</text>
      </svg>
    )
  },
  sherwin_williams: {
    name: "Sherwin-Williams",
    category: "Paints/Coatings",
    svg: (props) => (
      <svg viewBox="0 0 180 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        {/* Cover the Earth icon & text */}
        <circle cx="25" cy="25" r="14" fill="#005A9C"/>
        <path d="M25 11C20 18 15 25 25 39C35 25 30 18 25 11Z" fill="#FF0000"/>
        <text x="48" y="32" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="13" fill="#005A9C" letterSpacing="0.5">SHERWIN-WILLIAMS</text>
      </svg>
    )
  },
  zipchem: {
    name: "Zip-Chem",
    category: "Cleaning/Solvents",
    svg: (props) => (
      <svg viewBox="0 0 150 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M10 10H140V40H10V10Z" fill="#0D2C59" rx="4"/>
        <text x="22" y="31" fontFamily="Impact, Arial Black, sans-serif" fontSize="20" fill="#00999F" letterSpacing="1">ZIP-CHEM</text>
      </svg>
    )
  },
  brulin: {
    name: "Brulin",
    category: "Cleaning/Solvents",
    svg: (props) => (
      <svg viewBox="0 0 120 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="10" y="34" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="bold" fontSize="26" fill="#002D62">Brulin</text>
      </svg>
    )
  },
  chemtronics: {
    name: "Chemtronics",
    category: "Cleaning/Solvents",
    svg: (props) => (
      <svg viewBox="0 0 150 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="10" y="33" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="20" fill="#0F2C59">Chemtronics</text>
        <path d="M115 15L135 25L115 35Z" fill="#E31E24"/>
      </svg>
    )
  }
};
