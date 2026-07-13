// American Express has no Simple Icons logo, so we inline the classic blue box
// mark (white "AMERICAN EXPRESS" logotype on Amex blue). The rounded blue tile
// reads well on both light and dark surfaces.
const AmexIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    role="img"
    aria-label="American Express"
    className={`${className} object-contain scale-150`}>
    <rect width="100" height="100" rx="10" fill="#006FCF" />
    <text
      x="50"
      y="42"
      textAnchor="middle"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="700"
      fontSize="15"
      letterSpacing="0.5"
      fill="#FFFFFF">
      AMERICAN
    </text>
    <text
      x="50"
      y="64"
      textAnchor="middle"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="700"
      fontSize="15"
      letterSpacing="0.5"
      fill="#FFFFFF">
      EXPRESS
    </text>
  </svg>
);

export default AmexIcon;
