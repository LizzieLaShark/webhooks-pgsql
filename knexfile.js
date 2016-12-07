// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'webhooks',
      ssl: true
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'webhooks',
      ssl: true,
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: process.env.DATABASE_URL || {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password',
      ssl: true
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
