import { NavHost } from './contents/sobheader/navHost.js';
import { NavSocial } from './contents/sobheader/navSocial.js';

import "./contents/styles/sobHeader.css"

export function SobHeader() {
  return (
    <nav className="sob-header">
      <NavHost/>
      <NavSocial/>
    </nav>
  )
}