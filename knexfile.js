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
      // password: 'password',
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
    connection: 'dbname=d7vjen7acmospg host=ec2-54-243-207-190.compute-1.amazonaws.com port=5432 user=dgxssvqjvwkrto password=xDEl398dlARfdVAkOegZcwI1mD sslmode=require',
    //  {
    //   database: 'webhooks'
    //   // user:     'username',
    //   // password: 'password',
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
