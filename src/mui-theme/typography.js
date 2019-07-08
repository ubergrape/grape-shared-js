import createTypography from '@material-ui/core/styles/createTypography'
import { normal } from 'grape-theme/dist/fonts'
import palette from './palette'

export const constants = {
  fontFamily: '"proxima-nova", "Helvetica Neue", Arial, Helvetica, sans-serif',
  fontSize: normal.fontSize,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
}

export default createTypography(palette, constants)
