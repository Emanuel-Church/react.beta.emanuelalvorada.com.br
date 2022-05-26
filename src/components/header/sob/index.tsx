import { NavHost } from "./Sov/navhost";
import { NavSocial } from "./Sov/navsocial";

import "/src/assets/styles/4pCnu7sB/sobheader.css";

export function SobHeader() {
  return (
    <section className="__ime-sobheader">
      <nav className="sob-header">
        <NavHost />
        <NavSocial />
      </nav>
    </section>
  );
}
