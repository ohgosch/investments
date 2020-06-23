export const TEXTS = {
  title: 'Investment',
  header: {
    logoAlt: 'Investment logotipo',
    periodButtonContent: (start, end) => `${start} à ${end}`,
    periodTitle: 'Trocar período',
    periodModal: {
      title: 'Troca de período',
      min: 'Mínimo',
      max: 'Máximo',
      presets: {
        all: 'Desde o início',
        last30Days: 'Último mês',
        last3Months: 'Últimos 3 meses',
        last1Year: 'Último ano',
        last2Years: 'Últimos 2 anos',
      },
    },
  },
  modal: {
    close: 'Fechar modal'
  },
  chart: {
    serieTitle: 'Rendimento'
  },
  main: {
    title: 'Rendimento',
    table: {
      caption: (min, max) => `Tabela de Rendimentos no período de ${min} à ${max}`,
      date: 'Data',
      amount: 'Valor do rendimento',
      summary: (largerDate, largerAmount, smallerDate, smallerAmount) => `A data com maior rendimento foi ${largerDate} no valor de ${largerAmount}. A data com o menor rendimento foi ${smallerDate} no valor de ${smallerAmount}`,
    }
  },
};
