const size = {
  mobileS: '575.98px',
  mobileL: '576px',
  tablet: '768px',
}

const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileL: `(min-width: ${size.mobileL}) and (max-width: 767.98px)`,
  tablet: `(min-width: ${size.tablet}) and (max-width: 991.98px)`,
};

export default device;