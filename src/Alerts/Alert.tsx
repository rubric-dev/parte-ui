import { useCallback } from 'react';
import { IconButton } from '../IconButton';
import ActionCrossIcon from '../parte-icons/Icons/ActionCrossIcon';
import AlertDangerIcon from '../parte-icons/Icons/AlertDangerIcon';
import AlertInfoIcon from '../parte-icons/Icons/AlertInfoIcon';
import AlertSuccessIcon from '../parte-icons/Icons/AlertSuccessIcon';
import AlertWarningIcon from '../parte-icons/Icons/AlertWarningIcon';
import * as Styled from './Alert.styled';
import { AlertProps } from './Alert.types';

const Alert = (props: AlertProps) => {
  const renderIcon = useCallback(
    (currentStatus: Status) => {
      return (
        <>
          {currentStatus === 'success' && <AlertSuccessIcon size={16} />}
          {currentStatus === 'info' && <AlertInfoIcon size={16} />}
          {currentStatus === 'warning' && <AlertWarningIcon size={16} />}
          {currentStatus === 'error' && <AlertDangerIcon size={16} />}
        </>
      );
    },
    [props.status]
  );

  if (props.type === 'alert-inline') {
    return (
      <Styled.Alert type={props.type} status={props.status}>
        {renderIcon(props.status)}
        <Styled.Title>{props.message}</Styled.Title>
      </Styled.Alert>
    );
  }
  if (props.type === 'toast') {
    return (
      <Styled.Alert
        type={props.type}
        status={props.status}
        onClose={props.onClose}
      >
        <Styled.InfoWrap>
          {renderIcon(props.status)}
          <Styled.Header>
            <Styled.Title>{props.title}</Styled.Title>
            <IconButton
              variant="minimal"
              size={24}
              Icon={<ActionCrossIcon size={12} color={props.status} />}
            />
            {/* <ActionCrossIcon
              size={16}
              onClick={props.onClose}
              style={{ cursor: 'pointer' }}
            /> */}
          </Styled.Header>
        </Styled.InfoWrap>
        {props.description && (
          <Styled.Description>{props.description}</Styled.Description>
        )}
      </Styled.Alert>
    );
  }

  return (
    <Styled.Alert type={props.type} status={props.status}>
      <Styled.InfoWrap>
        {renderIcon(props.status)}
        <Styled.Title>{props.title}</Styled.Title>
      </Styled.InfoWrap>
      {props.description && (
        <Styled.Description>{props.description}</Styled.Description>
      )}
    </Styled.Alert>
  );
};

export default Alert;
