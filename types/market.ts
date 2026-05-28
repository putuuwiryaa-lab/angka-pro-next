export type PredictionSnapshot = {
  bbfs8?: string[];
  ai4?: string[];
  ai6?: string[];
  poltar_as?: string[];
  poltar_kop?: string[];
  poltar_kepala?: string[];
  poltar_ekor?: string[];
  top_line?: string[];
  base_result?: string;
  updated_at?: string;
};

export type PredictionEvaluation = {
  from_result?: string;
  new_result?: string;
  bbfs_status?: string;
  ai_status?: string;
  ai6_status?: string;
  rank_as?: number | null;
  rank_kop?: number | null;
  rank_kepala?: number | null;
  rank_ekor?: number | null;
  evaluated_at?: string;
};

export type Market = {
  id: string;
  name: string;
  history_data?: string;
  last_result?: string;
  data_count?: number;
  updated_at?: string;
  prediction_snapshot?: PredictionSnapshot | null;
  prediction_evaluations?: PredictionEvaluation[];
};
