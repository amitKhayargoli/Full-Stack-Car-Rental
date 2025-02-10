import express from "express";
import { getAllProducts, addProduct, updateProduct, deleteProduct } from "../controller/productController.js";
import { addCar } from "../controller/carController.js";
import { userController } from "../controller/userController.js";
import { userProfileController } from "../controller/userProfileController.js";


const router =express.Router();


router.get("/", userController.getAllEmp);
router.post("/add", userController.addEmp);
router.put("/:empId", userController.update);
router.get("/:empId", userController.getById);
router.delete("/:empId", userController.deleteById);


router.get("/getAllProduct",getAllProducts);
router.post("/addProduct",addProduct);
router.post("/addCar",addCar);
router.put("/product/:productId",updateProduct);
router.delete("/product/:productId",deleteProduct);

router.get("/profiles", userProfileController.getAllProfiles);
router.post("/profiles", userProfileController.addProfile);
router.get("/profiles/:userId", userProfileController.getProfileById);
router.put("/profiles/:userId", userProfileController.updateProfile);
router.delete("/profiles/:userId", userProfileController.deleteProfileById);

export default  router  ;
