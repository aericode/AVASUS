export interface Curso {
  id: number
  cateroria: string
  capa: string
  titulo: string
  parceiros: string
  resumo: string
  duracao: string
  matriculados: number
  criado_em: string
  avaliacao: string
  numero_avaliacoes: number
  sobre: string
  objetivo_geral?: string
  objetivo_especifico?: string
  conteudo: string | undefined[]
  creditos: Credito[]
  recursos_educacionais?: string
}

export interface Credito {
  capa: string
  titulo: string
}