import { v2 as cloudinary} from "cloudinary";
import config from "../config/config.js";

cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret
});

export const uploadGifs = async (
  filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    resource_type: "auto",
    overwrite: true,
  });
};