import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { Route } from "@/routes/index";

// jsdom has no IntersectionObserver. This stub reveals every element it is asked to
// observe, the way a browser does for elements already inside the viewport.
class StubObserver {
  cb: IntersectionObserverCallback;
  constructor(cb: IntersectionObserverCallback) {
    this.cb = cb;
  }
  observe(el: Element) {
    this.cb([{ isIntersecting: true, target: el } as IntersectionObserverEntry], this as unknown as IntersectionObserver);
  }
  unobserve() {}
  disconnect() {}
}

describe("Anuncios: las tarjetas se muestran al filtrar por categoría", () => {
  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it("muestra cada anuncio con su imagen al volver a una categoría ya usada", () => {
    vi.stubGlobal("IntersectionObserver", StubObserver);
    Element.prototype.scrollIntoView = vi.fn();

    const Index = Route.options.component as unknown as React.ComponentType;
    const { container } = render(<Index />);
    const cards = () => Array.from(container.querySelectorAll("#catalogo article"));

    fireEvent.click(screen.getByText("Herramientas"));
    expect(cards()).toHaveLength(3);

    fireEvent.click(screen.getByText("Todos"));
    expect(cards()).toHaveLength(9);

    for (const card of cards()) {
      expect(card.closest(".reveal")).toHaveClass("is-visible");
    }
  });
});
