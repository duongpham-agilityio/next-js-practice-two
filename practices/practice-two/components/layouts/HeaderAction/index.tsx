'use client';

import { Switch } from '@nextui-org/switch';
import { FaPenFancy } from 'react-icons/fa6';

// Components
import { Button } from '@/components';
// Constants
import { ThemeType } from '@/constants';

export interface HeaderActionProps {
  mode: ThemeType;
}

const HeaderAction = ({ mode }: HeaderActionProps) => (
  <div className="flex flex-1 justify-end gap-2">
    <Switch isSelected={mode === ThemeType.DarkMode} />
    <Button startContent={<FaPenFancy />}>Add blog</Button>
  </div>
);

export default HeaderAction;
