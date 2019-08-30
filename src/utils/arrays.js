export const gerais = {
  'distritos': [
    { value: "BAR", text: "Barra da Lagoa" },
    { value: "CBJ", text: "Cachoeira do Bom Jesus" },
    { value: "CAM", text: "Campeche" },
    { value: "CAN", text: "Canasvieiras" },
    { value: "ING", text: "Ingleses do Rio Vermelho" },
    { value: "LAG", text: "Lagoa da Conceição" },
    { value: "PAN", text: "Pântano do Sul" },
    { value: "RAT", text: "Ratones" },
    { value: "RIB", text: "Ribeirão da Ilha" },
    { value: "RIV", text: "São João do Rio Vermelho" },
    { value: "STL", text: "Santo Antônio de Lisboa" },
    { value: "SCO", text: "Sede Continental" },
    { value: "SIN", text: "Sede Insular" }
  ]
}

export const eiv = {
  'categorias': [
    { value: 'EIV', text: 'Estudo de Impacto de Vizinhança', },
    { value: 'ESI', text: 'Estudo Simplificado de Impacto' },
    { value: 'EEL', text: 'Estudo Específico de Localização' },
    { value: 'MOIV', text: 'Memorial Objetivo de Inserção de Vizinhança' }
  ],
  'status': [
    { value: 'analise', text: 'Em análise' },
    { value: 'complementacao', text: 'Complementação' },
    { value: 'requerente', text: 'Requerente' },
    { value: 'aguardando_tcc', text: 'Aguardando TCC' },
    { value: 'aprovado', text: 'Aprovado' },
    { value: 'arquivado', text: 'Arquivado' },
    { value: 'indeferido', text: 'Indeferido' },
  ],
  'compensação': [
    { value: 'intervencoes', text: 'Intervenções' },
    { value: 'FMDU', text: 'FMDU' },
    { value: 'intervencoes_FMDU', text: 'Intervenções e FMDU' }
  ],
  'situação': [
    { value: "nao_iniciado", text: "Não iniciado" },
    { value: "execucao", text: "Em execução" },
    { value: "concluido", text: "Concluído" }
  ]
}

export const rep = {
  'tipos': [
    { value: "ELC", text: "Espaços livres associados à circulação" },
    { value: "ELO", text: "Espaços livres associados à orla" },
    { value: "ELP", text: "Espaços livres de conservação e preservação ambiental" },
    { value: "ELL", text: "Espaços livres de lazer e recreação" },
    { value: "ENC", text: "Espaços livres não classificados" }
  ],
  'subtipos': [
    { value: "AEA", text: "Áreas esportivas abertas" },
    { value: "ALB", text: "Alamedas e Bulevares" },
    { value: "ANT", text: "Áreas naturais tombadas" },
    { value: "ATE", text: "Grandes aterros" },
    { value: "AVR", text: "Áreas públicas com vegetação relevante" },
    { value: "CAD", text: "Calçadões" },
    { value: "AOP", text: "Áreas públicas destinadas ao lazer não equipadas - oriundas de parcelamento" },
    { value: "ELO", text: "Espaços livres de lazer e contemplação associados à orla" },
    { value: "ANC", text: "Não classificados" },
    { value: "OUT", text: "Outras áreas" },
    { value: "PCI", text: "Praças implantadas" },
    { value: "ACP", text: "Áreas públicas com potencial ao lazer não equipadas" },
    { value: "PQE", text: "Parques ecológicos" },
    { value: "PQU", text: "Parques urbanos" }
  ]
}

export const mobi = {
  'cargaLogis': [
    {value: 'pontos_carga_descarga', text: 'Pontos de carga e descarga'},
    {value: 'areas_restrição_circulação', text: 'Áreas com restrição para circulação'},
    {value: 'pontos_integração_logística', text: 'Pontos de integração logística'},
    {value: 'outros', text: 'Outros'}
  ],
  'ciclos': [
      {value: 'nova_ciclovia', text: 'Nova ciclovia'},
      {value: 'problema_ciclovia_existente', text: 'Problema em ciclovia existente'},
      {value: 'bicicletarios', text: 'Bicicletários'},
      {value: 'local_perigoso', text: 'Local perigoso'},
      {value: 'bicicletas_patinetes compartilhados', text: 'Bicicletas e patinetes compartilhados'},
      {value: 'outros', text: 'Outros'}
  ],
  'circViaria': [
      {value: 'sinalizacao', text: 'Sinalização'},
      {value: 'semaforos', text: 'Semáforos'},
      {value: 'engarrafamentos', text: 'Engarrafamentos'},
      {value: 'pontos_conflito', text: 'Pontos de conflito'},
      {value: 'cruzamento_perigosos', text: 'Cruzamento perigosos'},
      {value: 'pavimentacao', text: 'Pavimentação'},
      {value: 'novas_conexoes', text: 'Novas conexões'},
      {value: 'velocidade', text: 'Velocidade'},
      {value: 'outros', text: 'Outros'}
  ],
  'indMotorizado': [
      {value: 'zona_azul', text: 'Zona azul'},
      {value: 'outros_estacionamentos', text: 'Outros estacionamentos'},
      {value: 'pontos_conflito', text: 'Pontos de conflito'},
      {value: 'compartilhamento_viagem (carona)', text: 'Compartilhamento de viagem (carona)'},
      {value: 'outro', text: 'Outro'}
  ],
  'alternativos': [
      {value: 'maritimo', text: 'Marítimo'},
      {value: 'lacustre', text: 'Lacustre'},
      {value: 'funicular', text: 'Funicular'},
      {value: 'aereo', text: 'Aéreo'},
      {value: 'outros', text: 'Outros'}
  ],
  'onibus': [
      {value: 'linhas', text: 'Linhas'},
      {value: 'qualidade_onibus', text: 'Qualidade dos ônibus'},
      {value: 'pontos_terminais', text: 'Pontos e terminais'},
      {value: 'corredores_onibus', text: 'Corredores de ônibus'},
      {value: 'outros', text: 'Outros'}
  ],
  'pedestres': [
      {value: 'calcada', text: 'Calçada'},
      {value: 'acessibilidade_rampas_piso_podotatil', text: 'Acessibilidade - rampas e piso podotátil'},
      {value: 'faixa_pedestre', text: 'Faixa de pedestre'},
      {value: 'passarela', text: 'Passarela'}, 
      {value: 'local_perigoso', text: 'Local perigoso'},
      {value: 'outros', text: 'Outros'}
  ],
  'taxisApps': [
      {value: 'pontos_taxi', text: 'Pontos de táxi'},
      {value: 'aplicativos', text: 'Aplicativos'},
      {value: 'outros', text: 'Outros'}
  ]
}