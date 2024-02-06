document.addEventListener("DOMContentLoaded", function () {
  const moveAdditionalInput = () => {
    const datepickerContainer = document.querySelector(".air-datepicker")
    const additionalInput = document.querySelector("#publication-options")
    additionalInput.classList.remove("hidden")
    datepickerContainer.appendChild(additionalInput)
  }

  const moveAdditionalInputBack = () => {
    const additionalInput = document.querySelector("#publication-options")
    additionalInput.classList.add("hidden")
    document.body.appendChild(additionalInput)
  }

  new AirDatepicker("#datepicker", {
    locale: localeEn,
    dateFormat: "yyyy-mm-dd",
    offset: 2,
    firstDay: 6,
    visible: true,
    onShow: moveAdditionalInput,
    onHide: moveAdditionalInputBack,
  })
})

const toggleHidden = (el) => {
  el.classList.toggle("hidden")
}

const toggleOnInput = (input, el) => {
  if (input.value.trim() === "") {
    el.style.display = "inline"
  } else {
    el.style.display = "none"
  }
}
