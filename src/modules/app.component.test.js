import App from "./app.component";

describe("app", () => {
  describe("when render is called", () => {
    it("then should return string", async () => {
      expect.assertions(1);
      const result = await App.render();
      expect(typeof result).toBe("string");
    });
  });
});
