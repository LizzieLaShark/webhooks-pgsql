// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'webhooks',
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'webhooks'
      // user:     'username',
      // password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: 'postgres://dgxssvqjvwkrto:xDEl398dlARfdVAkOegZcwI1mD@ec2-54-243-207-190.compute-1.amazonaws.com:5432/d7vjen7acmospg',
    // {
    //   database: 'my_db',
    //   user:     'username',
    //   password: 'password',
    // },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};

console.log(module.exports.production.connection)
