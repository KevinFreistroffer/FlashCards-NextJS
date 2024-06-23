// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { loadEnvConfig } from "@next/env";

export default async () => {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);
};
