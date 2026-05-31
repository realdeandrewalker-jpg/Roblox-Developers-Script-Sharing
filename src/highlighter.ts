export function f_hl_lu_99(cod: string): string {
  if (!cod) return "";
  const esc_h_2x = (tx: string) => {
    return tx
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  };

  const regex_p = /(--\[\[([^]*?)\]\]|--.*|"[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|\[\[([^]*?)\]\]|\b(?:local|function|end|then|if|else|elseif|for|in|do|while|repeat|until|return|and|or|not|true|false|nil)\b|\b(?:game|Game|workspace|Workspace|script|Instance|Vector3|Vector2|CFrame|BrickColor|Color3|UDim2|UDim|TweenInfo|task|wait|delay|spawn|print|warn|error|math|string|table|pairs|ipairs|next|typeof|type)\b|\b\d+(?:\.\d+)?\b|\b0x[a-fA-F0-9]+\b)/g;

  const pts = cod.split(regex_p);
  let res_h = "";

  for (let i = 0; i < pts.length; i++) {
    const p = pts[i];
    if (p === undefined) continue;

    if (i % 4 === 1) {
      if (p.startsWith("--")) {
        res_h += `<span class="hl-cmt">${esc_h_2x(p)}</span>`;
      } else if (p.startsWith('"') || p.startsWith("'") || p.startsWith("[[")) {
        res_h += `<span class="hl-str">${esc_h_2x(p)}</span>`;
      } else if (
        /^(local|function|end|then|if|else|elseif|for|in|do|while|repeat|until|return|and|or|not|true|false|nil)$/.test(
          p
        )
      ) {
        res_h += `<span class="hl-kwd">${esc_h_2x(p)}</span>`;
      } else if (
        /^(game|Game|workspace|Workspace|script|Instance|Vector3|Vector2|CFrame|BrickColor|Color3|UDim2|UDim|TweenInfo|task|wait|delay|spawn|print|warn|error|math|string|table|pairs|ipairs|next|typeof|type)$/.test(
          p
        )
      ) {
        res_h += `<span class="hl-gbl">${esc_h_2x(p)}</span>`;
      } else if (/^\d/.test(p) || /^0x/.test(p)) {
        res_h += `<span class="hl-num">${esc_h_2x(p)}</span>`;
      } else {
        res_h += esc_h_2x(p);
      }
    } else {
      if (i % 4 === 2 || i % 4 === 3) {
        continue;
      }
      res_h += esc_h_2x(p);
    }
  }

  return res_h;
}
