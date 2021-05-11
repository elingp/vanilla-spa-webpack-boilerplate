import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { getRoute, getParsedRoute, setVisible } from "./common";

function setupLocation(url) {
  delete window.location;
  window.location = {
    href: url,
  };
}

function setupDOMVisible() {
  document.body.innerHTML = `
  <div id="app" data-testid="dom-visible"></div>
  `;
}

describe("getRoute()", () => {
  describe("when URL is https://www.example.com/", () => {
    it("then should return { resource: '', id: undefined, verb: undefined }", () => {
      expect.assertions(1);
      setupLocation("https://www.example.com/");
      expect(getRoute()).toStrictEqual({
        resource: "",
        id: undefined,
        verb: undefined,
      });
    });
  });
  describe("when URL is https://www.example.com/#/post", () => {
    it("then should return { resource: 'post', id: undefined, verb: undefined }", () => {
      expect.assertions(1);
      setupLocation("https://www.example.com/#/post");
      expect(getRoute()).toStrictEqual({
        resource: "post",
        id: undefined,
        verb: undefined,
      });
    });
    it("then should has resource: 'post'", () => {
      expect.assertions(1);
      setupLocation("https://www.example.com/#/post");
      expect(getRoute().resource).toStrictEqual("post");
    });
    it("then should has id: undefined", () => {
      expect.assertions(1);
      setupLocation("https://www.example.com/#/post");
      expect(getRoute().id).toBeUndefined();
    });
    it("then should has verb: undefined", () => {
      expect.assertions(1);
      setupLocation("https://www.example.com/#/post");
      expect(getRoute().verb).toBeUndefined();
    });
  });
  describe("when URL is https://www.example.com/#/post/5", () => {
    it("then should return { resource: 'post', id: 5, verb: undefined }", () => {
      expect.assertions(1);
      setupLocation("https://www.example.com/#/post/5");
      expect(getRoute()).toStrictEqual({
        resource: "post",
        id: "5",
        verb: undefined,
      });
    });
    it("then should has resource: 'post'", () => {
      expect.assertions(1);
      setupLocation("https://www.example.com/#/post/5");
      expect(getRoute().resource).toStrictEqual("post");
    });
    it("then should has id: 5", () => {
      expect.assertions(1);
      setupLocation("https://www.example.com/#/post/5");
      expect(getRoute().id).toStrictEqual("5");
    });
    it("then should has verb: undefined", () => {
      expect.assertions(1);
      setupLocation("https://www.example.com/#/post/5");
      expect(getRoute().verb).toBeUndefined();
    });
  });
  describe("when URL is https://www.example.com/#/post/5/edit", () => {
    it("then should return { resource: 'post', id: 5, verb: 'edit' }", () => {
      expect.assertions(1);
      setupLocation("https://www.example.com/#/post/5/edit");
      expect(getRoute()).toStrictEqual({
        resource: "post",
        id: "5",
        verb: "edit",
      });
    });
    it("then should has resource: 'post'", () => {
      expect.assertions(1);
      setupLocation("https://www.example.com/#/post/5/edit");
      expect(getRoute().resource).toStrictEqual("post");
    });
    it("then should has id: 5", () => {
      expect.assertions(1);
      setupLocation("https://www.example.com/#/post/5/edit");
      expect(getRoute().id).toStrictEqual("5");
    });
    it("then should has verb: undefined", () => {
      expect.assertions(1);
      setupLocation("https://www.example.com/#/post/5/edit");
      expect(getRoute().verb).toStrictEqual("edit");
    });
  });
});

describe("getParsedRoute()", () => {
  describe("when URL is https://www.example.com/", () => {
    it("then should return '/'", () => {
      expect.assertions(1);
      setupLocation("https://www.example.com/");
      expect(getParsedRoute()).toStrictEqual("/");
    });
  });
  describe("when URL is https://www.example.com/#/post", () => {
    it("then should return '/post'", () => {
      expect.assertions(1);
      setupLocation("https://www.example.com/#/post");
      expect(getParsedRoute()).toStrictEqual("/post");
    });
  });
  describe("when URL is https://www.example.com/#/post/5", () => {
    it("then should return '/post/:id'", () => {
      expect.assertions(1);
      setupLocation("https://www.example.com/#/post/5");
      expect(getParsedRoute()).toStrictEqual("/post/:id");
    });
  });
  describe("when URL is https://www.example.com/#/post/5/edit", () => {
    it("then should return '/post/:id/edit'", () => {
      expect.assertions(1);
      setupLocation("https://www.example.com/#/post/5/edit");
      expect(getParsedRoute()).toStrictEqual("/post/:id/edit");
    });
  });
});

describe("setVisible()", () => {
  describe("when element is instanceof HTMLElement and visible is true", () => {
    it("then element should be visible", () => {
      expect.assertions(1);
      setupDOMVisible();
      setVisible(document.getElementById("app"), true);
      expect(screen.getByTestId("dom-visible")).toBeVisible();
    });
    it("then element should has style display: block", () => {
      expect.assertions(1);
      setupDOMVisible();
      setVisible(document.getElementById("app"), true);
      expect(screen.getByTestId("dom-visible")).toHaveStyle("display: block");
    });
  });
  describe("when element is instanceof HTMLElement and visible is false", () => {
    it("then element should be not visible", () => {
      expect.assertions(1);
      setupDOMVisible();
      setVisible(document.getElementById("app"), false);
      expect(screen.getByTestId("dom-visible")).not.toBeVisible();
    });
    it("then element should has style display: none", () => {
      expect.assertions(1);
      setupDOMVisible();
      setVisible(document.getElementById("app"), false);
      expect(screen.getByTestId("dom-visible")).toHaveStyle("display: none");
    });
  });
  describe("when element is not instanceof HTMLElement and visible is Boolean", () => {
    it("then should throws error", () => {
      expect.assertions(1);
      expect(() => setVisible("notHTMLElement", true)).toThrow(Error);
    });
  });
  describe("when element is instanceof HTMLElement and visible is not Boolean", () => {
    it("then should throws error", () => {
      expect.assertions(1);
      expect(() =>
        setVisible(document.getElementById("app"), "notBoolean")
      ).toThrow(Error);
    });
  });
});
