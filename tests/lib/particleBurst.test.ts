import test from "node:test";
import assert from "node:assert/strict";

test("creates the requested particles at the click position", async () => {
  const module = await import("../../src/lib/particleBurst.ts").catch(() => ({}));
  const createBurst = "createBurst" in module ? module.createBurst : undefined;

  assert.equal(typeof createBurst, "function");

  const particles = createBurst(120, 80, 3, () => 0.5);

  assert.equal(particles.length, 3);
  assert.ok(particles.every(({ x, y }) => x === 120 && y === 80));
});
