import { expect } from "chai";
import Router from "./Router";
import sinon from "sinon";


describe("Router", () => {
  const originalForward = window.history.forward;
  const originalBack = window.history.back;

  beforeEach(() => {
    Router.reset();
    window.history.forward = sinon.fake();
    window.history.back = sinon.fake();
  });

  afterEach(() => {
    window.history.forward = originalForward;
    window.history.back = originalBack;
  });

  it("forward", () => {
    Router.forward();

    expect((window.history.forward as any).callCount).to.eq(1);
  });

  it("back", () => {
    Router.back();

    expect((window.history.back as any).callCount).to.eq(1);
  });

  it("should go to passed location on popstate", () => {
    if (typeof window.onpopstate === "function") {
      window.onpopstate({currentTarget: window} as unknown as PopStateEvent);
    }
  });
});
