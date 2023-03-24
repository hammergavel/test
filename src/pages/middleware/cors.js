import cors from 'cors';

const corsMiddleware = cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
});

export default corsMiddleware;
