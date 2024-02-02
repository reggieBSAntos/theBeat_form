export default class ProgressForm {
  constructor(options) {
    this.options = Object.assign(
      {},
      {
        container: document.body,
        title: "",
        subtitle: "",
        submitCallback: () => {},
        closeCallback: () => {},
        confirmCallback: () => {},
        steps: [],
      },
      options
    );

    this.boolean = true;
    this.element = document.createElement("div");
    this.element.className = "popup-form";
    this.element.innerHTML = `    <div class="popup-form-container">
    <div class="popup-form__left">
      <img src="logoColored.svg" alt="" class="popup-form__logo" />
      <h2 class="popup-form__title">record progress</h2>
      <h3 class="popup-form__subtitle">Week 1 of 8 | 12 Feb 2024</h3>
      <p class="popup-form__text">Active minutes is the total time you spent walking and/or duoing a workout</p>
    </div>
    <div class="popup-form__right">
      <form class="popup-form__form">
        <div class="popup-form__inputs">
          <label for="stepsInp" class="popup-form__label">Step:</label>
          <input id="stepsInp" type="number" name="steps" class="popup-form__input" />
          <span class="popup-form__error"><strong style="color: red;">&#33;</strong> Input your steps</span>
        </div>
        <div class="popup-form__inputs">
          <label for="inpPassword" class="popup-form__label">Name</label>
          <input id="inpPassword" type="number" class="popup-form__input" />
          <span class="popup-form__error"><strong style="color: red;">&#33;</strong> Input active minutes</span>
        </div>

        <div class="popup-form__buttons">
          <button type="submit" class="popup-form__button button-cancel">
            <span class="button-cancel__text">Close</span>
          </button>
          <button type="submit" class="popup-form__button button-confirm">
            <span class="button-confirm__text">Submit</span>
          </button>
        </div>
      </form>
    </div>
  </div>`;

    this.options.container.insertAdjacentElement("beforeend", this.element);

    this.inputs = Array.from(this.element.querySelectorAll("input"));

    [this.close, this.submit] = this.element.querySelectorAll("button");

    this.close.addEventListener("click", (e) => {
      e.preventDefault();
      this._removeForm();
    });

    this.inputs.forEach((input) => {
      input.addEventListener("focus", (e) => {
        e.target.nextElementSibling.classList.remove(
          "popup-form__error--visible"
        );
      });
    });

    this.submit.addEventListener("click", (e) => {
      e.preventDefault();

      const validInputs = this.inputs.filter((input) => {
        if (input.value == "") {
          input.nextElementSibling.classList.add("popup-form__error--visible");
        } else {
          return input;
        }
      });

      if (this.inputs.length !== validInputs.length) return;

      if (this.boolean) {
        this.options.submitCallback();
      } else {
        this.options.confirmCallback();
      }
    });
  }

  toggleControls(boolean) {
    this.submit.classList.toggle("button--loading");
    Array.from(this.element.querySelectorAll("input, button")).forEach(
      (el) => (el.disabled = boolean)
    );
  }

  _removeForm() {
    this.element.remove();
  }

  confirmed() {
    this.toggleControls(true);
    this.options.confirmCallback();
  }
}
