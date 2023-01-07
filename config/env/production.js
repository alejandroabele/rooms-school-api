module.exports = {
  datastores: {
    default: {
      adapter: 'sails-mysql',
      url: 'mysql://umufmymuft51pmjx:4aBYFl4lknxkL45nmZWv@bxwxkmqqzaxa8a644yuc-mysql.services.clever-cloud.com:3306/bxwxkmqqzaxa8a644yuc',
    },
  },

  models: {
    migrate: 'safe',
  },
  blueprints: {
    shortcuts: false,
  },

  security: {
    cors: {
      allRoutes: true,
      allowOrigins: '*',
      allowCredentials: false,
      allowRequestHeaders: 'content-type, authorization',
    },
  },

  session: {
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  },

  sockets: {
    onlyAllowOrigins: ['https://example.com', 'https://staging.example.com'],
  },
  log: {
    level: 'debug',
  },

  http: {
    cache: 365.25 * 24 * 60 * 60 * 1000, // One year
  },
  custom: {
    JWT_SECRET: '7b0ab45a730e48a69239010b5b8fe5fa4e8eaac6',
  },
};
