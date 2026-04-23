"use client";

type Callback = (props: ResizeObserverEntry) => void;

const callbacks = new WeakMap<Element, Callback>();

const observer = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const callback = callbacks.get(entry.target);
    if (callback) {
      callback(entry);
    }
  }
});

export function observe(el: Element, callback: Callback) {
  if (callbacks.has(el)) {
    observer.unobserve(el);
  }
  callbacks.set(el, callback);
  observer.observe(el);
}

export function unobserve(el: Element) {
  callbacks.delete(el);
  observer.unobserve(el);
}