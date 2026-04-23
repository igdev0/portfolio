"use client";

const callbacks = new Map<Element, () => void>();

const observer = new ResizeObserver((entries) => {
  for (const entry of entries) {
    callbacks.get(entry.target)?.();
  }
});

export function observe(el: Element, cb: () => void) {
  callbacks.set(el, cb);
  observer.observe(el);
}

export function unobserve(el: Element) {
  callbacks.delete(el);
  observer.unobserve(el);
}