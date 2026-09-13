import { useState } from "react";
import { ShoppingCart, Minus, Plus, Search, X, Image as ImageIcon } from "lucide-react";
import { T, CATEGORIES } from "../data/site";
import { SeaIcon, WaveDivider, Pill, Button, StepIndicator, inputStyle, stepperBtn } from "../components/ui";
import { money, orderTypeLabel } from "../utils/helpers";
import type { Cart, MenuItem, OrderType } from "../types";

interface MenuRowProps {
  item: MenuItem;
  qty: number;
  onAdd: () => void;
  onInc: () => void;
  onDec: () => void;
  last: boolean;
}

function MenuRow({ item, qty, onAdd, onInc, onDec, last }: MenuRowProps) {
  const icon = CATEGORIES.find((c) => c.id === item.category)?.icon || "fish";
  return (
    <div className="tw-menu-row" style={{ display: "flex", gap: 16, padding: "22px 0", borderBottom: last ? "none" : `1px solid ${T.line}`, opacity: item.available ? 1 : 0.5 }}>
      <div className="tw-menu-image" style={{ width: 150, height: 112, borderRadius: 12, background: `linear-gradient(145deg, ${T.tideLight}, #fff8e9)`, border: `1px solid ${T.line}`, flexShrink: 0, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        {item.imageUrl ? (
          <img src={item.imageUrl} alt={item.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        ) : (
          <>
            <SeaIcon type={icon} size={52} color={T.tide} />
            <span style={{ position: "absolute", left: 10, bottom: 8, background: "rgba(255,255,255,.88)", borderRadius: 999, padding: "3px 8px", fontSize: 10.5, fontWeight: 700, color: T.ink }}>Bayah Fresh</span>
          </>
        )}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="tw-menu-title-row" style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <span className="tw-menu-name" style={{ fontFamily: "Fraunces, serif", fontWeight: 600, fontSize: 18.5, color: T.ink, whiteSpace: "nowrap" }}>{item.name}</span>
          <span style={{ flex: 1, borderBottom: `1.5px dotted ${T.line}`, marginBottom: 5, minWidth: 20 }} />
          <span style={{ fontWeight: 700, color: T.coralDeep, fontSize: 15.5, whiteSpace: "nowrap" }}>{money(item.price)}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 5, flexWrap: "wrap" }}>
          {item.popular && <Pill tone="brass">Popular</Pill>}
          {!item.available && <Pill tone="coral">Sold out</Pill>}
        </div>
        <p style={{ fontSize: 13.5, color: T.ink60, margin: "6px 0 12px", lineHeight: 1.55, maxWidth: 520 }}>{item.desc}</p>
        {item.available && (
          qty > 0 ? (
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: T.sand, borderRadius: 8, padding: "5px 8px" }}>
              <button onClick={onDec} style={stepperBtn}><Minus size={13} /></button>
              <span style={{ fontWeight: 700, color: T.ink, minWidth: 14, textAlign: "center" }}>{qty}</span>
              <button onClick={onInc} style={stepperBtn}><Plus size={13} /></button>
            </div>
          ) : (
            <Button variant="dark" size="sm" onClick={onAdd}><Plus size={14} /> Add to Cart</Button>
          )
        )}
      </div>
    </div>
  );
}

interface MenuPageProps {
  menuItems: MenuItem[];
  cart: Cart;
  addToCart: (item: MenuItem) => void;
  incItem: (id: string) => void;
  decItem: (id: string) => void;
  orderType: OrderType | null;
  goCart: () => void;
  cartTotal: number;
  cartCount: number;
  step?: number;
}

