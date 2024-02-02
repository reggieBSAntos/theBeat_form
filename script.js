import ProgressForm from "./progressform.js";

import Confirm from "./confirm.js";

let progress, confirm;

document.addEventListener("DOMContentLoaded", (e) => {
  /*  confirm = new Confirm();
  progress = new ProgressForm({
    submitCallback: () => {
      confirm.open({
        onOk: () => {
          progress.confirmed();
        },
      });
    },
    confirmCallback: () => {
      submitData();
    },
  }); */
});

const submitData = async (callback) => {
  try {
  } catch (err) {
  } finally {
    setTimeout(() => {
      progress.toggleControls(false);
    }, 1500);
  }
};
