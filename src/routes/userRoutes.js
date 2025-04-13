import { updateUserInfo } from "../controller/userController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/user/update", auth, updateUserInfo);

export default router;
