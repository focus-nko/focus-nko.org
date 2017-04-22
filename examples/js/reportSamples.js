export const entrepreneurialActivityEnum = {
  1: 'продажа товаров, выполнение работ, оказание услуг',
  2: 'участие в хозяйственных обществах',
  3: 'операции с ценными бумагами',
};

export const assetsSourcesEnum = {
  1: 'Членские взносы',
  2: 'Целевые поступления от российских физических лиц',
  3: 'Целевые поступления от иностранных физических лиц и лиц без гражданства',
  4: 'Целевые поступления от российских коммерческих организаций',
  5: 'Целевые поступления от российских некоммерческих организаций',
  6: 'Целевые поступления от иностранных некоммерческих неправительственных организаций',
  7: 'Целевые поступления от иных иностранных организаций',
  8: 'Гранты',
  9: 'Гуманитарная помощь от иностранных государств',
  10: 'Средства федерального бюджета, бюджетов субъектов Российской Федерации, бюджетов муниципальных образований',
  11: 'Доходы от предпринимательской деятельности',
};

export const executiveManagementTypesEnum = {
  1: 'коллегиальный',
  2: 'единоличный',
};

export const reportTypesEnum = {
  1: 'Форма №ОН0001',
  2: 'Форма №ОН0002',
  3: 'Форма №ОН0003',
  4: 'Форма №СП0001', // not implemented
  5: 'Форма №СП0002', // not implemented
  6: 'Форма №СП0003', // not implemented
  7: 'Форма №ОР0001', // not implemented
  8: 'Сообщение о продолжении деятельности',
};


export const report1 = {
  reportType: 1, // enum(1..8), тип документа
  reportName: 'ОН0001', // string название документа
  reportId: '', // ID отчета по базе http://unro.minjust.ru/
  reportUrl: '', // Ссылка на скачивание PDF отчета
  orgn: '', // ОГРН
  form: '', // форма организации
  name: '', // название организации
  parsed: true, // признак того что отчет спарсен без ошибок
  data: {
    ministryOfJustice: '', // string|null Минюст России (его территориальный орган)
    organizationName: '', // string|null полное наименование общественного объединения
    organizationAddress: '', // string|null адрес (место нахождения) общественного объединения
    orgn: '', // string|null ОГРН
    ogrnDate: new Date(), // Date дата включения в ЕГРЮЛ
    inn: '', // string|null ИНН
    kpp: '', // string|null КПП
    reportPeriodYear: 2000, // number|null за какой год отчет
    signaturePerson: '', // string|null ФИО и должность в подписи
    signatureDate: new Date(), // Date|null Дата в подписи

    activity: [], // Array<String> Основные виды деятельности в отчетном периоде
    businessActivity: [], // Array<enum(1..3)> Предпринимательская деятельность
    otherBusinessActivity: '', // string|null иная предпринимательская деятельность
    assetsSources: [], // Array<enum(1..11)> источники формирования имущества
    otherAssetsSources: [], // Array<String> Иные источники формирования имущества
    topManagement: {
      name: '', // string|null Высший орган управления
      sessionPeriodicity: '', // string|null Периодичность проведения заседаний в соответствии с учредительными документами
      sessionCount: 0, // number|null Проведено заседаний
    },
    executiveManagement: {
      name: '', // string|null исполнительный орган управления
      type: 1, // enum(1..2)|null 1: коллегиальный, 2: единоличный
      sessionPeriodicity: '', // string|null Периодичность проведения заседаний в соответствии с учредительными документами
      sessionCount: 0, // number|null Проведено заседаний
    },
    personnel: [{
      fullName: '', // string|null Фамилия, имя, отчество
      birthDate: new Date(), // Date|null Дата рождения
      citizenship: '', // string|null Гражданство
      document: '', // string|null Данные документа, удостоверяющего личность
      address: '', // string|null Адрес (место жительства)
      positionAndAct: '', // string|null Должность, наименование и реквизиты акта о назначении (избрании)
    }],
  }
};