export default function MenuPage({ menuItems, cart, addToCart, incItem, decItem, orderType, goCart, cartTotal, cartCount, step }: MenuPageProps) {
  const [activeCat, setActiveCat] = useState(CATEGORIES[0].id);
  const [query, setQuery] = useState("");
  const [showPrintedMenu, setShowPrintedMenu] = useState(false);

  const searching = query.trim() !== "";
  const filtered = menuItems.filter((m) =>
    searching
      ? `${m.name} ${m.desc}`.toLowerCase().includes(query.toLowerCase())
      : m.category === activeCat
  );
  const activeCategory = CATEGORIES.find((c) => c.id === activeCat);
  const countFor = (id: string) => menuItems.filter((m) => m.category === id).length;

  return (
    <div style={{ background: T.sand, minHeight: "80vh" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "30px 20px 20px" }}>
        {typeof step === "number" && <StepIndicator step={step} />}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 22,
          }}
        >
          <div>
            <div style={{ color: T.coralDeep, fontWeight: 700, fontSize: 12.5, marginBottom: 6, textTransform: "uppercase", letterSpacing: ".08em" }}>
              {orderType ? `Ordering — ${orderTypeLabel(orderType)}` : "Bayah Seafood Restaurant"}
            </div>
            <h1 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(30px,4vw,44px)", fontWeight: 650, color: T.ink, margin: 0 }}>
              Our Menu
            </h1>
            <p style={{ color: T.ink60, margin: "7px 0 0", maxWidth: 650, fontSize: 14 }}>
              Fresh seafood, Bayah specials, family platters and refreshments — based on our latest printed menu.
            </p>
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => setShowPrintedMenu(true)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "11px 15px",
                borderRadius: 10,
                border: `1.5px solid ${T.coral}`,
                background: "#fff",
                color: T.coralDeep,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <ImageIcon size={16} /> View Printed Menu
            </button>

            <div style={{ position: "relative" }}>
              <Search size={15} color={T.ink40} style={{ position: "absolute", left: 12, top: 12 }} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search dishes"
                style={{ ...inputStyle, paddingLeft: 34, width: 220 }}
              />
            </div>
          </div>
        </div>

        <div
          className="tw-cat-chips"
          style={{ gap: 8, overflowX: "auto", paddingBottom: 12, marginBottom: 6 }}
        >
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => { setActiveCat(c.id); setQuery(""); }}
              style={{
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                gap: 7,
                padding: "9px 15px",
                borderRadius: 22,
                border: `1.5px solid ${activeCat === c.id && !searching ? T.ink : T.line}`,
                background: activeCat === c.id && !searching ? T.ink : "#fff",
                color: activeCat === c.id && !searching ? "#fff" : T.ink,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              <SeaIcon type={c.icon} size={15} color={activeCat === c.id && !searching ? "#fff" : T.tide} />
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div
        className="tw-menu-layout"
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 20px 100px",
          display: "grid",
          gridTemplateColumns: "235px 1fr",
          gap: 34,
          alignItems: "start",
        }}
      >
        <nav
          className="tw-cat-sidebar"
          style={{
            background: "#fff",
            border: `1.5px solid ${T.line}`,
            borderRadius: 14,
            padding: 10,
            position: "sticky",
            top: 96,
          }}
        >
          {CATEGORIES.map((c) => {
            const active = activeCat === c.id && !searching;
            return (
              <button
                key={c.id}
                onClick={() => { setActiveCat(c.id); setQuery(""); }}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "11px 12px",
                  borderRadius: 9,
                  border: "none",
                  borderLeft: active ? `3px solid ${T.coral}` : "3px solid transparent",
                  background: active ? T.sand : "transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  marginBottom: 2,
                }}
              >
                <SeaIcon type={c.icon} size={17} color={active ? T.coral : T.tide} />
                <span style={{ flex: 1, fontSize: 13.5, fontWeight: active ? 700 : 500, color: T.ink }}>
                  {c.label}
                </span>
                <span style={{ fontSize: 11.5, color: T.ink40 }}>{countFor(c.id)}</span>
              </button>
            );
          })}
        </nav>

        <div>
          <div style={{ marginBottom: 12 }}>
            <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 25, fontWeight: 650, color: T.ink, margin: 0 }}>
              {searching ? `Results for "${query}"` : activeCategory?.label}
            </h2>
            <div style={{ marginTop: 8 }}><WaveDivider color={T.line} bg="transparent" /></div>
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: T.ink60 }}>No dishes found.</div>
          ) : (
            <div style={{ background: "#fff", border: `1.5px solid ${T.line}`, borderRadius: 14, padding: "4px 22px" }}>
              {filtered.map((item, i) => (
                <MenuRow
                  key={item.id}
                  item={item}
                  qty={cart[item.id]?.qty || 0}
                  last={i === filtered.length - 1}
                  onAdd={() => addToCart(item)}
                  onInc={() => incItem(item.id)}
                  onDec={() => decItem(item.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {cartCount > 0 && (
        <div style={{ position: "sticky", bottom: 16, display: "flex", justifyContent: "center", padding: "0 20px", zIndex: 20 }}>
          <button
            onClick={goCart}
            style={{
              background: T.ink,
              color: "#fff",
              border: "none",
              borderRadius: 40,
              padding: "14px 26px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0,0,0,.25)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <ShoppingCart size={17} />
            <span style={{ fontWeight: 700, fontSize: 14 }}>{cartCount} item{cartCount > 1 ? "s" : ""} · {money(cartTotal)}</span>
            <span style={{ fontWeight: 700, fontSize: 14, color: T.tideLight }}>View Cart →</span>
          </button>
        </div>
      )}

      {showPrintedMenu && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Bayah Seafood printed menu"
          onClick={() => setShowPrintedMenu(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "rgba(0,0,0,.78)",
            padding: "24px 16px",
            overflowY: "auto",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: 1050,
              margin: "0 auto",
              background: "#fff",
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 24px 80px rgba(0,0,0,.4)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderBottom: `1px solid ${T.line}`, position: "sticky", top: 0, background: "#fff", zIndex: 2 }}>
              <div>
                <strong style={{ color: T.ink }}>Bayah Seafood — Printed Menu</strong>
                <div style={{ fontSize: 12, color: T.ink60 }}>Tap outside or × to close</div>
              </div>
              <button
                onClick={() => setShowPrintedMenu(false)}
                aria-label="Close printed menu"
                style={{ width: 38, height: 38, borderRadius: 10, border: `1px solid ${T.line}`, background: T.sand, display: "grid", placeItems: "center", cursor: "pointer" }}
              >
                <X size={18} color={T.ink} />
              </button>
            </div>
            <div style={{ padding: 12, background: T.sand }}>
              <img src="/menu/bayah-menu-page-1.jpg" alt="Bayah Seafood printed menu page 1" style={{ width: "100%", height: "auto", borderRadius: 8, marginBottom: 12 }} />
              <img src="/menu/bayah-menu-page-2.jpg" alt="Bayah Seafood printed menu page 2" style={{ width: "100%", height: "auto", borderRadius: 8 }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
