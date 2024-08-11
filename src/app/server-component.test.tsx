import { afterAll, beforeAll, describe, expect, it } from "bun:test";
import { render } from "@testing-library/react";

import { ServerComponent } from "./server-component";

describe("ServerComponent", () => {
  const originalFetch = global.fetch;
  beforeAll(() => {
    global.fetch = async () => {
      return {
        json: async () => ({ message: "testMessage" }),
      } as Response;
    };
  });
  afterAll(() => {
    global.fetch = originalFetch;
  });

  it("should render with the correct message", async () => {
    const { findByText } = render(await ServerComponent());
    const element = await findByText("S: testMessage");
    expect(element).toBeDefined();
  });
});
