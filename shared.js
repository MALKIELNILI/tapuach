// חיבור משותף ל-Firebase ולכל המסכים של "תפוח"
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBNmXF_pqQqoglEUy0quLrmIXpg_D_4X9s",
  authDomain: "tapuach-punch.firebaseapp.com",
  projectId: "tapuach-punch",
  storageBucket: "tapuach-punch.firebasestorage.app",
  messagingSenderId: "563757695082",
  appId: "1:563757695082:web:67fc685a1e30cc8455ca13",
};

// חשבון הבעלים. הסיסמה היא "הקוד הסודי" שמזינים במסך הקופה
export const OWNER_EMAIL = "tapuach-owner@example.com";
export const SITE_URL = "https://malkielnili.github.io/tapuach/";

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// ברירות מחדל, עד שהבעלים שומר הגדרות
export const DEFAULT_CONFIG = { stampsNeeded: 10, rewardText: "מיץ חינם" };

// מזהה כרטיס אקראי וקצר (בלי תווים מבלבלים)
export function randomCardId(len = 8) {
  const chars = "abcdefghjkmnpqrstuvwxyz23456789";
  const bytes = crypto.getRandomValues(new Uint8Array(len));
  return Array.from(bytes, b => chars[b % chars.length]).join("");
}

export function cleanPhone(raw) {
  return (raw || "").replace(/\D/g, "");
}

// סמל תפוח (SVG) בצבע נתון
export function appleSvg(color = "#a8c920", size = 28) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true"><path fill="${color}" d="M16.6 12.7c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8s-1.8-.8-3-.8C7.2 7.6 5.7 8.5 5 9.9c-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.2.9-1.2 1.2-2.4 1.3-2.5-.1 0-2.5-1-2.5-3.9zM14.4 5.8c.6-.8 1-1.8.9-2.8-.9 0-2 .6-2.6 1.4-.6.7-1.1 1.7-.9 2.7 1 .1 2-.5 2.6-1.3z"/></svg>`;
}

export const BASE_CSS = `
  :root { --lime:#a8c920; --lime-dark:#7d9a12; --ink:#2b2b2b; --muted:#6b6b6b; }
  * { box-sizing: border-box; }
  body { margin:0; font-family: "Segoe UI", Arial, "Assistant", sans-serif; background:#fff; color:var(--ink); direction:rtl; }
  header { background:var(--lime); color:#fff; padding:18px 16px; text-align:center; }
  header h1 { margin:4px 0 0; font-size:1.4rem; }
  header small { opacity:.95; }
  main { max-width:460px; margin:0 auto; padding:18px 16px 40px; }
  .card { border:2px solid var(--lime); border-radius:18px; padding:16px; margin-bottom:16px; background:#fff; }
  label { display:block; font-weight:600; margin:10px 0 4px; }
  input, select { width:100%; padding:12px; font-size:1.05rem; border:1px solid #cfcfcf; border-radius:10px; }
  button { width:100%; padding:14px; font-size:1.1rem; font-weight:700; border:none; border-radius:12px; background:var(--lime); color:#fff; cursor:pointer; margin-top:10px; }
  button.secondary { background:#fff; color:var(--lime-dark); border:2px solid var(--lime); }
  button.danger { background:#fff; color:#c0392b; border:2px solid #c0392b; }
  button:disabled { opacity:.5; }
  .msg { margin-top:10px; padding:10px; border-radius:10px; background:#f4fae0; color:var(--lime-dark); font-weight:600; display:none; }
  .msg.show { display:block; }
  .msg.err { background:#fde8e8; color:#c0392b; }
  .stamps { display:grid; grid-template-columns:repeat(5,1fr); gap:10px; justify-items:center; margin:14px 0; }
  .stamp { width:52px; height:52px; border-radius:50%; border:2px dashed #cfcfcf; display:flex; align-items:center; justify-content:center; }
  .stamp.on { border:2px solid var(--lime); background:#f4fae0; }
  .muted { color:var(--muted); font-size:.92rem; }
  .row { display:flex; justify-content:space-between; align-items:center; gap:10px; }
  .big { font-size:1.6rem; font-weight:800; }
  .list-item { padding:12px; border:1px solid #e3e3e3; border-radius:12px; margin-top:8px; cursor:pointer; }
`;

export function showMsg(el, text, isErr = false) {
  el.textContent = text;
  el.className = "msg show" + (isErr ? " err" : "");
}
