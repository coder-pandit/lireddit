export const __prod__ = process.env.NODE_ENV == 'production';
export const __port__ = process.env.PORT || 5000;
export const __dbUser__ = process.env.DB_USER;
export const __dbPassword__ = process.env.DB_PASSWORD;
export const __sessionSecret__ = process.env.SESSION_SECRET;
