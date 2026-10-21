import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type FormEvent, type MouseEvent, type ReactNode } from "react";
import casaArriendo from "@/assets/casa-arriendo-colonial.png.asset.json";
import camion from "@/assets/camion.png";
import carroFamiliar from "@/assets/carro-familiar.png";
import casaMetropolis from "@/assets/casa-metropolis.png.asset.json";
import motoCargadora from "@/assets/moto-cargadora.png.asset.json";
import moto from "@/assets/moto-mandados.png";
import motoBoxer from "@/assets/moto-boxer.png";
import herramientas from "@/assets/herramientas-bagre.png";
import mercado from "@/assets/mercado.png";
import lavadora from "@/assets/lavadora.png";
import canastaAbarrotes from "@/assets/canasta-abarrotes.png";
const WHATSAPP = "573216072852";
const SOCIAL = {
  facebook: "https://facebook.com/elbagreencuentra",
  instagram: "https://instagram.com/elbagreencuentra",
  twitter: "https://x.com/elbagreencuentra",
};
const wa = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "El Bagre Encuentra | Compra, arrienda y alquila" },
      { name: "description", content: "Casas en venta, arriendos, herramientas, carros y motos en El Bagre, Antioquia. Asesoría cercana por WhatsApp." },
      { property: "og:title", content: "El Bagre Encuentra | Compra, arrienda y alquila" },
      { property: "og:description", content: "Casas, arriendos, herramientas, carros y motos en El Bagre, Antioquia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Cat = "todos" | "casas" | "arriendos" | "herramientas" | "vehiculos" | "mudanzas";
const CATS: { id: Cat; label: string; img: string }[] = [
  { id: "todos", label: "Todos", img: casaArriendo.url },
  { id: "casas", label: "Casas en venta", img: casaMetropolis.url },
  { id: "arriendos", label: "Arriendos", img: casaArriendo.url },
  { id: "herramientas", label: "Herramientas", img: herramientas },
  { id: "vehiculos", label: "Carros y motos", img: carroFamiliar },
  { id: "mudanzas", label: "Mudanzas", img: motoCargadora.url },
];
const ITEMS = [
  { cat: "casas", t: "Casa en el barrio Metrópolis", d: "Casa de tres pisos, amplia y bien ubicada, ideal para la familia.", p: "Desde $150.000.000", img: casaMetropolis.url },
  { cat: "arriendos", t: "Casa en el casco urbano", d: "Casa amplia y bonita, con corredor, patio y jardín, lista para vivir en familia.", p: "$800.000 / mes", img: casaArriendo.url },
  { cat: "herramientas", t: "Guadaña y motobomba", d: "Para fincas, lotes y trabajos de campo.", p: "$50.000 / día", img: herramientas },
  { cat: "herramientas", t: "Kit de obra", d: "Pala, carretilla, machete y más.", p: "$25.000 / día", img: herramientas },
  { cat: "herramientas", t: "Lavadora para alquilar", d: "Lavadora de carga frontal, limpia y lista para usar; la llevamos y la recogemos.", p: "$30.000 / día", img: lavadora },
  { cat: "vehiculos", t: "Carro familiar para paseos", d: "Camioneta gris cómoda y espaciosa, para paseos en familia.", p: "$180.000 / día", img: carroFamiliar },
  { cat: "vehiculos", t: "Moto de trabajo para pedidos", d: "Moto ágil con caja de delivery, para domicilios y mandados rápidos por todo El Bagre.", p: "$50.000 / día", img: moto },
  { cat: "vehiculos", t: "Boxer CT negra para alquiler", d: "Moto de trabajo fuerte y económica, se alquila por día para el pueblo y la finca.", p: "$50.000 / día", img: motoBoxer },
  { cat: "mudanzas", t: "Moto cargadora para mudanzas", d: "Moto cargadora de tres ruedas para trasteos y cargues locales, con ayudante.", p: "Desde $250.000", img: motoCargadora.url },
];

const PCATS = ["Todos", "Mercado", "Tecnología y hogar", "Moda y estilo"] as const;
const PRODUCTS = [
  { c: "Mercado", t: "Mercado completo", d: "Arroz, café, frutas y verduras frescas.", p: "$120.000", img: mercado },
  { c: "Mercado", t: "Canasta de abarrotes", d: "Arroz, café, huevos, aceite, panela y plátano.", p: "$85.000", img: canastaAbarrotes },
];

const FAQ = [
  ["¿Cómo publico mi anuncio?", "Escríbenos por WhatsApp con fotos, precio y ubicación. Te ayudamos a publicarlo."],
  ["¿Tiene costo la asesoría?", "La orientación inicial es gratuita. Te explicamos todo antes de cualquier negocio."],
  ["¿Qué necesito para alquilar un carro o moto?", "Documento de identidad, licencia vigente y depósito según el vehículo."],
  ["¿Atienden fuera del casco urbano?", "Sí, cubrimos El Bagre y sus corregimientos. Pregúntanos por tu zona."],
];

function Icon({ name }: { name: "wa" | "fb" | "ig" | "x" }) {
  const paths = {
    wa: "M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.8-1.1-4.6-4-4.8-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.3 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l2 .9c.3.1.5.2.5.3.1.2.1.7-.1 1.3Z",
    fb: "M14 8h3V4h-3c-2.8 0-4 1.7-4 4.3V10H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.3-.6.7-.6Z",
    ig: "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.3-8.2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0ZM16 2H8a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6Zm4 14a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4Z",
    x: "M17.7 3h3.1l-6.8 7.7L22 21h-6.3l-4.9-6.4L5.2 21H2.1l7.3-8.3L2 3h6.4l4.4 5.9Zm-1.1 16.2h1.7L7.5 4.7H5.6Z",
  };
  return <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden><path d={paths[name]} /></svg>;
}

function Socials() {
  const list = [
    { n: "wa" as const, href: wa("Hola, quiero información de El Bagre Encuentra"), cls: "bg-whatsapp", l: "WhatsApp" },
    { n: "fb" as const, href: SOCIAL.facebook, cls: "bg-facebook", l: "Facebook" },
    { n: "ig" as const, href: SOCIAL.instagram, cls: "bg-instagram", l: "Instagram" },
    { n: "x" as const, href: SOCIAL.twitter, cls: "bg-twitter", l: "X (Twitter)" },
  ];
  return (
    <div className="flex gap-3">
      {list.map((s) => (
        <a key={s.n} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.l}
          className={`${s.cls} grid size-11 place-items-center rounded-full text-primary-foreground shadow-3d transition hover:-translate-y-1`}>
          <Icon name={s.n} />
        </a>
      ))}
    </div>
  );
}

