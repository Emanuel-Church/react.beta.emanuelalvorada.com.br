import { NavHostSF } from "./contents/subfooter/navHost";

import "/src/contents/script/copyright.js";
import "/src/contents/styles/subFooter.css";

export function SubFooter() {
  return (
    <div className="sub-footer">
      <span className="copyright">© <p id="copyright"></p> Igreja Emanuel</span>
      <NavHostSF/>
    </div>
  );
}
