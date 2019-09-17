import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import colors from '~/styles/colors';

export default styled(LinearGradient).attrs({
  colors: [colors.primaryDark, colors.primaryLight],
})`
  flex: 1;
`;
