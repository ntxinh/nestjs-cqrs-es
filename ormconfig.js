module.exports = {
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'sa',
  password: '123',
  database: 'boilerplate_development',
  entities: ['**/**/entities/*.entity{.ts,.js}'],
  synchronize: true,
  logging: false,
};
