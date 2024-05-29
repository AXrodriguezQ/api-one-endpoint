
export default () => ({
    port: process.env.PORT || 4000,
    database: {
        host : process.env.DATABASE_HOST || 'localhost',
        port : parseInt(process.env.DATABASE_PORT) || 5432,
        username : process.env.DATABASE_USERNAME || 'admin',
        password : process.env.DATABASE_PASSWORD || 'admin123',
        db : 'postgres'
    }
})
