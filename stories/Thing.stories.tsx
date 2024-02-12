import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Sznavbar } from '../src';

const meta: Meta = {
  title: 'Welcome',
  component: Sznavbar,
  // argTypes можно использовать для управления аргументами, если ваш компонент их принимает.
  // Поскольку в вашем случае пропсов нет, этот раздел можно опустить или закомментировать.
  // argTypes: {
  //   children: {
  //     control: {
  //       type: 'text',
  //     },
  //   },
  // },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

// Для компонента без пропсов Template можно просто рендерить Sznavbar без передачи args.
const Template: Story = () => <Sznavbar />;

export const Default = Template.bind({});
// Поскольку нет пропсов, Default.args можно опустить или закомментировать.
// Default.args = {};
