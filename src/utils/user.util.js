export const userRole = async (req, res, next) => {
    try {
        req.body.role = 'user'
        next();
    } catch (error) {
      next(error);
    }
  };

  export const adminRole = async (req, res, next) => {
    try {
        req.body.role = 'admin'
        next();
    } catch (error) {
      next(error);
    }
  };