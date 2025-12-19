import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Фармилка",
  description: "Гайд по экосистеме закрытого сообщества Фармилка - Build Together! Farm Together! Work Together!",
  lang: "ru-RU",
  ignoreDeadLinks: true,
  base: "/",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]], 
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Главная", link: "/" },
      { text: "Полный гайд", link: "/introduction/start" },
      { text: "Контент-Хаб", link: "/content-hub/" },
      { text: "Роли и аирдропы", link: "/roles-airdrops/introduction" },
    ],

    // Разные sidebar для разных разделов
    sidebar: {
      // Sidebar для Полного гайда (все страницы кроме /content-hub/)
      "/introduction/": [
        {
          text: "Введение",
          items: [
            { text: "Базовые принципы", link: "/introduction/basic-principles" },
            { text: "Добро пожаловать", link: "/introduction/welcome" },
            { text: "Начало работы", link: "/introduction/start" },
            {
              text: "Связь инструментов",
              link: "/introduction/communication-between-tools",
            },
            {
              text: "Категории инструментов",
              link: "/introduction/categories-of-tools",
            },
          ],
        },
        {
          text: "Инструменты инфополя",
          items: [
            { text: "Оперативный Бот", link: "/infofields/oper-bot" },
            { text: "fMirror Alpha 1.0", link: "/infofields/fmirror-alpha-1" },
            { text: "fMirror Alpha 2.0", link: "/infofields/fmirror-alpha-2" },
            { text: "Зарубежная Альфа", link: "/infofields/foreign-alpha" },
            { text: "fKoreanDrops", link: "/infofields/fkorean-drops" },
            { text: "fMirror Trade", link: "/infofields/fmirror-trade" },
            {
              text: "fMirror Arbitrage",
              link: "/infofields/fmirror-arbitrage",
            },
            { text: "fNews", link: "/infofields/fnews" },
            {
              text: "Как работать с инфополем?",
              link: "/infofields/how-to-work-with-infofield",
            },
          ],
        },
        {
          text: "Рабочие инструменты",
          items: [
            { text: "fRetrodrops", link: "/working-tools/fretrodrops" },
            {
              text: "Что Воркает Фармилка [TO DO]",
              link: "/working-tools/to-do",
            },
            { text: "fNFT/DEGEN MOVE", link: "/working-tools/fnft-degen-move" },
            { text: "fShitcoin", link: "/working-tools/fshitcoin" },
            { text: "fTrade", link: "/working-tools/ftrade" },
            { text: "fArbitrage", link: "/working-tools/farbitrage" },
            { text: "fForex", link: "/working-tools/fforex" },
            { text: "fTONMoves", link: "/working-tools/ftonmoves" },
            { text: "fDeFi", link: "/working-tools/fdefi" },
            { text: "fNodes", link: "/working-tools/fnodes" },
            { text: "fP2E", link: "/working-tools/fp2e" },
            { text: "Обрати Внимание", link: "/working-tools/pay-attention" },
            { text: "fSofts", link: "/working-tools/fsofts" },
            { text: "Академия", link: "/working-tools/academy" },
            {
              text: "Пулы и складчины",
              link: "/working-tools/pools-and-stacks",
            },
            { text: "Выжимки", link: "/working-tools/squeezes" },
          ],
        },
        {
          text: "Инструменты сообщества",
          items: [
            {
              text: "Фармилка [Анонсы и Новости]",
              link: "/community-tools/announcements-and-news",
            },
            { text: "Архив", link: "/community-tools/archive" },
            { text: "fProfit", link: "/community-tools/fprofit" },
            { text: "Чат", link: "/community-tools/chat" },
          ],
        },
        {
          text: "Обзоры Мирроров",
          items: [
            {
              text: "fMirror Alpha 1.0",
              link: "/mirrors-review/fmirror-alpha-1",
            },
            {
              text: "fMirror Alpha 2.0",
              link: "/mirrors-review/fmirror-alpha-2",
            },
            { text: "Зарубежная Альфа", link: "/mirrors-review/foreign-alpha" },
            { text: "fMirror Trade", link: "/mirrors-review/fmirror-trade" },
            {
              text: "fMirror Arbitrage",
              link: "/mirrors-review/fmirror-arbitrage",
            },
          ],
        },
      ],
      "/infofields/": [
        {
          text: "Введение",
          items: [
            { text: "Базовые принципы", link: "/introduction/basic-principles" },
            { text: "Добро пожаловать", link: "/introduction/welcome" },
            { text: "Начало работы", link: "/introduction/start" },
            {
              text: "Связь инструментов",
              link: "/introduction/communication-between-tools",
            },
            {
              text: "Категории инструментов",
              link: "/introduction/categories-of-tools",
            },
          ],
        },
        {
          text: "Инструменты инфополя",
          items: [
            { text: "Оперативный Бот", link: "/infofields/oper-bot" },
            { text: "fMirror Alpha 1.0", link: "/infofields/fmirror-alpha-1" },
            { text: "fMirror Alpha 2.0", link: "/infofields/fmirror-alpha-2" },
            { text: "Зарубежная Альфа", link: "/infofields/foreign-alpha" },
            { text: "fKoreanDrops", link: "/infofields/fkorean-drops" },
            { text: "fMirror Trade", link: "/infofields/fmirror-trade" },
            {
              text: "fMirror Arbitrage",
              link: "/infofields/fmirror-arbitrage",
            },
            { text: "fNews", link: "/infofields/fnews" },
            {
              text: "Как работать с инфополем?",
              link: "/infofields/how-to-work-with-infofield",
            },
          ],
        },
        {
          text: "Рабочие инструменты",
          items: [
            { text: "fRetrodrops", link: "/working-tools/fretrodrops" },
            {
              text: "Что Воркает Фармилка [TO DO]",
              link: "/working-tools/to-do",
            },
            { text: "fNFT/DEGEN MOVE", link: "/working-tools/fnft-degen-move" },
            { text: "fShitcoin", link: "/working-tools/fshitcoin" },
            { text: "fTrade", link: "/working-tools/ftrade" },
            { text: "fArbitrage", link: "/working-tools/farbitrage" },
            { text: "fForex", link: "/working-tools/fforex" },
            { text: "fTONMoves", link: "/working-tools/ftonmoves" },
            { text: "fDeFi", link: "/working-tools/fdefi" },
            { text: "fNodes", link: "/working-tools/fnodes" },
            { text: "fP2E", link: "/working-tools/fp2e" },
            { text: "Обрати Внимание", link: "/working-tools/pay-attention" },
            { text: "fSofts", link: "/working-tools/fsofts" },
            { text: "Академия", link: "/working-tools/academy" },
            {
              text: "Пулы и складчины",
              link: "/working-tools/pools-and-stacks",
            },
            { text: "Выжимки", link: "/working-tools/squeezes" },
          ],
        },
        {
          text: "Инструменты сообщества",
          items: [
            {
              text: "Фармилка [Анонсы и Новости]",
              link: "/community-tools/announcements-and-news",
            },
            { text: "Архив", link: "/community-tools/archive" },
            { text: "fProfit", link: "/community-tools/fprofit" },
            { text: "Чат", link: "/community-tools/chat" },
          ],
        },
        {
          text: "Обзоры Мирроров",
          items: [
            {
              text: "fMirror Alpha 1.0",
              link: "/mirrors-review/fmirror-alpha-1",
            },
            {
              text: "fMirror Alpha 2.0",
              link: "/mirrors-review/fmirror-alpha-2",
            },
            { text: "Зарубежная Альфа", link: "/mirrors-review/foreign-alpha" },
            { text: "fMirror Trade", link: "/mirrors-review/fmirror-trade" },
            {
              text: "fMirror Arbitrage",
              link: "/mirrors-review/fmirror-arbitrage",
            },
          ],
        },
      ],
      "/working-tools/": [
        {
          text: "Введение",
          items: [
            { text: "Базовые принципы", link: "/introduction/basic-principles" },
            { text: "Добро пожаловать", link: "/introduction/welcome" },
            { text: "Начало работы", link: "/introduction/start" },
            {
              text: "Связь инструментов",
              link: "/introduction/communication-between-tools",
            },
            {
              text: "Категории инструментов",
              link: "/introduction/categories-of-tools",
            },
          ],
        },
        {
          text: "Инструменты инфополя",
          items: [
            { text: "Оперативный Бот", link: "/infofields/oper-bot" },
            { text: "fMirror Alpha 1.0", link: "/infofields/fmirror-alpha-1" },
            { text: "fMirror Alpha 2.0", link: "/infofields/fmirror-alpha-2" },
            { text: "Зарубежная Альфа", link: "/infofields/foreign-alpha" },
            { text: "fKoreanDrops", link: "/infofields/fkorean-drops" },
            { text: "fMirror Trade", link: "/infofields/fmirror-trade" },
            {
              text: "fMirror Arbitrage",
              link: "/infofields/fmirror-arbitrage",
            },
            { text: "fNews", link: "/infofields/fnews" },
            {
              text: "Как работать с инфополем?",
              link: "/infofields/how-to-work-with-infofield",
            },
          ],
        },
        {
          text: "Рабочие инструменты",
          items: [
            { text: "fRetrodrops", link: "/working-tools/fretrodrops" },
            {
              text: "Что Воркает Фармилка [TO DO]",
              link: "/working-tools/to-do",
            },
            { text: "fNFT/DEGEN MOVE", link: "/working-tools/fnft-degen-move" },
            { text: "fShitcoin", link: "/working-tools/fshitcoin" },
            { text: "fTrade", link: "/working-tools/ftrade" },
            { text: "fArbitrage", link: "/working-tools/farbitrage" },
            { text: "fForex", link: "/working-tools/fforex" },
            { text: "fTONMoves", link: "/working-tools/ftonmoves" },
            { text: "fDeFi", link: "/working-tools/fdefi" },
            { text: "fNodes", link: "/working-tools/fnodes" },
            { text: "fP2E", link: "/working-tools/fp2e" },
            { text: "Обрати Внимание", link: "/working-tools/pay-attention" },
            { text: "fSofts", link: "/working-tools/fsofts" },
            { text: "Академия", link: "/working-tools/academy" },
            {
              text: "Пулы и складчины",
              link: "/working-tools/pools-and-stacks",
            },
            { text: "Выжимки", link: "/working-tools/squeezes" },
          ],
        },
        {
          text: "Инструменты сообщества",
          items: [
            {
              text: "Фармилка [Анонсы и Новости]",
              link: "/community-tools/announcements-and-news",
            },
            { text: "Архив", link: "/community-tools/archive" },
            { text: "fProfit", link: "/community-tools/fprofit" },
            { text: "Чат", link: "/community-tools/chat" },
          ],
        },
        {
          text: "Обзоры Мирроров",
          items: [
            {
              text: "fMirror Alpha 1.0",
              link: "/mirrors-review/fmirror-alpha-1",
            },
            {
              text: "fMirror Alpha 2.0",
              link: "/mirrors-review/fmirror-alpha-2",
            },
            { text: "Зарубежная Альфа", link: "/mirrors-review/foreign-alpha" },
            { text: "fMirror Trade", link: "/mirrors-review/fmirror-trade" },
            {
              text: "fMirror Arbitrage",
              link: "/mirrors-review/fmirror-arbitrage",
            },
          ],
        },
      ],
      "/community-tools/": [
        {
          text: "Введение",
          items: [
            { text: "Базовые принципы", link: "/introduction/basic-principles" },
            { text: "Добро пожаловать", link: "/introduction/welcome" },
            { text: "Начало работы", link: "/introduction/start" },
            {
              text: "Связь инструментов",
              link: "/introduction/communication-between-tools",
            },
            {
              text: "Категории инструментов",
              link: "/introduction/categories-of-tools",
            },
          ],
        },
        {
          text: "Инструменты инфополя",
          items: [
            { text: "Оперативный Бот", link: "/infofields/oper-bot" },
            { text: "fMirror Alpha 1.0", link: "/infofields/fmirror-alpha-1" },
            { text: "fMirror Alpha 2.0", link: "/infofields/fmirror-alpha-2" },
            { text: "Зарубежная Альфа", link: "/infofields/foreign-alpha" },
            { text: "fKoreanDrops", link: "/infofields/fkorean-drops" },
            { text: "fMirror Trade", link: "/infofields/fmirror-trade" },
            {
              text: "fMirror Arbitrage",
              link: "/infofields/fmirror-arbitrage",
            },
            { text: "fNews", link: "/infofields/fnews" },
            {
              text: "Как работать с инфополем?",
              link: "/infofields/how-to-work-with-infofield",
            },
          ],
        },
        {
          text: "Рабочие инструменты",
          items: [
            { text: "fRetrodrops", link: "/working-tools/fretrodrops" },
            {
              text: "Что Воркает Фармилка [TO DO]",
              link: "/working-tools/to-do",
            },
            { text: "fNFT/DEGEN MOVE", link: "/working-tools/fnft-degen-move" },
            { text: "fShitcoin", link: "/working-tools/fshitcoin" },
            { text: "fTrade", link: "/working-tools/ftrade" },
            { text: "fArbitrage", link: "/working-tools/farbitrage" },
            { text: "fForex", link: "/working-tools/fforex" },
            { text: "fTONMoves", link: "/working-tools/ftonmoves" },
            { text: "fDeFi", link: "/working-tools/fdefi" },
            { text: "fNodes", link: "/working-tools/fnodes" },
            { text: "fP2E", link: "/working-tools/fp2e" },
            { text: "Обрати Внимание", link: "/working-tools/pay-attention" },
            { text: "fSofts", link: "/working-tools/fsofts" },
            { text: "Академия", link: "/working-tools/academy" },
            {
              text: "Пулы и складчины",
              link: "/working-tools/pools-and-stacks",
            },
            { text: "Выжимки", link: "/working-tools/squeezes" },
          ],
        },
        {
          text: "Инструменты сообщества",
          items: [
            {
              text: "Фармилка [Анонсы и Новости]",
              link: "/community-tools/announcements-and-news",
            },
            { text: "Архив", link: "/community-tools/archive" },
            { text: "fProfit", link: "/community-tools/fprofit" },
            { text: "Чат", link: "/community-tools/chat" },
          ],
        },
        {
          text: "Обзоры Мирроров",
          items: [
            {
              text: "fMirror Alpha 1.0",
              link: "/mirrors-review/fmirror-alpha-1",
            },
            {
              text: "fMirror Alpha 2.0",
              link: "/mirrors-review/fmirror-alpha-2",
            },
            { text: "Зарубежная Альфа", link: "/mirrors-review/foreign-alpha" },
            { text: "fMirror Trade", link: "/mirrors-review/fmirror-trade" },
            {
              text: "fMirror Arbitrage",
              link: "/mirrors-review/fmirror-arbitrage",
            },
          ],
        },
      ],
      "/mirrors-review/": [
        {
          text: "Введение",
          items: [
            { text: "Базовые принципы", link: "/introduction/basic-principles" },
            { text: "Добро пожаловать", link: "/introduction/welcome" },
            { text: "Начало работы", link: "/introduction/start" },
            {
              text: "Связь инструментов",
              link: "/introduction/communication-between-tools",
            },
            {
              text: "Категории инструментов",
              link: "/introduction/categories-of-tools",
            },
          ],
        },
        {
          text: "Инструменты инфополя",
          items: [
            { text: "Оперативный Бот", link: "/infofields/oper-bot" },
            { text: "fMirror Alpha 1.0", link: "/infofields/fmirror-alpha-1" },
            { text: "fMirror Alpha 2.0", link: "/infofields/fmirror-alpha-2" },
            { text: "Зарубежная Альфа", link: "/infofields/foreign-alpha" },
            { text: "fKoreanDrops", link: "/infofields/fkorean-drops" },
            { text: "fMirror Trade", link: "/infofields/fmirror-trade" },
            {
              text: "fMirror Arbitrage",
              link: "/infofields/fmirror-arbitrage",
            },
            { text: "fNews", link: "/infofields/fnews" },
            {
              text: "Как работать с инфополем?",
              link: "/infofields/how-to-work-with-infofield",
            },
          ],
        },
        {
          text: "Рабочие инструменты",
          items: [
            { text: "fRetrodrops", link: "/working-tools/fretrodrops" },
            {
              text: "Что Воркает Фармилка [TO DO]",
              link: "/working-tools/to-do",
            },
            { text: "fNFT/DEGEN MOVE", link: "/working-tools/fnft-degen-move" },
            { text: "fShitcoin", link: "/working-tools/fshitcoin" },
            { text: "fTrade", link: "/working-tools/ftrade" },
            { text: "fArbitrage", link: "/working-tools/farbitrage" },
            { text: "fForex", link: "/working-tools/fforex" },
            { text: "fTONMoves", link: "/working-tools/ftonmoves" },
            { text: "fDeFi", link: "/working-tools/fdefi" },
            { text: "fNodes", link: "/working-tools/fnodes" },
            { text: "fP2E", link: "/working-tools/fp2e" },
            { text: "Обрати Внимание", link: "/working-tools/pay-attention" },
            { text: "fSofts", link: "/working-tools/fsofts" },
            { text: "Академия", link: "/working-tools/academy" },
            {
              text: "Пулы и складчины",
              link: "/working-tools/pools-and-stacks",
            },
            { text: "Выжимки", link: "/working-tools/squeezes" },
          ],
        },
        {
          text: "Инструменты сообщества",
          items: [
            {
              text: "Фармилка [Анонсы и Новости]",
              link: "/community-tools/announcements-and-news",
            },
            { text: "Архив", link: "/community-tools/archive" },
            { text: "fProfit", link: "/community-tools/fprofit" },
            { text: "Чат", link: "/community-tools/chat" },
          ],
        },
        {
          text: "Обзоры Мирроров",
          items: [
            {
              text: "fMirror Alpha 1.0",
              link: "/mirrors-review/fmirror-alpha-1",
            },
            {
              text: "fMirror Alpha 2.0",
              link: "/mirrors-review/fmirror-alpha-2",
            },
            { text: "Зарубежная Альфа", link: "/mirrors-review/foreign-alpha" },
            { text: "fMirror Trade", link: "/mirrors-review/fmirror-trade" },
            {
              text: "fMirror Arbitrage",
              link: "/mirrors-review/fmirror-arbitrage",
            },
          ],
        },
      ],
      // Отдельный sidebar для Контент-Хаб
      "/content-hub/": [
        {
          text: "♻️ Контент-Хаб",
          items: [
            { text: "Введение", link: "/content-hub/" },
            {
              text: "Хэштеги и правила постинга",
              link: "/content-hub/hashtags",
            },
            { text: "Начисление опыта", link: "/content-hub/experience" },
            { text: "Система штрафов", link: "/content-hub/penalties" },
            { text: "Система ролей", link: "/content-hub/roles" },
            { text: "Команды бота", link: "/content-hub/commands" },
            { text: "Пример публикации", link: "/content-hub/example" },
          ],
        },
      ],
      // Отдельный sidebar для Ролей и аирдропов
      "/roles-airdrops/": [
        {
          text: "Введение",
          items: [
            { text: "Начало", link: "/roles-airdrops/introduction" },
            { text: "Заповеди Фармилки", link: "/roles-airdrops/commandments" },
          ],
        }, 
        {
          text: "Гайд по ролям",
          items: [
            {
              text: "Структура ролей",
              link: "/roles-airdrops/structure-of-roles",
            },
            { text: "Роль Minion", link: "/roles-airdrops/minion" },
            { text: "Роль Scout", link: "/roles-airdrops/scout" },
            { text: "Роль Researcher", link: "/roles-airdrops/researcher" },
            { text: "Роль Solo Caller", link: "/roles-airdrops/solo-caller" },
            { text: "Роль Team", link: "/roles-airdrops/team" },
          ]
        },
        {
          text: "Гайд по аирдропам",
          items: [
            {
              text: "Структура аирдропов и поощрений",
              link: "/roles-airdrops/structure-of-rewards",
            },
            {
              text: "Награды за полезную активность",
              link: "/roles-airdrops/valuable-activity-rewards",
            },
            {
              text: "Награды за активность в ключевых инструментах",
              link: "/roles-airdrops/key-activity-rewards",
            },
            {
              text: "Награды за признательность со стороны комьюнити",
              link: "/roles-airdrops/community-appreciation-rewards",
            },
            {
              text: "Ежемесячное командное распредление пула",
              link: "/roles-airdrops/monthly-team-rewards",
            },
          ]
        }
      ],
    },

    socialLinks: [
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>',
        },
        link: "https://t.me/FarmersDaoBot",
      },
      { icon: "youtube", link: "https://www.youtube.com/@byrealfarmer" },
      { icon: "discord", link: "https://discord.gg/4R7CHNS2VV" },
      { icon: "twitter", link: "https://x.com/farm_dao" },
    ],

    footer: {
      message: "Build Together! Farm Together! Work Together!",
      copyright: "© 2025 Фармилка",
    },

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Поиск",
            buttonAriaLabel: "Поиск",
          },
          modal: {
            noResultsText: "Нет результатов для",
            resetButtonTitle: "Сбросить поиск",
            footer: {
              selectText: "выбрать",
              navigateText: "навигация",
            },
          },
        },
      },
    },

    outline: {
      label: "Содержание",
    },

    docFooter: {
      prev: "Предыдущая страница",
      next: "Следующая страница",
    },

    lastUpdated: {
      text: "Обновлено",
    },
  },
});
