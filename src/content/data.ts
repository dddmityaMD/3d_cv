export type Lang = 'ru' | 'en'

export const sectionIds = {
  about: 'about',
  experience: 'experience',
  services: 'services',
  projects: 'projects',
  skills: 'skills',
  contact: 'contact',
} as const

export type SectionId = (typeof sectionIds)[keyof typeof sectionIds]

type ExperienceItem = {
  company: string
  role: string
  dates: string
  bullets: string[]
  moreBullets?: string[]
  stack: string
}

type ServiceItem = {
  title: string
  what: string
  timeline: string
}

type ProjectItem = {
  title: string
  description: string
  href: string
  badges: string[]
}

type SkillGroup = {
  title: string
  items: string[]
}

export const content = {
  ru: {
    a11y: {
      skip: 'Перейти к содержимому',
    },
    header: {
      brand: 'ДД',
      name: 'Дмитрий Дмитриев',
      nav: [
        { id: sectionIds.about, label: 'О себе' },
        { id: sectionIds.experience, label: 'Опыт' },
        { id: sectionIds.services, label: 'Услуги' },
        { id: sectionIds.projects, label: 'Проекты' },
        { id: sectionIds.skills, label: 'Навыки' },
        { id: sectionIds.contact, label: 'Контакты' },
      ],
    },
    hero: {
      name: 'Дмитрий Дмитриев',
      title: 'Руководитель направления Data / Руководитель стратегии данных',
      lines: [
        'DWH / data platforms / BI: архитектура, дорожная карта, delivery.',
        'AI-native: Cursor/Claude daily driver, автоматизирую рутину и ускоряю результат.',
      ],
      badges: ['ex-Cisco', 'ex-EY', 'ex-CEO Союз-317'],
      proof: [
        'Data strategy и roadmap',
        'Lifecycle DWH ~200TB',
        'Пайплайны 10M+ записей',
        'Команды до 20',
      ],
      carouselTitle: 'Разделы',
      carouselPrev: 'Назад',
      carouselNext: 'Далее',
      ctas: {
        hh: 'CV (HH)',
        services: 'Услуги',
        contact: 'Связаться',
      },
      links: {
        hh: 'https://hh.ru/resume/73d656b6ff00cd8d0d0039ed1f4350786e394d',
      },
      constellationHint:
        'Нажмите на карточку, чтобы перейти к разделу.',
    },
    about: {
      title: 'О себе',
      positioning: [
        'Веду data-стратегию и delivery: roadmap, архитектура платформы, governance и BI, которым доверяют руководители.',
        'Совмещаю стратегию с hands-on архитектурой: DWH/lakehouse, жизненный цикл данных, интеграции, основы DataOps.',
      ],
      outcomes: [
        'Стандартизировал DWH/BI-решения и архитектурные гайдлайны в команде, снижая переделки и ручной труд при подготовке отчетов.',
        'Спроектировал управление жизненным циклом данных для крупных корпоративных DWH (включая ландшафты масштаба ~200TB): контролируемый перенос данных между MPP и Hadoop и обратно.',
        'Внедрял паттерны ingestion/integration для бизнес-систем (источники уровня Salesforce), повышая консистентность отчетности.',
        'Готовил архитектуру, оценки и планы работ для enterprise-заказчиков; обеспечивал согласование со стейкхолдерами и исполнение.',
        'Использовал AI как мультипликатор при нехватке ресурсов, сохраняя качество за счет обязательной ручной валидации.',
      ],
      outcomesLabel: 'Достижения',
      showMore: 'Показать больше',
      showLess: 'Скрыть',
      operatingLabel: 'Как работаю',
      operatingModel: [
        'Стратегия: диагностика → целевая архитектура → поэтапный roadmap с критериями готовности и управлением рисками.',
        'Governance: определения KPI, ownership и легкие процессы, которые масштабируются.',
        'Delivery: короткие итерации, прозрачные зависимости, регулярный stakeholder cadence.',
      ],
      focusLabel: 'Фокус',
      focus:
        'DWH, Data Lake, Data Mesh, ETL/ELT, Data Lineage, BI, интеграции, DataOps/MLOps.',
    },
    experience: {
      title: 'Опыт',
      showMore: 'Показать больше',
      showLess: 'Свернуть',
      items: [
        {
          company: 'MASTERDATA',
          role: 'Tech Lead / Архитектор DWH & BI / Presale-эксперт',
          dates: 'Август 2025 — н.в.',
          bullets: [
            'Стандартизировал интеграцию данных SFE и подготовку отчетности, снизив ручной труд при создании и обновлении отчетов.',
            'Задал и обеспечил соблюдение архитектурных гайдлайнов в команде из 4 инженеров, повысив предсказуемость и консистентность delivery.',
            'Готовил архитектуру, оценки и план работ для тендеров/пресейла; переводил требования в реализуемую декомпозицию.',
            'Вел техническое руководство delivery: постановка задач, контроль качества, документация и коммуникации с заказчиком.',
          ],
          moreBullets: [
            'Данные: десятки миллионов записей из SFE/masterdata источников; пайплайны и витрины под отчетность.',
            'Ключевой проект — крупная международная фармацевтическая компания: интеграция данных из Elma в глобальное корпоративное хранилище (AWS Athena, Amazon Redshift, dbt, Power BI).',
            'Урок: AI критичен при нехватке ресурсов, но все артефакты и код должны проходить ручную верификацию.',
          ],
          stack:
            'AWS Athena, Amazon Redshift, dbt, Power BI, Postgres, Greenplum, Hadoop, Nifi, Airflow, Docker, Kubernetes, Kafka, Python, Java',
        },
        {
          company: 'Diasoft',
          role: 'Ведущий инженер-аналитик, Архитектор PBC',
          dates: 'Октябрь 2022 — Август 2025',
          bullets: [
            'Спроектировал управление жизненным циклом данных для корпоративного DWH банка (~200TB): контролируемый перенос данных между Greenplum и Hadoop и обратно.',
            'Работал архитектором в delivery-команде 15–20 человек: согласование дизайна с эксплуатацией, процессами и ограничениями банка.',
            'Проектировал продуктовые возможности работы с данными в микросервисной архитектуре (data factory / data mesh паттерны).',
            'Исследовал и оценивал технологии, формируя pragmatic build-vs-buy решения для платформы.',
            'Формализовал требования и переводил их в backlog для команды разработки.',
          ],
          moreBullets: [
            'Спроектировал механизм ingestion и auto data lineage для продуктовой платформы.',
            'Урок: в продуктовых задачах time-to-value и adoption так же важны, как корректность архитектуры.',
          ],
          stack:
            'Postgresql, Greenplum, Hadoop, Nifi, Airflow, Docker, Kubernetes, Kafka/API/SOAP/GRPC, Confluence, Python, Java',
        },
        {
          company: 'Союз Технологических Компаний (НКО)',
          role: 'Tech Lead',
          dates: 'Сентябрь 2024 — Декабрь 2024',
          bullets: [
            'Запустил AI-дайджест для телеграм-канала на 5000 человек.',
          ],
          moreBullets: [
            'Антиспам-бот: реализован с использованием библиотек Telethon и LLM (Claude API). Автоматическое обнаружение и удаление спам-сообщений в группах Telegram.',
            'Бот-агрегатор новостей: автоматизирует сбор новостей из заданных Telegram-каналов, анализирует их с помощью LLM и классифицирует по категориям.',
            'Бот-дайджест: формирует краткие сводки новостей на основе всех материалов, собранных за определённый период (Claude API).',
          ],
          stack:
            'Python, Telegram Bot API (python-telegram-bot, telethon), PostgreSQL, Claude AI, OpenAI GPT, asyncio',
        },
        {
          company: 'CT Consulting',
          role: 'Заместитель директора по международным проектам',
          dates: 'Октябрь 2019 — Октябрь 2022',
          bullets: [
            'Запускал data-платформы и BI для 1000+ пользователей: архитектура, roadmap, stakeholder management и delivery.',
            'Интегрировал данные из нескольких Salesforce-систем (в т.ч. данные пациентов); десятки миллионов записей; стандартизировал пайплайны для устойчивой отчетности.',
            'Управлял рисками и ресурсами в проектных группах до 15 человек; обеспечивал качество и сроки.',
            'Готовил и согласовывал технические артефакты (архитектура, словарь данных, data flows, mapping/lineage) для ускорения alignment и sign-off.',
            'При ограниченном бюджете на DWH использовал open-source и прагматичные подходы, чтобы быстрее дать бизнес-эффект.',
          ],
          moreBullets: [
            'Data-платформа для >1000 пользователей (Airflow, PostgreSQL, Tableau, Heroku (AWS), Docker, Git).',
            'Масштабирование проекта с 1 до 15+ разработчиков.',
            'Эталонная архитектура, которая помогла продать 3 других проекта новым клиентам.',
            'Custom коннекторы для Salesforce, Tableau Online.',
            'Проектирование и разработка элементов DWH: raw, delta ETL, table enrichment, data vault, virtual business logic, star/snowflake schemas, data marts, data mesh.',
            'Проектирование и внедрение BI-инструментов: источники, модель данных, фильтры, права доступа, RLS.',
            'Работа с DevOps для организации CI/CD (DataOps, MLOps).',
            'Урок: если нет бюджета на DWH, важно быстро собрать минимальную архитектуру, которая обеспечивает консистентность и масштабирование.',
          ],
          stack:
            'Airflow, PostgreSQL, Tableau, Heroku (AWS), Docker, Git, Salesforce, SAP, Power BI, Python, Data Vault',
        },
        {
          company: 'Союз 317',
          role: 'Генеральный директор',
          dates: 'Март 2022 — Сентябрь 2022',
          bullets: [
            'Совместно с акционерами проработка коммерческой стратегии компании.',
            'Лидирование процесса постановки разработанных ИТ-продуктов на баланс организации.',
            'Формирование процессов внутренней отчетности по работе продуктовых команд.',
            'Участие во встречах по продаже продуктов компании.',
            'Весомый вклад в стратегическое партнерство с крупным потенциальным заказчиком.',
          ],
          stack: 'Бизнес-стратегия, управление, продукты, продажи',
        },
        {
          company: 'MASTERDATA',
          role: 'Senior DWH & BI Developer, Architect, Team Lead',
          dates: 'Декабрь 2014 — Сентябрь 2019',
          bullets: [
            'Развитие BI-решений для международных клиентов (фармацевтика, банкинг, образование, розница).',
            'Архитектура и внедрение DWH на стеках SAP (BW, HANA, Data Services), Salesforce, Amazon Redshift, Birst.',
            'Управление командами до 10 человек.',
          ],
          moreBullets: [
            'Проекты для крупных клиентов: крупная фармацевтическая компания США, крупная российская фармацевтическая компания, частный банк СНГ, онлайн-обучение в США, топ-2 розничных компаний СНГ.',
            'Создание отчетов в Excel VBA, Power Query, Salesforce Einstein Analytics, SAP BusinessObjects, Tableau.',
            'Автоматизация доставки отчетов: более 100 пользователей, минимальная поддержка.',
            'Стратегический BI-консалтинг: анализ HANA DWH, оценка миграции, план перевода на новую платформу.',
          ],
          stack:
            'SAP BW, SAP HANA, SAP Data Services, SAP BusinessObjects, Salesforce, Amazon Redshift, Birst, MSSQL, Excel VBA, Power Query',
        },
        {
          company: 'EY Russia',
          role: 'Senior Consultant, Advisory/Performance Improvement',
          dates: 'Октябрь 2014 — Ноябрь 2014',
          bullets: [
            'Клиент: крупный проект в государственной корпорации. Цель: консолидация финансовой отчетности.',
            'Внедрение решения для финансового контроля на SAP BEx.',
            'Внедрение изменений в решение: модель, ABAP, BEx, рабочие книги в SAP BW.',
            'Оптимизация экстрактора SAP FI, поддержка go-live.',
          ],
          stack: 'SAP BW, SAP ERP, SAP BEx',
        },
        {
          company: 'MASTERDATA',
          role: 'BI Consultant',
          dates: 'Август 2011 — Сентябрь 2014',
          bullets: [
            'Проект для топ-2 компании СНГ по производству крупногабаритной бытовой техники.',
            'Роль: архитектор DWH и руководитель группы внедрения.',
            'Моделирование данных в SAP BW и SAP HANA, тестирование, подготовка к запуску.',
          ],
          stack: 'SAP CRM, SAP HANA, SAP BW, SAP BusinessObjects',
        },
        {
          company: 'Cisco Systems',
          role: 'Channel Operations Specialist',
          dates: 'Июнь 2009 — Июль 2011',
          bullets: [
            'Поддержка бизнес-лидеров в реализации проекта DDU.',
            'Ежедневная/еженедельная/ежеквартальная отчетность по проекту.',
            'Реализовано решение для отчетности в MS Access (~10 источников, 20 получателей).',
            'Автоматическое генерирование писем партнерам.',
            'Реализовано приложение MS Access для автоматического создания дополнений к контрактам.',
          ],
          stack: 'MS Access, VBA, SQL, DW-технологии',
        },
        {
          company: 'London Borough of Hackney',
          role: 'Information Architecture Analyst',
          dates: 'Июль 2008 — Сентябрь 2008',
          bullets: [
            'Обзор корпоративной информационной архитектуры.',
            'Результаты представлены руководству высшего и среднего звена.',
          ],
          stack: 'Информационная архитектура, анализ',
        },
        {
          company: 'Research Institute "Automated Systems"',
          role: 'Developer C/C++',
          dates: 'Сентябрь 2006 — Август 2007',
          bullets: [
            'Разработка системы контроля доступа (6 АРМов).',
            'Руководство командой из 3 человек.',
            'Работа с многопоточностью, блокировками, БД, аппаратным API, обработкой изображений.',
          ],
          stack: 'C++, ODBC, WinAPI, MS SQL Server 2005',
        },
        {
          company: 'Research Institute "Radar Systems"',
          role: 'Database/System Developer',
          dates: 'Сентябрь 2006 — Февраль 2007',
          bullets: [
            'Внедрена система бухгалтерского учёта для НИИ «Радиолокационные системы».',
          ],
          stack: 'Базы данных, бухгалтерский учёт',
        },
        {
          company: 'KREDIT-PILOT.COM',
          role: 'Customer Support Analyst',
          dates: 'Октябрь 2005 — Март 2006',
          bullets: [
            'Увеличение прибыли подразделения на 7% за счёт устранения систематических ошибок.',
            'Оптимизация операций технической поддержки.',
          ],
          stack: 'Поддержка клиентов, бизнес-процессы',
        },
      ] satisfies ExperienceItem[],
    },
    services: {
      title: 'Услуги',
      note: 'Remote-friendly. Форматы: договор / проект / консалтинг, включая ИП.',
      items: [
        {
          title: 'DWH / Lakehouse архитектура и roadmap',
          what: 'Архитектура, план работ, критерии готовности, риски и приоритеты.',
          timeline: 'Обычно: 1–3 недели (аудит → целевое решение → план).',
        },
        {
          title: 'ETL/ELT пайплайны',
          what: 'Ingestion, нормализация, дедуп, lineage, DQ, мониторинг.',
          timeline: 'Обычно: 2–6 недель на домен/поток (зависит от источников).',
        },
        {
          title: 'BI / KPI методология / performance',
          what: 'Единые определения метрик, витрины, ускорение отчетов (Postgres/ClickHouse).',
          timeline: 'Обычно: 1–4 недели (от задачи до прод-дашборда).',
        },
        {
          title: 'POC/MVP «быстро в прод» (AI-native)',
          what: 'Прототип/демо, техническая рамка, первые пользователи и метрики успеха.',
          timeline: 'Обычно: 3–10 дней на POC, 2–4 недели на MVP.',
        },
      ] satisfies ServiceItem[],
    },
    projects: {
      title: 'Проекты',
      subtitle: 'Вайб-код проекты',
      view: 'Открыть',
      items: [
        {
          title: 'AI Digest (Telegram)',
          description:
            'Подборка/дайджест с фокусом на практические кейсы и гранты/возможности.',
          href: 'https://t.me/ITgrants/60034',
          badges: ['AI', 'Content', 'Telegram'],
        },
        {
          title: 'Dungeon Shooter (WebGL)',
          description:
            'Небольшой 3D-шутер: сцена, физика/управление, игровой цикл, деплой на Pages.',
          href: 'https://dddmityamd.github.io/Dungeon-Shooter/',
          badges: ['WebGL', 'Demo', '3D'],
        },
        {
          title: 'Doggo 3D (mini adventure)',
          description:
            'Мини-приключение в 3D: атмосфера, простая навигация и интеракции.',
          href: 'https://dddmityamd.github.io/doggo-3d/',
          badges: ['WebGL', 'Demo', '3D'],
        },
      ] satisfies ProjectItem[],
    },
    skills: {
      title: 'Навыки',
      groups: [
        {
          title: 'Data/DB',
          items: ['Postgres', 'ClickHouse', 'DWH', 'Lakehouse', 'Data Modeling', 'Greenplum', 'MSSQL', 'Oracle'],
        },
        {
          title: 'Orchestration',
          items: ['Airflow', 'dbt', 'ELT', 'DQ/Monitoring', 'Lineage', 'Nifi', 'Kafka'],
        },
        {
          title: 'BI',
          items: ['Power BI', 'Tableau', 'Yandex DataLens', 'KPI Methodology', 'SAP BusinessObjects', 'Salesforce Einstein Analytics', 'Birst'],
        },
        {
          title: 'DevOps',
          items: ['Docker', 'Git', 'CI/CD', 'Linux basics', 'Kubernetes'],
        },
        {
          title: 'Languages',
          items: ['Python', 'SQL', 'TypeScript', 'Java', 'C++'],
        },
        {
          title: 'SAP / Enterprise',
          items: ['SAP BW', 'SAP HANA', 'SAP Data Services', 'SAP BusinessObjects', 'SAP BEx'],
        },
        {
          title: 'Soft Skills',
          items: ['Project management', 'Team leadership', 'Presentations', 'Training', 'Business communication', 'Sales'],
        },
        {
          title: 'Методологии / Другое',
          items: ['Scrum', 'SAFe', 'DataOps', 'MLOps', 'Data Vault', 'Data Mesh'],
        },
      ] satisfies SkillGroup[],
    },
    contact: {
      title: 'Контакты',
      invite:
        'Напишите — отвечу быстро. Могу подключиться к аудиту, roadmap, внедрению или POC.',
      tz: 'Часовой пояс: Europe/Istanbul',
      telegramLabel: 'Telegram',
      emailLabel: 'Email',
      copy: 'Копировать',
      copied: 'Скопировано',
      telegram: '@dddmitya',
      email: 'dddmitya@mail.ru',
    },
    footer: {
      rights: `© ${new Date().getFullYear()} Дмитрий Дмитриев`,
      stack: 'Vite • React • TS • Tailwind • three.js',
    },
  },

  en: {
    a11y: {
      skip: 'Skip to content',
    },
    header: {
      brand: 'DD',
      name: 'Dmitry Dmitriev',
      nav: [
        { id: sectionIds.about, label: 'About' },
        { id: sectionIds.experience, label: 'Experience' },
        { id: sectionIds.services, label: 'Services' },
        { id: sectionIds.projects, label: 'Projects' },
        { id: sectionIds.skills, label: 'Skills' },
        { id: sectionIds.contact, label: 'Contact' },
      ],
    },
    hero: {
      name: 'Dmitry Dmitriev',
      title: 'Head of Data / Data Strategy Lead',
      lines: [
        'DWH / data platforms / BI: architecture, roadmap, delivery.',
        'AI-native: Cursor/Claude daily driver; I automate routine work and ship faster.',
      ],
      badges: ['ex-Cisco', 'ex-EY', 'ex-CEO SOYUZ-317'],
      proof: [
        'Data strategy & roadmap',
        '200TB-class DWH lifecycle',
        '10M+ records pipelines',
        'Teams up to 20',
      ],
      carouselTitle: 'Sections',
      carouselPrev: 'Prev',
      carouselNext: 'Next',
      ctas: {
        hh: 'CV (HH)',
        services: 'Services',
        contact: 'Contact',
      },
      links: {
        hh: 'https://hh.ru/resume/73d656b6ff00cd8d0d0039ed1f4350786e394d',
      },
      constellationHint:
        'Click a card to jump to a section.',
    },
    about: {
      title: 'About',
      positioning: [
        'I lead data strategy and delivery: roadmap, platform architecture, governance, and BI executives trust.',
        'I combine strategy with hands-on architecture: DWH/lakehouse, lifecycle management, integrations, and DataOps foundations.',
      ],
      outcomes: [
        'Standardized DWH/BI solutions and architectural guidelines across teams to reduce rework and manual reporting effort.',
        'Designed data lifecycle management for large-scale enterprise DWH (including ~200TB-class estates): controlled movement between MPP and Hadoop and back.',
        'Shipped ingestion/integration patterns for business systems (Salesforce-class sources) and improved consistency of reporting outputs.',
        'Delivered scoped architectures, estimates, and delivery plans for enterprise clients; aligned stakeholders and execution.',
        'Used AI as a force multiplier in constrained teams while keeping quality via manual verification.',
      ],
      outcomesLabel: 'Highlights',
      showMore: 'Show more',
      showLess: 'Hide',
      operatingLabel: 'How I operate',
      operatingModel: [
        'Strategy: discovery → target architecture → phased roadmap with acceptance criteria and risk management.',
        'Governance: KPI definitions, ownership, and lightweight processes that scale.',
        'Delivery: small increments, clear dependencies, predictable stakeholder cadence.',
      ],
      focusLabel: 'Focus',
      focus:
        'DWH, Data Lake, Data Mesh, ETL/ELT, Data Lineage, BI, integrations, DataOps/MLOps.',
    },
    experience: {
      title: 'Experience',
      showMore: 'Show more',
      showLess: 'Show less',
      items: [
        {
          company: 'MASTERDATA',
          role: 'Tech Lead / DWH & BI Architect / Presale Expert',
          dates: 'August 2025 — now',
          bullets: [
            'Standardized SFE data integration and reporting delivery, reducing manual effort to create and update reports.',
            'Defined and enforced architectural guidelines for a small team (4), improving consistency and delivery predictability.',
            'Owned presales: turned requirements into target architecture, estimates, and an executable delivery plan.',
            'Led delivery execution: task decomposition, quality control, documentation, and client communication.',
          ],
          moreBullets: [
            'Data scale: tens of millions of records from SFE/masterdata sources; pipelines and marts for reporting.',
            'Key project: large international pharma company — Elma CRM data integration into global DWH (AWS Athena, Amazon Redshift, dbt, Power BI).',
            'Lesson learned: AI is crucial when resources are tight, but every generated artifact must be manually verified.',
          ],
          stack:
            'AWS Athena, Amazon Redshift, dbt, Power BI, Postgres, Greenplum, Hadoop, Nifi, Airflow, Docker, Kubernetes, Kafka, Python, Java',
        },
        {
          company: 'Diasoft',
          role: 'Lead Engineer-Analyst, PBC Architect',
          dates: 'October 2022 — August 2025',
          bullets: [
            'Designed data lifecycle management for a bank corporate DWH (~200TB): controlled movement between Greenplum and Hadoop and back.',
            'Worked as an architect within a 15–20 person delivery: aligned design with operations, processes, and bank constraints.',
            'Designed data platform product capabilities in a microservices architecture (data factory / data mesh patterns).',
            'Evaluated technologies and shaped pragmatic build-vs-buy decisions for the platform.',
            'Translated requirements into an actionable backlog for engineering teams.',
          ],
          moreBullets: [
            'Designed ingestion approach and auto data lineage for the product platform.',
            'Lesson learned: time-to-value and adoption matter as much as architectural correctness in product work.',
          ],
          stack:
            'Postgresql, Greenplum, Hadoop, Nifi, Airflow, Docker, Kubernetes, Kafka/API/SOAP/GRPC, Confluence, Python, Java',
        },
        {
          company: 'Union of Technology Companies (NGO)',
          role: 'Tech Lead',
          dates: 'September 2024 — December 2024',
          bullets: [
            'Launched AI digest for a 5000+ member Telegram channel.',
          ],
          moreBullets: [
            'Anti-spam bot: Telethon + LLM (Claude API) for spam detection and user management.',
            'News aggregator: collects from Telegram channels, classifies via LLM.',
            'Digest bot: generates structured summaries using Claude API.',
          ],
          stack:
            'Python, Telegram Bot API (python-telegram-bot, telethon), PostgreSQL, Claude AI, OpenAI GPT, asyncio',
        },
        {
          company: 'CT Consulting',
          role: 'Deputy Director, International Projects (BI/DWH/Data Department)',
          dates: 'October 2019 — October 2022',
          bullets: [
            'Delivered data platforms and BI for 1000+ users: architecture, roadmap, stakeholder management, and delivery execution.',
            'Integrated multiple Salesforce systems (including patient-related data): tens of millions of records; standardized pipelines for reliable reporting.',
            'Managed delivery risk and resourcing in project groups up to 15 people; protected quality and timelines.',
            'Produced and aligned technical artifacts (architecture, data dictionary, flows, mapping/lineage) to accelerate sign-off and execution.',
            'When DWH budget was constrained, used open-source and pragmatic approaches to ship value faster.',
          ],
          moreBullets: [
            'Data platform for 1000+ users (Airflow, PostgreSQL, Tableau, Heroku/AWS, Docker, Git).',
            'Scaled project team from 1 to 15+ developers.',
            'Reference architecture that helped sell 3 additional projects.',
            'Custom integrations for Salesforce and Tableau Online.',
            'DWH design: raw, delta ETL, table enrichment, data vault, virtual business logic, star/snowflake schemas, data marts, data mesh.',
            'BI tools design: sources, model, filters, permissions, RLS.',
            'CI/CD for DataOps/MLOps.',
            'Lesson learned: when there is no DWH budget, ship the minimum architecture that enforces consistency and can scale.',
          ],
          stack:
            'Airflow, PostgreSQL, Tableau, Heroku (AWS), Docker, Git, Salesforce, SAP, Power BI, Python, Data Vault',
        },
        {
          company: 'SOYUZ-317',
          role: 'CEO',
          dates: 'March 2022 — September 2022',
          bullets: [
            'Co-developed commercial strategy with shareholders.',
            'Led the process of capitalizing developed IT products.',
            'Built internal reporting for product teams.',
            'Participated in sales meetings and strategic partnerships.',
          ],
          stack: 'Business strategy, management, products, sales',
        },
        {
          company: 'MASTERDATA',
          role: 'Senior DWH & BI Developer, Architect, Team Lead',
          dates: 'December 2014 — September 2019',
          bullets: [
            'Developed BI solutions for international clients (pharma, banking, education, retail).',
            'DWH architecture and implementation on SAP (BW, HANA, Data Services), Salesforce, Amazon Redshift, Birst.',
            'Managed teams up to 10 people.',
          ],
          moreBullets: [
            'Clients: large US pharma, large Russian pharma, private bank, online education, top-2 CIS retail.',
            'Reports: Excel VBA, Power Query, Salesforce Einstein Analytics, SAP BusinessObjects, Tableau.',
            'Automated report delivery for 100+ users with minimal support.',
            'Strategic BI consulting: HANA DWH analysis, migration assessment and roadmap.',
          ],
          stack:
            'SAP BW, SAP HANA, SAP Data Services, SAP BusinessObjects, Salesforce, Amazon Redshift, Birst, MSSQL, Excel VBA, Power Query',
        },
        {
          company: 'EY Russia',
          role: 'Senior Consultant, Advisory/Performance Improvement',
          dates: 'October 2014 — November 2014',
          bullets: [
            'Client: large project in a state-owned corporation. Goal: financial reporting consolidation.',
            'Implemented financial control solution on SAP BEx.',
            'Solution changes: model, ABAP, BEx, workbooks in SAP BW.',
            'SAP FI extractor optimization, go-live support.',
          ],
          stack: 'SAP BW, SAP ERP, SAP BEx',
        },
        {
          company: 'MASTERDATA',
          role: 'BI Consultant',
          dates: 'August 2011 — September 2014',
          bullets: [
            'Project: top-2 CIS large home appliance manufacturer.',
            'Role: DWH architect and implementation team lead.',
            'Data modeling in SAP BW and SAP HANA, testing, go-live preparation.',
          ],
          stack: 'SAP CRM, SAP HANA, SAP BW, SAP BusinessObjects',
        },
        {
          company: 'Cisco Systems',
          role: 'Channel Operations Specialist',
          dates: 'June 2009 — July 2011',
          bullets: [
            'Supported business leaders in DDU project delivery.',
            'Daily/weekly/quarterly project reporting.',
            'Long-term MS Access reporting solution (~10 sources, 20 recipients, automated emails).',
            'MS Access app for contract amendment automation.',
          ],
          stack: 'MS Access, VBA, SQL, DW technologies',
        },
        {
          company: 'London Borough of Hackney',
          role: 'Information Architecture Analyst',
          dates: 'July 2008 — September 2008',
          bullets: [
            'Corporate information architecture review.',
            'Results presented to senior and middle management.',
          ],
          stack: 'Information architecture, analysis',
        },
        {
          company: 'Research Institute "Automated Systems"',
          role: 'Developer C/C++',
          dates: 'September 2006 — August 2007',
          bullets: [
            'Access control system development (6 workstations).',
            'Led a team of 3.',
            'Multithreading, locking, DB, hardware API, image processing.',
          ],
          stack: 'C++, ODBC, WinAPI, MS SQL Server 2005',
        },
        {
          company: 'Research Institute "Radar Systems"',
          role: 'Database/System Developer',
          dates: 'September 2006 — February 2007',
          bullets: [
            'Accounting system for "Radar Systems" research institute.',
          ],
          stack: 'Databases, accounting',
        },
        {
          company: 'KREDIT-PILOT.COM',
          role: 'Customer Support Analyst',
          dates: 'October 2005 — March 2006',
          bullets: [
            '+7% profit increase by eliminating systematic errors.',
            'Optimized support operations.',
          ],
          stack: 'Customer support, business processes',
        },
      ] satisfies ExperienceItem[],
    },
    services: {
      title: 'Services',
      note: 'Remote-friendly. Contract formats include contractor (IP).',
      items: [
        {
          title: 'DWH / Lakehouse architecture & roadmap',
          what: 'Architecture, plan, acceptance criteria, risks, priorities.',
          timeline: 'Typical: 1–3 weeks (audit → target design → roadmap).',
        },
        {
          title: 'ETL/ELT pipelines',
          what: 'Ingestion, normalization, dedup, lineage, DQ, monitoring.',
          timeline: 'Typical: 2–6 weeks per domain/stream (depends on sources).',
        },
        {
          title: 'BI / KPI methodology / performance',
          what: 'Metric definitions, marts, faster dashboards (Postgres/ClickHouse).',
          timeline: 'Typical: 1–4 weeks (from request to production dashboard).',
        },
        {
          title: 'POC/MVP "ship fast" (AI-native)',
          what: 'Prototype/demo, technical frame, first users, success metrics.',
          timeline: 'Typical: 3–10 days for POC, 2–4 weeks for MVP.',
        },
      ] satisfies ServiceItem[],
    },
    projects: {
      title: 'Projects',
      subtitle: 'Vibe code projects',
      view: 'View',
      items: [
        {
          title: 'AI Digest (Telegram)',
          description: 'A curated digest with a focus on practical AI and opportunities.',
          href: 'https://t.me/ITgrants/60034',
          badges: ['AI', 'Content', 'Telegram'],
        },
        {
          title: 'Dungeon Shooter (WebGL)',
          description: 'A small 3D shooter: scene, controls, game loop, Pages deploy.',
          href: 'https://dddmityamd.github.io/Dungeon-Shooter/',
          badges: ['WebGL', 'Demo', '3D'],
        },
        {
          title: 'Doggo 3D (mini adventure)',
          description: 'A mini 3D adventure with light navigation and interactions.',
          href: 'https://dddmityamd.github.io/doggo-3d/',
          badges: ['WebGL', 'Demo', '3D'],
        },
      ] satisfies ProjectItem[],
    },
    skills: {
      title: 'Skills',
      groups: [
        {
          title: 'Data/DB',
          items: ['Postgres', 'ClickHouse', 'DWH', 'Lakehouse', 'Data Modeling', 'Greenplum', 'MSSQL', 'Oracle'],
        },
        {
          title: 'Orchestration',
          items: ['Airflow', 'dbt', 'ELT', 'DQ/Monitoring', 'Lineage', 'Nifi', 'Kafka'],
        },
        {
          title: 'BI',
          items: ['Power BI', 'Tableau', 'Yandex DataLens', 'KPI Methodology', 'SAP BusinessObjects', 'Salesforce Einstein Analytics', 'Birst'],
        },
        {
          title: 'DevOps',
          items: ['Docker', 'Git', 'CI/CD', 'Linux basics', 'Kubernetes'],
        },
        {
          title: 'Languages',
          items: ['Python', 'SQL', 'TypeScript', 'Java', 'C++'],
        },
        {
          title: 'SAP / Enterprise',
          items: ['SAP BW', 'SAP HANA', 'SAP Data Services', 'SAP BusinessObjects', 'SAP BEx'],
        },
        {
          title: 'Soft Skills',
          items: ['Project management', 'Team leadership', 'Presentations', 'Training', 'Business communication', 'Sales'],
        },
        {
          title: 'Methodologies / Other',
          items: ['Scrum', 'SAFe', 'DataOps', 'MLOps', 'Data Vault', 'Data Mesh'],
        },
      ] satisfies SkillGroup[],
    },
    contact: {
      title: 'Contact',
      invite:
        'Message me — I reply quickly. Happy to help with audit, roadmap, implementation, or a POC.',
      tz: 'Timezone: Europe/Istanbul',
      telegramLabel: 'Telegram',
      emailLabel: 'Email',
      copy: 'Copy',
      copied: 'Copied',
      telegram: '@dddmitya',
      email: 'dddmitya@mail.ru',
    },
    footer: {
      rights: `© ${new Date().getFullYear()} Dmitry Dmitriev`,
      stack: 'Vite • React • TS • Tailwind • three.js',
    },
  },
} as const

export type Content = (typeof content)[Lang]
