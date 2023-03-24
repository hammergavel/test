import cors from 'cors';

const corsMiddleware = async (req, res, next) => {
  await cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  })(req, res, next);
};

export default corsMiddleware;
