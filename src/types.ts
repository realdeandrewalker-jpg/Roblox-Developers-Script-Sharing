export interface typ_cmt_3x {
  id: string;
  aut_nm: string;
  txt: string;
  tms: string;
}

export interface typ_pst_4y {
  id: string;
  ttl_nm: string;
  dsc_txt: string;
  cod_cn: string;
  scp_typ: "Script" | "LocalScript" | "ModuleScript";
  vte_num: number;
  tgs: string[];
  tms: string;
  aut_g_nm: string;
  cl_vts?: string[];
  cmts: typ_cmt_3x[];
}

export type typ_lan_2x = "en" | "es" | "pt" | "ph";
export type typ_thm_8z = "blk" | "wht";
