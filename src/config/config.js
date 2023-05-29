import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '.env.production' });
} else {
  dotenv.config({ path: '.env.development' });
}

const ENV = process.env.NODE_ENV || 'development';

const CONFIG = {
  development: {
    app: {
      PORT: process.env.PORT || 4000
    },
    db: {
      URI: process.env.MONGODB_URI
    },
    cloudinary: {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET
    }
  },
  production: {
    app: {
      PORT: process.env.PORT || 4001
    },
    db: {
      URI: process.env.MONGODB_URI
    },
    cloudinary: {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET
    }
  }
};

export default CONFIG[ENV];