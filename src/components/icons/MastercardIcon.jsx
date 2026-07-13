// Mastercard's interlocking circles: red on the left, yellow on the right, with
// the overlap rendered in orange via a clip path so the intersection colour is
// exact. The mark is colour-fixed, so it reads on both light and dark surfaces.
const MastercardIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    role="img"
    aria-label="Mastercard"
    className={`${className} object-contain scale-150`}>
    <defs>
      <clipPath id="mastercard-overlap">
        <circle cx="38" cy="50" r="25" />
      </clipPath>
    </defs>
    <circle cx="38" cy="50" r="25" fill="#EB001B" />
    <circle cx="62" cy="50" r="25" fill="#F79E1B" />
    <circle cx="62" cy="50" r="25" fill="#FF5F00" clipPath="url(#mastercard-overlap)" />
  </svg>
);

export default MastercardIcon;
