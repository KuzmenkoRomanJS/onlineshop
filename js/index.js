import { modalBtn } from "./elems.js";
import { formController } from "./formController.js";
import { modalController } from "./modalController.js";
import { previewcontroller } from "./previewController.js";
import { sortController } from "./sortController.js";
import { tableController } from "./tableController.js";

const init = () => {
  modalController({
    btn: modalBtn,
  });
  
  previewcontroller();
  tableController();
  formController();
  sortController();
}


init();