export const report2 = {
  reportType: 2, // enum(1..8), тип документа
  reportName: 'ОН0002', // string название документа
  reportId: '', // ID отчета по базе http://unro.minjust.ru/
  reportUrl: '', // Ссылка на скачивание PDF отчета
  orgn: '', // ОГРН
  form: '', // форма организации
  name: '', // название организации
  parsed: true, // признак того что отчет спарсен без ошибок
  data: {
    ministryOfJustice: '', // string|null Минюст России (его территориальный орган)
    organizationName: '', // string|null полное наименование общественного объединения
    organizationAddress: '', // string|null адрес (место нахождения) общественного объединения
    orgn: '', // string|null ОГРН
    ogrnDate: new Date(), // Date дата включения в ЕГРЮЛ
    inn: '', // string|null ИНН
    kpp: '', // string|null КПП
    reportPeriodYear: 2000, // number|null за какой год отчет
    signaturePerson: '', // string|null ФИО и должность в подписи
    signatureDate: new Date(), // Date|null Дата в подписи
    signatureAccountantPerson: '', // string|null ФИО бухгалтера
    signatureAccountantDate: new Date(), // Date|null Дата подписи бухгалтера
    //  Вид расходования целевых денежных средств, полученных из федерального бюджета, бюджетов субъектов Российской Федерации, бюджетов муниципальных образований
    targetFinanceGovernment: [{
      item: '', // string|null
      sum: 0, // float|null
    }],
    // Вид расходования целевых денежных средств, полученных от российских организаций, граждан Российской Федерации
    targetFinanceResidents: [{
      item: '', // string|null
      sum: 0, // float|null
    }],
    // Вид   расходования   целевых денежных средств, полученных от международных и иностранных организаций, иностранных граждан и лиц без гражданства
    targetFinanceExternal: [{
      item: '', // string|null
      sum: 0, // float|null
    }],
    // Вид   расходования иных денежных средств, в том числе полученных от продажи товаров, выполнения работ, оказания услуг
    saleFinance: [{
      item: '', // string|null
      sum: 0, // float|null
    }],
    // Использование имущества, поступившего от российских организаций, граждан Российской Федерации Основные средства
    otherFinanceRussianMain: [{
      item: '', // string|null
      sum: 0, // float|null
    }],
    // Использование имущества, поступившего от российских организаций, граждан Российской Федерации Иное имущество
    otherFinanceRussianOther: [{
      item: '', // string|null
      sum: 0, // float|null
    }],
    // Использование имущества, поступившего от международных и иностранных организаций, иностранных граждан и лиц без гражданства Основные средства
    otherFinanceExternalMain: [{
      item: '', // string|null
      sum: 0, // float|null
    }],
    // Использование имущества, поступившего от международных и иностранных организаций, иностранных граждан и лиц без гражданства Иное имущество
    otherFinanceExternalOther: [{
      item: '', // string|null
      sum: 0, // float|null
    }],
  }
};


