import type { StorybookConfig } from "@storybook/react-webpack5";

import path from "path";

const getAbsolutePath = (packageName: string): any =>
  path.dirname(require.resolve(path.join(packageName, "package.json")));

const config: StorybookConfig = {
  stories: [
    "../src/components/**/*.mdx", 
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    getAbsolutePath("@storybook/addon-essentials") ,
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
};
export default config;
