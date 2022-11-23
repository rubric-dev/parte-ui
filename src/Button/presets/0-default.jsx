import React from 'react';
import ActionAddIcon from '../../parte-icons/Icons/ActionAddIcon';
import ActionArchiveIcon from '../../parte-icons/Icons/ActionArchiveIcon';
import Button from '../Button';

export default (
  <Button
    uxpId="Button-1"
    variant="primary"
    leftSlot={<ActionArchiveIcon uxpId="Icon-1" />}
    rightSlot={<ActionAddIcon uxpId="Icon-2" />}
  >
    테스트 버튼입니다.
  </Button>
);