export const report3 = {
  reportType: 3, // enum(1..8), тип документа
  reportName: 'ОН0003', // string название документа
  reportId: '', // ID отчета по базе http://unro.minjust.ru/
  reportUrl: '', // Ссылка на скачивание PDF отчета
  orgn: '', // ОГРН
  form: '', // форма организации
  name: '', // название организации
  parsed: true, // признак того что отчет спарсен без ошибок
  data: {
    ministryOfJustice: '', // string|null Минюст России (его территориальный орган)
    organizationName: '', // string|null полное наименование общественного объединения
    organizationAddress: '', // string|null адрес (место нахождения) общественного объединения
    orgn: '', // string|null ОГРН
    ogrnDate: new Date(), // Date дата включения в ЕГРЮЛ
    inn: '', // string|null ИНН
    kpp: '', // string|null КПП
    reportPeriodYear: 2000, // number|null за какой год отчет
    signaturePerson: '', // string|null ФИО и должность в подписи
    signatureDate: new Date(), // Date|null Дата в подписи
    signatureAccountantPerson: '', // string|null ФИО бухгалтера
    signatureAccountantDate: new Date(), // Date|null Дата подписи бухгалтера
    // Денежные средства, полученные в отчетном периоде от международных и иностранных организаций, иностранных граждан и лиц без гражданства
    // Остаток, перешедший с предыдущего отчетного периода
    restFinances: {
      sum: 0, // float|null Сумма
      target: null,
    },
    // Целевые средства, полученные в отчетном периоде
    targetFinances: {
      sum: 0, // float|null Сумма
      target: '', // string|null Цели расходования
    },
    // Иные средства, полученные в отчетном периоде
    otherFinances: {
      sum: 0, // float|null
      target: null,
    },
    // Иное имущество, полученное в отчетном периоде от международных и иностранных организаций, иностранных граждан и лиц без гражданства
    // Основные средства (указать наименование):
    mainAssets: [{
      item: '', // string|null Основные средства (указать наименование)
      sum: 0, // float|null Сумма
      target: '', // string|null Цели использования
    }],
    // Иное имущество (сгуппированное по назначению) (1):
    otherAssets: [{
      item: '', // string|null Иное имущество (сгуппированное по назначению)
      sum: 0, // float|null Сумма
      target: '', // string|null Цели использования
    }],
    externalFinance: {
      social: 0, // float|null расходы на социальную и благотворительную помощь
      conference: 0, // float|null расходы на проведение конференций, совещаний, семинаров и т.п.
      salary: 0, // float|null расходы, связанные с оплатой труда (включая начисления)
      scholarship: 0, // float|null расходы на выплату стипендий
      trip: 0, // float|null расходы на служебные командировки и деловые поездки
      maintenance: 0, // float|null расходы, связанные с содержанием и эксплуатацией помещений, зданий, автомобильного транспорта и иного имущества (собственного и арендуемого)
      assets: 0, // float|null расходы на приобретение основных средств, ивентаря и иного имущества
      tax: 0, // float|null Расходы на уплату налогов и прочих обязательных платежей в бюджеты различного уровня; судебные расходы и арбитражные сборы
      other: 0, // float|null иные расходы
      all: 0, // float|null Израсходовано денежных средств всего
    },
    // Сведения о фактическом использовании в отчетном периоде иного имущества, полученного от международной или иностранной организации, иностранных граждан или лиц без гражданства, в том числе приобретенного (созданного) за счет средств указанных лиц
    externalAssets: [{
      item: '', // string|null Наименование
      target: '', // string|null Способ использования
    }],
  }
};

export const report8 = {
  reportType: 8, // enum(1..8), тип документа
  reportName: 'Сообщение о продолжении деятельности', // string название документа
  reportId: '', // ID отчета по базе http://unro.minjust.ru/
  reportUrl: '', // Ссылка на скачивание PDF отчета
  orgn: '', // ОГРН
  form: '', // форма организации
  name: '', // название организации
  parsed: true, // признак того что отчет спарсен без ошибок
  data: {
    ministryOfJustice: '', // string|null Минюст России (его территориальный орган)
    organizationName: '', // string|null полное наименование общественного объединения
    organizationAddress: '', // string|null адрес (место нахождения) общественного объединения
    orgn: '', // string|null ОГРН
    ogrnDate: new Date(), // Date дата включения в ЕГРЮЛ
    inn: '', // string|null ИНН
    kpp: '', // string|null КПП
    signaturePerson: '', // string|null ФИО и должность в подписи
    signatureDate: new Date(), // Date|null Дата в подписи

    financesYear: 2000, // number|null имущество и денежные средства от международных или иностранных организаций, иностранных граждан, лиц без гражданства в течение года не поступали;
    assetsYear: 2000, // number|null поступления имущества и денежных средств в течение года составили менее трех миллионов рублей;
  },
};
