import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import Stack from "../components/Stack";

export default {
  title: "components/Stack",
  component: Stack,
  argTypes: { numberOfChildren: { type: "number", defaultValue: 4 } },
} as Meta;

const Template: Story<ComponentProps<typeof Stack>> = ({
  numberOfChildren,
  ...args
}) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((sm) => (
      <div style={{ width: "50px", height: "50px", background: "red" }}>
        {JSON.stringify(sm)}
      </div>
    ))}
  </Stack>
);

export const Stacker = Template.bind({});
Stacker.args = {
  spacing: 2,
  wrap: false,
  direction: "row",
};
