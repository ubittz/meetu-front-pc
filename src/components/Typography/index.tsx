import BaseTypography from '@@components/Typography/BaseTypography';
import { TYPOGRAPHY_THEME } from '@@components/Typography/constants';

const Typography = {
  [TYPOGRAPHY_THEME.LARGE_TITLE]: BaseTypography(TYPOGRAPHY_THEME.LARGE_TITLE),
  [TYPOGRAPHY_THEME.MEDIUM_TITLE]: BaseTypography(TYPOGRAPHY_THEME.MEDIUM_TITLE),
  [TYPOGRAPHY_THEME.SMALL_TITLE]: BaseTypography(TYPOGRAPHY_THEME.SMALL_TITLE),

  [TYPOGRAPHY_THEME.LARGE_SUBTITLE]: BaseTypography(TYPOGRAPHY_THEME.LARGE_SUBTITLE),
  [TYPOGRAPHY_THEME.MEDIUM_SUBTITLE]: BaseTypography(TYPOGRAPHY_THEME.MEDIUM_SUBTITLE),
  [TYPOGRAPHY_THEME.SMALL_SUBTITLE]: BaseTypography(TYPOGRAPHY_THEME.SMALL_SUBTITLE),

  [TYPOGRAPHY_THEME.LARGE_BODY]: BaseTypography(TYPOGRAPHY_THEME.LARGE_BODY),
  [TYPOGRAPHY_THEME.MEDIUM_BODY]: BaseTypography(TYPOGRAPHY_THEME.MEDIUM_BODY),
  [TYPOGRAPHY_THEME.SMALL_BODY]: BaseTypography(TYPOGRAPHY_THEME.SMALL_BODY),

  [TYPOGRAPHY_THEME.CAPTION]: BaseTypography(TYPOGRAPHY_THEME.CAPTION),

  [TYPOGRAPHY_THEME.LARGE_BUTTON]: BaseTypography(TYPOGRAPHY_THEME.LARGE_BUTTON),
  [TYPOGRAPHY_THEME.MEDUIM_BUTTON]: BaseTypography(TYPOGRAPHY_THEME.MEDUIM_BUTTON),
  [TYPOGRAPHY_THEME.SMALL_BUTTON]: BaseTypography(TYPOGRAPHY_THEME.SMALL_BUTTON),
};

export default Typography;
