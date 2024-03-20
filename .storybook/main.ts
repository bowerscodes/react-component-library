import type { StorybookConfig } from "@storybook/react-webpack5";

import path from "path";

const getAbsolutePath = (packageName: string): any =>
  path.dirname(require.resolve(path.join(packageName, "package.json")));

const config: StorybookConfig = {
  stories: [
    "../src/Introduction.stories.mdx",
    "../src/**/*.mdx", 
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials" ,
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../src"],
};
export default config;
