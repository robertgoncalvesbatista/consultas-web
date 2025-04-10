export type AcordosLeniencia = {
  metaDados: {
    consultaNome: string;
    consultaUid: string;
    chave: string;
    usuario: string;
    mensagem: string;
    ip: string;
    resultadoId: number;
    resultado: string;
    apiVersao: string;
    gerarComprovante: boolean;
    urlComprovante: string;
    assincrono: boolean;
    data: Date;
    tempoExecucaoMs: number;
  };
  retorno: {
    acordos: [
      {
        numeroRegistro: number;
        detalhamentoAcordo: {
          dataInicioAcordo: string;
          dataFimAcordo: string;
          orgaoResponsavel: string;
          situacaoAcordo: string;
        };
        sancoes: [
          {
            cnpj: string;
            razaoSocial: string;
            nomeFantasia: string;
          }
        ];
        quantidade: number;
      }
    ];
  };
};
