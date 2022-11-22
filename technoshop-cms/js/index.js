import { modalBtn, modal } from "./elems.js";
import { formController } from "./formController.js";
import { modalController } from "./modalController.js";
import { previewcontroller } from "./previewController.js";
import { tableController } from "./tableController.js";

const init = () => {
  modalController({
    modal,
    btn: modalBtn,
    classOpen: 'd-block',
    classClose: 'btn-close',
  });
  
  previewcontroller();
  tableController();
  formController();
}


init();