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
      carouselTitle: 'Разделы',
      ctas: {
        hh: 'CV (HH)',
        services: 'Услуги',
        contact: 'Связаться',
      },
      links: {
        hh: 'https://hh.ru/resume/73d656b6ff00cd8d0d0039ed1f4350786e394d',
      },
      constellationHint:
        'Нажмите на точку, чтобы перейти к разделу (доступна текстовая навигация).',
    },
    about: {
      title: 'О себе',
      body:
        'Проектирую и развиваю корпоративные DWH и data-платформы, BI-системы и интеграционные решения. Совмещаю архитектуру с hands-on работой: модели данных, ETL/ELT-пайплайны, интеграции, CI/CD, код-ревью. Имею опыт работы в enterprise-проектах, консалтинге и продуктовых командах. Выступал в ролях Tech Lead и руководителя направлений, выстраивал взаимодействие со стейкхолдерами уровня C-suite. Запускал ML-продукт в промышленную эксплуатацию. Работал CEO ИТ-компании «Союз-317». Открыт к сотрудничеству в различных форматах: штат, проектная работа, консалтинг, ИП. Привык брать ответственность за результат и стабильно превышать ожидания заказчиков — за счёт системного подхода, автоматизации и активного использования ИИ в аналитике и разработке.',
      showMore: 'Показать больше',
      showLess: 'Скрыть',
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
            'Участие в развитии направления DWH/BI компании.',
            'Подготовка и участие в тендерах и пресейлах: анализ требований, формирование архитектурных решений, подготовка оценок.',
            'Архитектурное проектирование и техническое руководство проектами: декомпозиция задач, постановка задач команде, контроль сроков и качества.',
            'Ведение проектной документации и взаимодействие с заказчиками на всех этапах.',
            'Разработка архитектурных решений в области корпоративных хранилищ данных и BI.',
          ],
          moreBullets: [
            'Ключевой проект — Крупная международная фармацевтическая компания: интеграция данных из Elma в глобальное корпоративное хранилище данных (AWS Athena, Amazon Redshift, dbt, Power BI).',
            'Роль: Tech Lead — архитектура решения, проектирование пайплайнов, руководство командой data инженеров.',
          ],
          stack:
            'AWS Athena, Amazon Redshift, dbt, Power BI, Postgres, Greenplum, Hadoop, Nifi, Airflow, Docker, Kubernetes, Kafka, Python, Java',
        },
        {
          company: 'Diasoft',
          role: 'Ведущий инженер-аналитик, Архитектор PBC',
          dates: 'Октябрь 2022 — Август 2025',
          bullets: [
            'Проектирование продуктов для работы с данными в микросервисной архитектуре в парадигмах data factory и data mesh.',
            'Исследование новых технологий и возможность их применения в технологической платформе.',
            'Проработка и формализация требований и трансляция их в виде задач команде разработки продукта.',
            'Совместная проработка продуктовых и проектных решений с архитекторами и владельцами продуктов.',
            'Работа в географически распределенной команде по SCRUM.',
          ],
          moreBullets: [
            'Реализовал механизм data ingestion и auto data lineage.',
            '+10× ускорение обработки потоков данных.',
            '+20% использование low-code инструментов.',
            'Архитектура управления жизненным циклом данных для банка (Oracle/Arenadata/Hadoop/Hive/Airflow).',
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
            'Взаимодействие с клиентом: демонстрация экспертизы, выявление и формирование потребностей, презентация результатов.',
            'Разработка и согласование технических документов (архитектуры, словарь данных, потоки данных, маппинг/lineage).',
            'Контроль и управление проектными рисками.',
            'Управление проектными ресурсами.',
            'Предоставление экспертизы по BI-решениям для кросс-функциональных команд и помощь в presale.',
            'Изучение решений и актуализация экспертизы в части BI/DWH/ML/DL.',
            'Управление/поддержка проектных групп (2–15 человек).',
          ],
          moreBullets: [
            'Data-платформа для >1000 пользователей (Airflow, PostgreSQL, Tableau, Heroku (AWS), Docker, Git).',
            'Масштабирование проекта с 1 до 15+ разработчиков.',
            'Эталонная архитектура, которая помогла продать 3 других проекта новым клиентам.',
            'Custom коннекторы для Salesforce, Tableau Online.',
            'Проектирование и разработка элементов DWH: raw, delta ETL, table enrichment, data vault, virtual business logic, star/snowflake schemas, data marts, data mesh.',
            'Проектирование и внедрение BI-инструментов: источники, модель данных, фильтры, права доступа, RLS.',
            'Работа с DevOps для организации CI/CD (DataOps, MLOps).',
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
      carouselTitle: 'Sections',
      ctas: {
        hh: 'CV (HH)',
        services: 'Services',
        contact: 'Contact',
      },
      links: {
        hh: 'https://hh.ru/resume/73d656b6ff00cd8d0d0039ed1f4350786e394d',
      },
      constellationHint:
        'Click a node to jump to a section (text navigation is available as a fallback).',
    },
    about: {
      title: 'About',
      body:
        'I build and scale enterprise DWH and data platforms, BI systems, and integrations — combining architecture with hands-on: data models, ETL/ELT pipelines, integrations, CI/CD, code review. I have experience in enterprise, consulting, and product teams. Led as Tech Lead and data practice head, interfacing with C-level stakeholders. Took an ML product from hypothesis to production. Served as CEO at IT company «SOYUZ-317». Open to collaboration: full-time, project, consulting, as a contractor. I own results and consistently exceed expectations through system thinking, automation, and active AI use in analytics and development.',
      showMore: 'Show more',
      showLess: 'Hide',
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
            'Growing DWH/BI practice: tenders, presales, architecture design, estimates.',
            'Architectural design and technical leadership: task decomposition, team management, schedule/quality control.',
            'Technical documentation and client communication across all project stages.',
          ],
          moreBullets: [
            'Key project: large international pharma company — Elma CRM data integration into global DWH (AWS Athena, Amazon Redshift, dbt, Power BI).',
          ],
          stack:
            'AWS Athena, Amazon Redshift, dbt, Power BI, Postgres, Greenplum, Hadoop, Nifi, Airflow, Docker, Kubernetes, Kafka, Python, Java',
        },
        {
          company: 'Diasoft',
          role: 'Lead Engineer-Analyst, PBC Architect',
          dates: 'October 2022 — August 2025',
          bullets: [
            'Designing data products in microservices architecture under data factory and data mesh paradigms.',
            'New technology research and platform evaluation.',
            'Requirements engineering and translating them into development tasks.',
            'Collaborating with architects and product owners; distributed SCRUM team.',
          ],
          moreBullets: [
            'Implemented data ingestion mechanism and auto data lineage.',
            '+10× data stream processing performance improvement.',
            '+20% low-code tool adoption.',
            'Data lifecycle management architecture for a large bank (Oracle/Arenadata/Hadoop/Hive/Airflow).',
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
            'Client engagement: expertise demonstration, needs discovery, results presentation.',
            'Technical documentation: architectures, data dictionary, data flows, lineage.',
            'Risk management and project resource management.',
            'BI expertise for cross-functional teams; presales, MVP, POC support.',
            'Managing project groups (2–15 people).',
          ],
          moreBullets: [
            'Data platform for 1000+ users (Airflow, PostgreSQL, Tableau, Heroku/AWS, Docker, Git).',
            'Scaled project team from 1 to 15+ developers.',
            'Reference architecture that helped sell 3 additional projects.',
            'Custom integrations for Salesforce and Tableau Online.',
            'DWH design: raw, delta ETL, table enrichment, data vault, virtual business logic, star/snowflake schemas, data marts, data mesh.',
            'BI tools design: sources, model, filters, permissions, RLS.',
            'CI/CD for DataOps/MLOps.',
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
