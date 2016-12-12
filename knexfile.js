// Update with your config settings.

module.exports = {

  development: {
    client: 'postgres',
    connection: {
      database: 'webhooks',
    },
     useNullAsDefault: true
  },

  staging: {
    client: 'postgres',
    connection: {
      database: 'webhooks',
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
    client: 'postgres',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password',
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