const btn = "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition hover:-translate-y-0.5";

function Index() {
  const [cat, setCat] = useState<Cat>("todos");
  const [open, setOpen] = useState<number | null>(0);
  useReveal();
  const [pc, setPc] = useState<(typeof PCATS)[number]>("Todos");
  const list = useMemo(
    () => ITEMS.filter((i) => cat === "todos" || i.cat === cat),
    [cat],
  );

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = `Hola, soy ${f.get("nombre")}.\nServicio: ${f.get("servicio")}\nPresupuesto: ${f.get("presupuesto") || "No indicado"}\nDetalles: ${f.get("mensaje")}`;
    window.open(wa(msg), "_blank");
  };

  return (
    <div className="min-h-screen">
      <header className="glass-dark sticky top-0 z-30 text-primary-foreground backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <a href="#inicio" className="font-display text-2xl font-extrabold text-accent">EL BAGRE <span className="text-primary-foreground">ENCUENTRA</span> 📍</a>
          <nav className="flex flex-wrap gap-5 text-sm font-semibold">
            {[["inicio", "Inicio"], ["servicios", "Servicios"], ["catalogo", "Anuncios"], ["mandados", "Mandados"], ["productos", "Productos"], ["faq", "Preguntas"], ["asesoria", "Asesoría"], ["contacto", "Contacto"]].map(([id, l]) => (
              <a key={id} href={`#${id}`} className="hover:text-accent">{l}</a>
            ))}
          </nav>
        </div>
      </header>

      <section id="inicio" className="bg-hero relative overflow-hidden text-primary-foreground">
        <div className="blob blob-a" /><div className="blob blob-b" /><div className="grid-lines" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Tu municipio, tus oportunidades</p>
            <h1 className="my-5 text-4xl font-extrabold leading-tight md:text-6xl">¡El Bagre <span className="text-shine">encuentra</span> lo que necesitas!</h1>
            <p className="max-w-lg text-lg opacity-90">¿Buscas casa, arriendo, herramientas, carro, moto, camión para mudanza o un mandado rápido? Te ayudamos con buena asesoría, atención cercana y un detalle especial para nuestros clientes.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#catalogo" className={`${btn} bg-gold text-accent-foreground shadow-gold`}>🔎 Explorar anuncios</a>
              <a href={wa("Hola, quiero recibir asesoría")} target="_blank" rel="noopener noreferrer" className={`${btn} bg-whatsapp text-primary-foreground`}><Icon name="wa" /> Escríbenos</a>
            </div>
            <div className="mt-8"><Socials /></div>
          </div>
          <div className="relative grid grid-cols-2 gap-4">
            <Tilt className="glass rounded-3xl p-3 shadow-3d">
              <img src={casaMetropolis.url} alt="" width={1024} height={1024} className="float-3d drop-shadow-2xl" />
            </Tilt>
            <Tilt className="glass flex flex-col rounded-3xl p-3 shadow-3d">
              <img src={motoCargadora.url} alt="Moto cargadora" className="w-full rounded-xl object-cover" />
              <img src={camion} alt="Carro de mudanzas" width={1024} height={1024} className="float-3d mt-2 flex-1 min-h-0 w-auto max-w-full self-center object-contain drop-shadow-2xl" />
            </Tilt>
            <Tilt className="glass rounded-3xl p-3 shadow-3d">
              <img src={moto} alt="" width={1024} height={1024} className="float-3d drop-shadow-2xl" />
            </Tilt>
            <Tilt className="glass rounded-3xl p-3 shadow-3d">
              <img src={herramientas} alt="" width={1024} height={1024} className="float-3d drop-shadow-2xl" />
            </Tilt>
          </div>
        </div>
      </section>

      <section className="border-b bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 text-center md:grid-cols-4">
          {[["+120", "Anuncios"], ["+300", "Clientes felices"], ["24h", "Respuesta rápida"], ["100%", "Bagreño"]].map(([n, l]) => (
            <div key={l}><p className="font-display text-3xl font-extrabold text-secondary">{n}</p><p className="text-sm text-muted-foreground">{l}</p></div>
          ))}
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-6xl px-5 py-16">
        <Title h="¿Qué estás buscando?" p="Todo en un solo lugar, al servicio de nuestra gente." />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
          {CATS.map((c) => (
            <button key={c.id} onClick={() => { setCat(c.id); document.getElementById("catalogo")?.scrollIntoView(); }}
              className={`group rounded-2xl border p-4 text-center shadow-3d transition hover:-translate-y-1 ${cat === c.id ? "bg-primary text-primary-foreground" : "bg-card"}`}>
              <img src={c.img} alt={c.label} loading="lazy" width={1024} height={1024} className="mx-auto h-24 w-auto object-contain transition group-hover:scale-110" />
              <strong className="mt-2 block text-sm">{c.label}</strong>
            </button>
          ))}
        </div>
      </section>

      <section id="catalogo" className="bg-card py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Title h="Encuentra tu próxima oportunidad" p="Consulta, pregunta y recibe orientación personalizada." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.length === 0 && <p className="col-span-full py-8 text-center text-muted-foreground">No encontramos resultados. ¡Escríbenos y lo buscamos por ti!</p>}
            {list.map((i) => (
              <Tilt key={i.t} className="reveal"><article className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-card shadow-3d">
                <div className="bg-card3d grid h-44 place-items-center p-3">
                  <img src={i.img} alt={i.t} loading="lazy" width={1024} height={1024} className="max-h-36 w-auto max-w-full object-contain drop-shadow-xl transition duration-500 group-hover:-translate-y-1 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-bold text-primary">{i.t}</h3>
                  <p className="mb-3 mt-1 text-sm text-muted-foreground">{i.d}</p>
                  <p className="mb-4 text-lg font-bold text-secondary">{i.p}</p>
                  <a href={wa(`Hola, me interesa: ${i.t} (${i.p})`)} target="_blank" rel="noopener noreferrer" className={`${btn} mt-auto bg-secondary text-secondary-foreground`}>
                    <Icon name="wa" /> Me interesa
                  </a>
                </div>
              </article></Tilt>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">Anuncios de ejemplo. Precios y disponibilidad se confirman por WhatsApp.</p>
        </div>
      </section>

      <section id="mandados" className="bg-hero relative overflow-hidden py-16 text-primary-foreground">
        <div className="blob blob-a" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
          <Tilt className="reveal"><img src={moto} alt="Moto de mandados" loading="lazy" width={1024} height={1024} className="float-3d mx-auto max-h-96 w-auto drop-shadow-2xl" /></Tilt>
          <div className="reveal">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">⚡ Nuevo servicio</p>
            <h2 className="my-4 text-4xl font-extrabold md:text-5xl">Mandados <span className="text-shine">ultra veloz</span></h2>
            <p className="text-lg opacity-90">Para lo que necesites: domicilios, compras, pagos, documentos, medicamentos y encomiendas por todo El Bagre.</p>
            <ul className="my-6 grid grid-cols-2 gap-3 text-sm font-semibold">
              {["🛵 Domicilios", "🛒 Compras", "💊 Droguería", "📄 Diligencias", "📦 Encomiendas", "💵 Pagos"].map((x) => <li key={x} className="glass rounded-xl px-4 py-3">{x}</li>)}
            </ul>
            <a href={wa("Hola, necesito un mandado ultra veloz")} target="_blank" rel="noopener noreferrer" className={`${btn} bg-gold text-accent-foreground shadow-gold`}>⚡ Pedir mandado ya</a>
          </div>
        </div>
      </section>

      <section id="productos" className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Title h="Catálogo de productos" p="Productos seleccionados para clientes de buen gusto." />
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {PCATS.map((c) => (
              <button key={c} onClick={() => setPc(c)} className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${pc === c ? "bg-primary text-primary-foreground" : "bg-card hover:bg-muted"}`}>{c}</button>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.filter((x) => pc === "Todos" || x.c === pc).map((x) => (
              <Tilt key={x.t}><article className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-card shadow-3d">
                <div className="bg-card3d relative grid h-48 place-items-center p-3">
                  <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">{x.c}</span>
                  <img src={x.img} alt={x.t} loading="lazy" width={1024} height={1024} className="max-h-40 w-auto max-w-full object-contain drop-shadow-xl transition duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-bold text-primary">{x.t}</h3>
                  <p className="mb-3 mt-1 text-sm text-muted-foreground">{x.d}</p>
                  <p className="mb-4 text-lg font-bold text-secondary">{x.p}</p>
                  <a href={wa(`Hola, quiero pedir: ${x.t} (${x.p})`)} target="_blank" rel="noopener noreferrer" className={`${btn} mt-auto bg-whatsapp text-primary-foreground`}><Icon name="wa" /> Pedir por WhatsApp</a>
                </div>
              </article></Tilt>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Title h="¿Por qué elegirnos?" p="Queremos ser una marca reconocida y querida en El Bagre." />
          <div className="grid gap-5 md:grid-cols-3">
            {[["🤝", "Buena asesoría", "Te escuchamos y orientamos para que elijas la mejor opción."], ["🎁", "Un detalle especial", "Agradecemos tu confianza con un pequeño detalle en cada negocio."], ["📍", "Orgullo bagreño", "Conectamos compradores, propietarios y quienes necesitan alquilar."]].map(([e, h, p]) => (
              <div key={h} className="reveal rounded-2xl bg-card p-7 text-center shadow-3d"><span className="text-4xl">{e}</span><h3 className="my-2 text-xl font-bold text-primary">{h}</h3><p className="text-sm text-muted-foreground">{p}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Title h="Lo que dicen nuestros clientes" p="Opiniones de ejemplo." />
          <div className="grid gap-5 md:grid-cols-3">
            {[["María G.", "Encontré mi arriendo en dos días. ¡Muy amables!"], ["Carlos R.", "Alquilé una moto para trabajar, todo claro y rápido."], ["Luz P.", "Me ayudaron a vender mi casa con buena asesoría."]].map(([n, t]) => (
              <figure key={n} className="reveal rounded-2xl border bg-card p-6 shadow-3d"><p className="text-accent">★★★★★</p><blockquote className="my-3">“{t}”</blockquote><figcaption className="text-sm font-semibold text-primary">{n}</figcaption></figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-hero py-16 text-center text-primary-foreground">
        <div className="mx-auto max-w-3xl px-5"><h2 className="mb-4 text-3xl font-extrabold text-accent">Tu confianza vale mucho ❤️</h2>
          <p className="opacity-90">No queremos ofrecerte solamente un servicio: queremos brindarte una experiencia agradable, atención honesta y acompañamiento. ¡Nuestro propósito es crecer contigo y con nuestro municipio!</p></div>
      </section>

      <section id="faq" className="mx-auto max-w-3xl px-5 py-16">
        <Title h="Preguntas frecuentes" p="Resolvemos tus dudas más comunes." />
        <div className="space-y-3">
          {FAQ.map(([q2, a], i) => (
            <div key={q2} className="rounded-2xl border bg-card shadow-3d">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between p-5 text-left font-semibold text-primary">{q2}<span>{open === i ? "−" : "+"}</span></button>
              {open === i && <p className="px-5 pb-5 text-muted-foreground">{a}</p>}
            </div>
          ))}
        </div>
      </section>

      <section id="asesoria" className="bg-muted py-16">
        <div className="mx-auto max-w-2xl px-5">
          <Title h="Cuéntanos qué necesitas" p="Completa el formulario y envía tu solicitud por WhatsApp." />
          <form onSubmit={submit} className="space-y-4 rounded-3xl bg-card p-7 shadow-3d">
            <Field label="Tu nombre"><input required name="nombre" className="w-full rounded-xl border px-4 py-3" /></Field>
            <Field label="¿Qué servicio necesitas?">
              <select required name="servicio" defaultValue="" className="w-full rounded-xl border bg-card px-4 py-3">
                <option value="" disabled>Selecciona una opción</option>
                {["Comprar una casa", "Arrendar una vivienda", "Alquilar herramientas", "Alquilar un carro", "Alquilar una moto", "Mudanza / trasteo", "Mandado ultra veloz", "Comprar productos", "Publicar una propiedad", "Otra consulta"].map((o) => <option key={o}>{o}</option>)}
              </select>
            </Field>
            <Field label="Presupuesto aproximado (opcional)"><input name="presupuesto" className="w-full rounded-xl border px-4 py-3" /></Field>
            <Field label="Cuéntanos un poco más"><textarea required name="mensaje" rows={4} className="w-full rounded-xl border px-4 py-3" /></Field>
            <button className={`${btn} w-full bg-whatsapp text-primary-foreground`}><Icon name="wa" /> Enviar solicitud por WhatsApp</button>
          </form>
        </div>
      </section>

      <section id="contacto" className="flex min-h-[calc(100svh-4rem)] items-center justify-center py-16 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-4xl font-extrabold text-primary md:text-5xl">¡Hagamos negocios en El Bagre!</h2>
          <p className="my-6 text-lg text-muted-foreground md:text-xl">¿Tienes una casa para vender, una vivienda para arrendar o herramientas y vehículos para alquilar?</p>
          <a href={wa("Hola, quiero publicar mi anuncio")} target="_blank" rel="noopener noreferrer" className={`${btn} px-8 py-4 text-lg bg-gold text-accent-foreground shadow-gold`}>Quiero publicar mi anuncio</a>
          <p className="mt-8 text-lg font-semibold">📍 El Bagre, Antioquia, Colombia</p>
          <div className="mt-8 flex justify-center"><Socials /></div>
        </div>
      </section>

      <footer className="bg-deep px-5 py-8 text-center text-sm text-primary-foreground/80">
        <p className="font-display text-lg font-extrabold text-accent">EL BAGRE ENCUENTRA</p>
        <p>Compra, arrienda, alquila y encuentra nuevas oportunidades.</p>
        <p className="mt-2">© {new Date().getFullYear()} El Bagre Encuentra. Todos los derechos reservados.</p>
      </footer>

      <a href={wa("Hola, quisiera más información")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
        className={`${btn} fixed bottom-5 right-5 z-40 rounded-full bg-whatsapp text-primary-foreground shadow-3d`}><Icon name="wa" /> WhatsApp</a>
    </div>
  );
}

function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateZ(0)`;
    el.style.setProperty("--mx", `${(x + 0.5) * 100}%`); el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };
  const leave = () => { if (ref.current) ref.current.style.transform = ""; };
  return <div ref={ref} onMouseMove={move} onMouseLeave={leave} className={`tilt-3d ${className}`}>{children}</div>;
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Title({ h, p }: { h: string; p: string }) {
  return <div className="reveal mb-10 text-center"><h2 className="text-3xl font-extrabold text-primary md:text-4xl">{h}</h2><p className="mt-2 text-muted-foreground">{p}</p></div>;
}
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-1.5 block font-semibold">{label}</span>{children}</label>;
}
