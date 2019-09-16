import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '~/styles/colors';
import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment({ data }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);

  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{
            uri: data.provider.avatar
              ? data.provider.avatar.url
              : 'https://api.adorable.io/avatar/50/teste.png',
          }}
        />
        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>

      {data.cancelable && (
        <TouchableOpacity>
          <Icon name="event-busy" size={20} color={colors.secondary} />
        </TouchableOpacity>
      )}
    </Container>
  );
}
