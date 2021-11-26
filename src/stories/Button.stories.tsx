import { Meta, Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import { Button } from "../components/Button/Button";

export default {
  title: "components/Button/Button",
  component: Button,
  argTypes: { handleClick: { action: "event logger" } },
} as Meta;

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const Variation = Template.bind({});
Variation.args = {
  text: "Press Me",
  varient: "black",
};
