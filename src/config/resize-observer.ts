"use client";
type Callback = (props: ResizeObserverEntry) => void;

const callbacks = new WeakMap<Element, Callback>();

const observer = typeof window !== 'undefined' && new ResizeObserver((entries) => {
  for (const entry of entries) {
    const callback = callbacks.get(entry.target);
    if (callback) {
      callback(entry);
    }
  }
});

export function observe(el: Element, callback: Callback) {
  if (callbacks.has(el) && observer) {
    observer.unobserve(el);
  }
  callbacks.set(el, callback);
  observer && observer.observe(el);
}

export function unobserve(el: Element) {
  callbacks.delete(el);
  observer &&  observer.unobserve(el);
}