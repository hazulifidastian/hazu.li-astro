import test from "node:test";
import assert from "node:assert/strict";

import { getAlternateLocalePath } from "../../src/lib/routeMaps.ts";

test("maps home route from id to en", () => {
  assert.equal(getAlternateLocalePath("/", "en"), "/en");
});

test("maps home route from en to id", () => {
  assert.equal(getAlternateLocalePath("/en", "id"), "/");
});

test("maps projects route between locales", () => {
  assert.equal(getAlternateLocalePath("/proyek", "en"), "/en/projects");
  assert.equal(getAlternateLocalePath("/en/projects", "id"), "/proyek");
});

test("maps contact route between locales", () => {
  assert.equal(getAlternateLocalePath("/kontak", "en"), "/en/contact");
  assert.equal(getAlternateLocalePath("/en/contact", "id"), "/kontak");
});

test("falls back to target locale home for unknown routes", () => {
  assert.equal(getAlternateLocalePath("/foo", "en"), "/en");
  assert.equal(getAlternateLocalePath("/en/foo", "id"), "/");
});
