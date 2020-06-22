import PropTypes from 'prop-types';

export const ChartProp = {
  label: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.number)
  ),
};
