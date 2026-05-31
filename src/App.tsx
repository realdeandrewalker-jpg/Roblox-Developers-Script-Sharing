import React, { useState, useEffect, useMemo, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Settings,
  Copy,
  Check,
  Download,
  ThumbsUp,
  MessageSquare,
  Languages,
  Sun,
  Moon,
  Plus,
  FileCode,
  User,
  Tag,
  ChevronDown,
  ChevronUp,
  Code,
  X,
  Sparkles,
  Info
} from "lucide-react";
import { typ_pst_4y, typ_cmt_3x, typ_lan_2x, typ_thm_8z } from "./types";
import { trns_dt_1a } from "./translations";
import { f_hl_lu_99 } from "./highlighter";
import { dmy_p_list_v4 } from "./dummy_posts";

export default function App() {
  const [pst_lst_a3, s_pst_lst_a3] = useState<typ_pst_4y[]>(() => {
    const sv = localStorage.getItem("blox_p_7x");
    if (sv) {
      try {
        return JSON.parse(sv);
      } catch (e) {
        return dmy_p_list_v4;
      }
    }
    return dmy_p_list_v4;
  });

  const [act_thm_f8, s_act_thm_f8] = useState<typ_thm_8z>(() => {
    const sv = localStorage.getItem("blox_th_9y");
    return (sv as typ_thm_8z) === "wht" ? "wht" : "blk";
  });

  const [act_lan_2p, s_act_lan_2p] = useState<typ_lan_2x>(() => {
    const sv = localStorage.getItem("blox_la_1z");
    if (sv && ["en", "es", "pt", "ph"].includes(sv)) {
      return sv as typ_lan_2x;
    }
    return "en";
  });

  const [sea_v7, s_sea_v7] = useState("");
  const [flt_typ_m1, s_flt_typ_m1] = useState<string>("All");
  const [f_sh_pl_89, s_f_sh_pl_89] = useState(false);
  const [v_srt_v3, s_v_srt_v3] = useState<"recent" | "votes">("recent");
  const [act_tg_fl, s_act_tg_fl] = useState<string | null>(null);

  const [nw_ttl_z3, s_nw_ttl_z3] = useState("");
  const [nw_dsc_z3, s_nw_dsc_z3] = useState("");
  const [nw_cod_z3, s_nw_cod_z3] = useState("");
  const [nw_typ_z3, s_nw_typ_z3] = useState<"Script" | "LocalScript" | "ModuleScript">("Script");
  const [nw_tgs_z3, s_nw_tgs_z3] = useState("");
  const [form_err_tx, s_form_err_tx] = useState("");

  const [p_vte_cl_9x, s_p_vte_cl_9x] = useState<Record<string, boolean>>(() => {
    const sv = localStorage.getItem("blox_vt_2a");
    if (sv) {
      try {
        return JSON.parse(sv);
      } catch (e) {
        return {};
      }
    }
    return {};
  });

  const [cmt_tx_m4, s_cmt_tx_m4] = useState<Record<string, string>>({});
  const [cop_st_4p, s_cop_st_4p] = useState<Record<string, boolean>>({});
  const [exp_cmt_s1, s_exp_cmt_s1] = useState<Record<string, boolean>>({});

  useEffect(() => {
    localStorage.setItem("blox_p_7x", JSON.stringify(pst_lst_a3));
  }, [pst_lst_a3]);

  useEffect(() => {
    localStorage.setItem("blox_th_9y", act_thm_f8);
  }, [act_thm_f8]);

  useEffect(() => {
    localStorage.setItem("blox_la_1z", act_lan_2p);
  }, [act_lan_2p]);

  useEffect(() => {
    localStorage.setItem("blox_vt_2a", JSON.stringify(p_vte_cl_9x));
  }, [p_vte_cl_9x]);

  const f_rn_usr_1x = () => {
    const prf = [
      "Luau",
      "Blox",
      "Studio",
      "CFrame",
      "Vector3",
      "Instance",
      "Tween",
      "Delta",
      "Baseplate",
      "Noob",
      "Obby",
      "Dev",
      "Raycast",
      "Pcall",
      "Spawn",
      "Gamer"
    ];
    const sfx = [
      "Coder",
      "Wizard",
      "Mage",
      "Runner",
      "Master",
      "Script",
      "Builder",
      "Slayer",
      "Hacker",
      "Chief",
      "Watcher",
      "Slinger",
      "Vibe"
    ];
    const r1 = prf[Math.floor(Math.random() * prf.length)];
    const r2 = sfx[Math.floor(Math.random() * sfx.length)];
    const num = Math.floor(Math.random() * 899) + 100;
    return `${r1}_${r2}_${num}`;
  };

  const f_add_pst_b4 = (e: FormEvent) => {
    e.preventDefault();
    const cur_t_t1 = trns_dt_1a[act_lan_2p];
    
    if (!nw_ttl_z3.trim()) {
      s_form_err_tx(cur_t_t1.f_err_ttl);
      return;
    }
    if (!nw_cod_z3.trim()) {
      s_form_err_tx(cur_t_t1.f_err_cod);
      return;
    }

    const tg_ar = nw_tgs_z3
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const nw_pst: typ_pst_4y = {
      id: "p_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
      ttl_nm: nw_ttl_z3,
      dsc_txt: nw_dsc_z3 || "No description provided.",
      cod_cn: nw_cod_z3,
      scp_typ: nw_typ_z3,
      vte_num: 1,
      tgs: tg_ar,
      tms: new Date().toISOString(),
      aut_g_nm: f_rn_usr_1x(),
      cmts: [],
      cl_vts: ["self"]
    };

    s_pst_lst_a3((prev) => [nw_pst, ...prev]);
    s_nw_ttl_z3("");
    s_nw_dsc_z3("");
    s_nw_cod_z3("");
    s_nw_typ_z3("Script");
    s_nw_tgs_z3("");
    s_form_err_tx("");
    s_f_sh_pl_89(false);
  };

  const f_vte_x1 = (pst_id: string) => {
    const vtd = p_vte_cl_9x[pst_id];
    s_pst_lst_a3((prev) =>
      prev.map((p) => {
        if (p.id === pst_id) {
          const nw_v = vtd ? p.vte_num - 1 : p.vte_num + 1;
          return { ...p, vte_num: nw_v };
        }
        return p;
      })
    );
    s_p_vte_cl_9x((prev) => ({
      ...prev,
      [pst_id]: !vtd
    }));
  };

  const f_cmt_b9 = (pst_id: string) => {
    const tx = cmt_tx_m4[pst_id];
    if (!tx || !tx.trim()) return;

    const n_cmt: typ_cmt_3x = {
      id: "c_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
      aut_nm: f_rn_usr_1x(),
      txt: tx.trim(),
      tms: new Date().toISOString()
    };

    s_pst_lst_a3((prev) =>
      prev.map((p) => {
        if (p.id === pst_id) {
          return { ...p, cmts: [...p.cmts, n_cmt] };
        }
        return p;
      })
    );

    s_cmt_tx_m4((prev) => ({
      ...prev,
      [pst_id]: ""
    }));
  };

  const f_cpy_cd_5r = (pst_id: string, code: string) => {
    navigator.clipboard.writeText(code);
    s_cop_st_4p((prev) => ({ ...prev, [pst_id]: true }));
    setTimeout(() => {
      s_cop_st_4p((prev) => ({ ...prev, [pst_id]: false }));
    }, 2000);
  };

  const f_dwn_lu_3w = (ttl: string, code: string) => {
    const clean_nm = ttl.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase() || "script";
    const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${clean_nm}.lua`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const f_fmt_tm_y1 = (iso: string) => {
    try {
      const p_t = new Date(iso).getTime();
      const n_t = Date.now();
      const diff_s = Math.max(0, Math.floor((n_t - p_t) / 1000));
      if (diff_s < 60) return `${diff_s}s`;
      const diff_m = Math.floor(diff_s / 60);
      if (diff_m < 60) return `${diff_m}m`;
      const diff_h = Math.floor(diff_m / 60);
      if (diff_h < 24) return `${diff_h}h`;
      const diff_d = Math.floor(diff_h / 24);
      return `${diff_d}d`;
    } catch (e) {
      return "1d";
    }
  };

  const f_del_p_1x = (id: string) => {
    s_pst_lst_a3((prev) => prev.filter((p) => p.id !== id));
  };

  const pop_tgs_v9 = useMemo(() => {
    const counts: Record<string, number> = {};
    pst_lst_a3.forEach((p) => {
      p.tgs.forEach((t) => {
        counts[t] = (counts[t] || 0) + 1;
      });
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([name]) => name);
  }, [pst_lst_a3]);

  const flt_pst_ar_3a = useMemo(() => {
    let list = [...pst_lst_a3];

    if (sea_v7.trim()) {
      const cur_q = sea_v7.toLowerCase();
      list = list.filter(
        (p) =>
          p.ttl_nm.toLowerCase().includes(cur_q) ||
          p.dsc_txt.toLowerCase().includes(cur_q) ||
          p.cod_cn.toLowerCase().includes(cur_q) ||
          p.tgs.some((tg) => tg.toLowerCase().includes(cur_q))
      );
    }

    if (flt_typ_m1 !== "All") {
      list = list.filter((p) => p.scp_typ === flt_typ_m1);
    }

    if (act_tg_fl) {
      list = list.filter((p) => p.tgs.includes(act_tg_fl));
    }

    if (v_srt_v3 === "recent") {
      list.sort((a, b) => new Date(b.tms).getTime() - new Date(a.tms).getTime());
    } else {
      list.sort((a, b) => b.vte_num - a.vte_num);
    }

    return list;
  }, [pst_lst_a3, sea_v7, flt_typ_m1, act_tg_fl, v_srt_v3]);

  const f_g_typ_clr_v6 = (type: string) => {
    if (type === "LocalScript") return "border-blue-500 text-blue-400 bg-blue-950/20";
    if (type === "ModuleScript") return "border-teal-500 text-teal-400 bg-teal-950/20";
    return "border-yellow-600 text-yellow-500 bg-yellow-950/20";
  };

  const main_trns = trns_dt_1a[act_lan_2p];

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 theme-${act_thm_f8} bg-[var(--bg-primary)] text-[var(--text-primary)] pb-12`}>
      <header className="sticky top-0 z-40 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/90 backdrop-blur-md px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="text-[var(--accent-color)] font-black text-2xl tracking-tighter">
              RBX<span className="text-[var(--text-primary)] font-semibold text-lg ml-0.5 tracking-tight animate-pulse">SOURCE</span>
            </div>
            <div className="hidden md:block h-6 w-[1px] bg-[var(--border-color)] mx-2"></div>
            <p className="hidden md:block text-xs text-[var(--text-secondary)]">
              {main_trns.sub}
            </p>
          </div>

          <div className="flex items-center flex-wrap gap-2.5 sm:gap-4 justify-end">
            <div className="flex items-center gap-1.5 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-xl px-2.5 py-1.5 text-xs text-[var(--text-secondary)]">
              <Languages className="w-3.5 h-3.5 text-[var(--accent-color)]" />
              <select
                value={act_lan_2p}
                onChange={(e) => s_act_lan_2p(e.target.value as typ_lan_2x)}
                className="bg-transparent text-[var(--text-primary)] outline-none font-medium cursor-pointer"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="pt">Português</option>
                <option value="ph">Filipino</option>
              </select>
            </div>

            <button
              id="f_tgl_th9"
              onClick={() => s_act_thm_f8((prev) => (prev === "blk" ? "wht" : "blk"))}
              className="flex items-center justify-center p-2 bg-[var(--bg-tertiary)] hover:bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl transition shadow-sm text-[var(--accent-color)] cursor-pointer"
            >
              {act_thm_f8 === "blk" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-violet-600" />}
            </button>

            <button
              id="sh_s_btn"
              onClick={() => s_f_sh_pl_89(true)}
              className="flex items-center gap-2 bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-xl transition shadow-md shadow-[var(--accent-color)]/20 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              {main_trns.s_ps}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl p-4 shadow-sm">
            <h3 className="text-sm font-semibold tracking-tight text-[var(--text-primary)] flex items-center gap-2 mb-3">
              <Info className="w-4 h-4 text-[var(--accent-color)]" />
              {main_trns.st_h}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {main_trns.st_hb}
            </p>
          </div>

          <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl p-4 shadow-sm">
            <h2 className="text-sm font-semibold tracking-tight text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[var(--accent-color)]" />
              {main_trns.t_pop}
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {pop_tgs_v9.map((tg) => (
                <button
                  key={tg}
                  onClick={() => s_act_tg_fl(act_tg_fl === tg ? null : tg)}
                  className={`text-xs px-2.5 py-1 rounded-lg transition border ${
                    act_tg_fl === tg
                      ? "bg-[var(--accent-color)] border-[var(--accent-color)] text-white font-semibold"
                      : "bg-[var(--bg-tertiary)] border-[var(--border-color)] hover:border-[var(--accent-color)]/50 text-[var(--text-secondary)]"
                  }`}
                >
                  #{tg}
                </button>
              ))}
              {pop_tgs_v9.length === 0 && (
                <span className="text-xs text-[var(--text-secondary)] italic">No tags shared yet</span>
              )}
            </div>
            {act_tg_fl && (
              <button
                onClick={() => s_act_tg_fl(null)}
                className="mt-3 text-xs text-[var(--accent-color)] border-b border-dashed border-[var(--accent-color)] hover:text-[var(--accent-hover)] block"
              >
                Clear tag filter
              </button>
            )}
          </div>
        </aside>

        <section className="lg:col-span-9 space-y-6">
          <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl p-4 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-3 w-4 h-4 text-[var(--text-secondary)]" />
              <input
                id="srch_i"
                type="text"
                placeholder={main_trns.sea_h}
                value={sea_v7}
                onChange={(e) => s_sea_v7(e.target.value)}
                className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-primary)] rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-[var(--accent-color)] transition"
              />
            </div>

            <div className="flex items-center gap-2 self-stretch md:self-auto overflow-x-auto pb-2 md:pb-0 scroll-thin">
              <button
                onClick={() => s_flt_typ_m1("All")}
                className={`text-xs px-3 py-1.5 rounded-lg border transition shrink-0 ${
                  flt_typ_m1 === "All"
                    ? "bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)] font-medium"
                    : "bg-[var(--bg-tertiary)] border-[var(--border-color)] hover:border-[var(--text-secondary)] text-[var(--text-secondary)]"
                }`}
              >
                {main_trns.sh_all}
              </button>
              <button
                onClick={() => s_flt_typ_m1("Script")}
                className={`text-xs px-3 py-1.5 rounded-lg border transition shrink-0 ${
                  flt_typ_m1 === "Script"
                    ? "bg-[var(--accent-color)] text-white border-[var(--accent-color)] font-medium"
                    : "bg-[var(--bg-tertiary)] border-[var(--border-color)] hover:border-[var(--accent-color)] text-[var(--text-secondary)]"
                }`}
              >
                {main_trns.sh_scr}
              </button>
              <button
                onClick={() => s_flt_typ_m1("LocalScript")}
                className={`text-xs px-3 py-1.5 rounded-lg border transition shrink-0 ${
                  flt_typ_m1 === "LocalScript"
                    ? "bg-blue-500 text-white border-blue-500 font-medium"
                    : "bg-[var(--bg-tertiary)] border-[var(--border-color)] hover:border-blue-500 text-[var(--text-secondary)]"
                }`}
              >
                {main_trns.sh_loc}
              </button>
              <button
                onClick={() => s_flt_typ_m1("ModuleScript")}
                className={`text-xs px-3 py-1.5 rounded-lg border transition shrink-0 ${
                  flt_typ_m1 === "ModuleScript"
                    ? "bg-teal-500 text-white border-teal-500 font-medium"
                    : "bg-[var(--bg-tertiary)] border-[var(--border-color)] hover:border-teal-500 text-[var(--text-secondary)]"
                }`}
              >
                {main_trns.sh_mod}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] font-medium">
              <span>{flt_pst_ar_3a.length} scripts</span>
              {act_tg_fl && <span>in #{act_tg_fl}</span>}
              {flt_typ_m1 !== "All" && <span>• {flt_typ_m1}</span>}
            </div>

            <div className="flex items-center gap-1 bg-[var(--bg-tertiary)] p-0.5 border border-[var(--border-color)] rounded-lg text-xs">
              <button
                onClick={() => s_v_srt_v3("recent")}
                className={`px-2.5 py-1 rounded-md transition ${
                  v_srt_v3 === "recent"
                    ? "bg-[var(--bg-secondary)] text-[var(--text-primary)] font-medium shadow-sm"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {main_trns.m_rcnt}
              </button>
              <button
                onClick={() => s_v_srt_v3("votes")}
                className={`px-2.5 py-1 rounded-md transition ${
                  v_srt_v3 === "votes"
                    ? "bg-[var(--bg-secondary)] text-[var(--text-primary)] font-medium shadow-sm"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {main_trns.m_lkd}
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {flt_pst_ar_3a.map((pst) => {
                const highlightedHtml = f_hl_lu_99(pst.cod_cn);
                const hasVoted = p_vte_cl_9x[pst.id] || false;
                const isExpanded = exp_cmt_s1[pst.id] || false;
                const commentFieldValue = cmt_tx_m4[pst.id] || "";

                return (
                  <motion.article
                    key={pst.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                  >
                    <div className="p-4 sm:p-6 space-y-4">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-color)]">
                            <User className="w-4 h-4 text-[var(--text-secondary)]" />
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
                              {pst.aut_g_nm}
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            </span>
                            <p className="text-[10px] text-[var(--text-secondary)]">
                              {main_trns.u_by} • {f_fmt_tm_y1(pst.tms)} {main_trns.u_ago}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-medium border ${f_g_typ_clr_v6(
                              pst.scp_typ
                            )}`}
                          >
                            {pst.scp_typ}
                          </span>
                          {pst.id.startsWith("p_") && (
                            <button
                              onClick={() => f_del_p_1x(pst.id)}
                              className="text-[var(--text-secondary)] hover:text-red-500 p-1 rounded hover:bg-[var(--bg-tertiary)] transition"
                              title="Delete Post"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] tracking-tight">
                          {pst.ttl_nm}
                        </h3>
                        <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">
                          {pst.dsc_txt}
                        </p>
                      </div>

                      <div className="relative">
                        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10">
                          <button
                            onClick={() => f_cpy_cd_5r(pst.id, pst.cod_cn)}
                            className="bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-color)] p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-medium flex items-center gap-1.5 shadow-sm transition"
                          >
                            {cop_st_4p[pst.id] ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-500" />
                                <span className="hidden sm:inline text-emerald-500">{main_trns.c_ok}</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                                <span className="hidden sm:inline">{main_trns.c_btn}</span>
                              </>
                            )}
                          </button>

                          <button
                            onClick={() => f_dwn_lu_3w(pst.ttl_nm, pst.cod_cn)}
                            className="bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-color)] p-1.5 rounded-lg shadow-sm transition"
                            title={main_trns.d_btn}
                          >
                            <Download className="w-3.5 h-3.5 text-sky-400" />
                          </button>
                        </div>

                        <div className="font-mono text-xs overflow-x-auto rounded-xl border border-[var(--border-color)] bg-[var(--rbx-studio-bg)] text-[var(--rbx-studio-txt)] p-4 pt-12 max-h-96 scroll-thin shadow-inner select-text">
                          <pre className="whitespace-pre"><code dangerouslySetInnerHTML={{ __html: highlightedHtml }} /></pre>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5">
                        <Tag className="w-3 h-3 text-[var(--text-secondary)]" />
                        {pst.tgs.map((t) => (
                          <button
                            key={t}
                            onClick={() => s_act_tg_fl(act_tg_fl === t ? null : t)}
                            className={`text-[10px] px-2 py-0.5 rounded-full transition ${
                              act_tg_fl === t
                                ? "bg-[var(--accent-color)] text-white font-semibold"
                                : "bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-color)]"
                            }`}
                          >
                            #{t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-[var(--border-color)] px-4 py-3 bg-[var(--bg-tertiary)] flex justify-between items-center text-xs">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => f_vte_x1(pst.id)}
                          className={`flex items-center gap-1.5 font-semibold px-2.5 py-1.5 rounded-lg transition shrink-0 ${
                            hasVoted
                              ? "bg-[var(--accent-color)]/20 text-[var(--accent-color)]"
                              : "text-[var(--text-secondary)] hover:text-[var(--accent-color)] hover:bg-[var(--bg-secondary)]"
                          }`}
                        >
                          <ThumbsUp className={`w-4 h-4 ${hasVoted ? "fill-current" : ""}`} />
                          <span>{pst.vte_num}</span>
                        </button>

                        <button
                          onClick={() =>
                            s_exp_cmt_s1((prev) => ({
                              ...prev,
                              [pst.id]: !isExpanded
                            }))
                          }
                          className="flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-slate-300 px-2.5 py-1.5 rounded-lg hover:bg-[var(--bg-secondary)] transition shrink-0"
                        >
                          <MessageSquare className="w-4 h-4 text-sky-400" />
                          <span>
                            {main_trns.sh_c} ({pst.cmts.length})
                          </span>
                          {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        </button>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 sm:px-6 py-4 space-y-4">
                        <div className="space-y-3">
                          {pst.cmts.map((cmt) => (
                            <div
                              key={cmt.id}
                              className="bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-xl p-3 text-xs"
                            >
                              <div className="flex justify-between items-center mb-1">
                                <span className="font-semibold text-[var(--accent-color)]/95">{cmt.aut_nm}</span>
                                <span className="text-[10px] text-[var(--text-secondary)]">
                                  {f_fmt_tm_y1(cmt.tms)} {main_trns.u_ago}
                                </span>
                              </div>
                              <p className="text-[var(--text-primary)] leading-relaxed">{cmt.txt}</p>
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder={main_trns.sh_c_add}
                            value={commentFieldValue}
                            onChange={(e) =>
                              s_cmt_tx_m4((prev) => ({
                                ...prev,
                                [pst.id]: e.target.value
                              }))
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") f_cmt_b9(pst.id);
                            }}
                            className="flex-1 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-xl px-3 py-2 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-color)] transition"
                          />
                          <button
                            onClick={() => f_cmt_b9(pst.id)}
                            className="bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white font-semibold text-xs px-4 rounded-xl transition"
                          >
                            {main_trns.sh_c_btn}
                          </button>
                        </div>
                      </div>
                    )}
                  </motion.article>
                );
              })}
              {flt_pst_ar_3a.length === 0 && (
                <div className="text-center py-12 p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl">
                  <FileCode className="w-12 h-12 text-[var(--text-secondary)] mx-auto opacity-50 mb-3" />
                  <p className="text-sm text-[var(--text-secondary)] font-medium">
                    {main_trns.fe_no}
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {f_sh_pl_89 && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[var(--bg-secondary)] border border-[var(--border-color)] w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-color)]">
                <h2 className="font-bold text-lg text-[var(--text-primary)] flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[var(--accent-color)]" />
                  {main_trns.f_sh_f}
                </h2>
                <button
                  onClick={() => s_f_sh_pl_89(false)}
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] p-1 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={f_add_pst_b4} className="p-6 overflow-y-auto space-y-4 flex-1 scroll-thin">
                {form_err_tx && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-500 text-xs p-3 rounded-xl">
                    {form_err_tx}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-8 space-y-1">
                    <label className="text-xs text-[var(--text-secondary)] font-semibold uppercase tracking-wider">
                      {main_trns.p_ttl} *
                    </label>
                    <input
                      id="nw_ttl_z3"
                      type="text"
                      value={nw_ttl_z3}
                      onChange={(e) => s_nw_ttl_z3(e.target.value)}
                      className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-primary)] px-3 py-2 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[var(--accent-color)]"
                      placeholder="e.g., Simple Obby Checkpoint System"
                    />
                  </div>

                  <div className="md:col-span-4 space-y-1">
                    <label className="text-xs text-[var(--text-secondary)] font-semibold uppercase tracking-wider">
                      {main_trns.p_typ}
                    </label>
                    <select
                      id="nw_typ_z3"
                      value={nw_typ_z3}
                      onChange={(e) => s_nw_typ_z3(e.target.value as "Script" | "LocalScript" | "ModuleScript")}
                      className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-primary)] px-3 py-2 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[var(--accent-color)] cursor-pointer"
                    >
                      <option value="Script">Script (Server)</option>
                      <option value="LocalScript">LocalScript (Client)</option>
                      <option value="ModuleScript">ModuleScript (Module)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-[var(--text-secondary)] font-semibold uppercase tracking-wider">
                    {main_trns.p_dsc}
                  </label>
                  <input
                    id="nw_dsc_z3"
                    type="text"
                    value={nw_dsc_z3}
                    onChange={(e) => s_nw_dsc_z3(e.target.value)}
                    className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-primary)] px-3 py-2 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[var(--accent-color)]"
                    placeholder="Briefly describe what this script does and how to load it."
                  />
                </div>

                <div className="space-y-1 flex-1 flex flex-col">
                  <label className="text-xs text-[var(--text-secondary)] font-semibold uppercase tracking-wider">
                    {main_trns.p_cod} *
                  </label>
                  <textarea
                    id="nw_cod_z3"
                    value={nw_cod_z3}
                    onChange={(e) => s_nw_cod_z3(e.target.value)}
                    className="w-full h-48 bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-primary)] p-3 rounded-xl font-mono text-xs focus:outline-none focus:border-[var(--accent-color)] resize-none flex-1 scroll-thin"
                    placeholder={`local Players = game:GetService("Players")\n-- Paste code here...`}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-[var(--text-secondary)] font-semibold uppercase tracking-wider">
                    {main_trns.p_tgs}
                  </label>
                  <input
                    id="nw_tgs_z3"
                    type="text"
                    value={nw_tgs_z3}
                    onChange={(e) => s_nw_tgs_z3(e.target.value)}
                    className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-primary)] px-3 py-2 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[var(--accent-color)]"
                    placeholder="Obby, Loader, Admin, Gui, Weapons"
                  />
                </div>

                <div className="flex gap-3 justify-end pt-4 border-t border-[var(--border-color)]">
                  <button
                    type="button"
                    onClick={() => s_f_sh_pl_89(false)}
                    className="bg-[var(--bg-tertiary)] hover:bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border-color)] font-semibold text-xs sm:text-sm px-4 py-2 rounded-xl transition"
                  >
                    {main_trns.btn_c}
                  </button>
                  <button
                    type="submit"
                    className="bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white font-semibold text-xs sm:text-sm px-5 py-2 rounded-xl transition shadow-md shadow-[var(--accent-color)]/10 cursor-pointer"
                  >
                    {main_trns.btn_p}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
