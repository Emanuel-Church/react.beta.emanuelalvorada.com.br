import { NavHost } from './contents/sobheader/navHost';
import { NavSocial } from './contents/sobheader/navSocial';

import "./contents/styles/sobHeader.css"

export function SobHeader() {
  return (
    <nav className="sob-header">
      <NavHost/>
      <NavSocial/>
    </nav>
  )
}