module.exports = {
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'sa',
  password: '123',
  database: 'boilerplate_development',
  // env: dev
  entities: ['**/**/entities/*.entity{.ts,.js}'],
  // env: prod
  // entities: ['dist/src/**/entities/*.entity{.ts,.js}'],
  synchronize: true,
  logging: false,
};
