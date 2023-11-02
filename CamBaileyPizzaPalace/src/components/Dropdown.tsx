import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';


function DropdownMenu() {
    const onClick: MenuProps['onClick'] = ({ key }) => {
        message.info(`Click on item ${key}`);
      };
      
    const items: MenuProps['items'] = [
    {
        label: 'PIZZA PIE',
        key: '1',
    },
        {
          label: 'YUMMY YUMMY CHICKEN WINGS',
          key: '2',
        },
        {
          label: 'coleslaw......',
          key: '3',
        },
      ];
    
    
    return  <Dropdown menu={{ items, onClick }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me, Click menu item
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>  

}

export default DropdownMenu; 