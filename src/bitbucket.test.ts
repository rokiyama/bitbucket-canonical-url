import { describe, test, expect } from "vitest";
import { extractPath as extractPath } from "./bitbucket";

describe("extractPath", () => {
  test.each([
    [
      "Has a branchName",
      "https://bitbucket.org/foo/bar/pull-requests/123/branch-foo",
      "123",
    ],
    [
      "Has a branchName and a fragment",
      "https://bitbucket.org/foo/bar/pull-requests/123#comment-123456789",
      "123#comment-123456789",
    ],
    ["No match", "", undefined],
  ])(
    "[$name] should extract '$expected' from '$input'",
    (name, input, expected) => {
      expect(extractPath(input), name).toStrictEqual(expected);
    }
  );
});
