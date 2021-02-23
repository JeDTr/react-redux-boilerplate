import storage from "../storage";

describe("utils/storage", () => {
  it("demo test", () => {
    storage.set("key", 1);

    expect(storage.get("key")).toBe(1);

    storage.remove("key");

    expect(storage.get("key")).toBeUndefined();
  });
});
