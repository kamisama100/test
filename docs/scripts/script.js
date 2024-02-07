let publicationTime = "12:00 AM"
let publicationTimezone = "EST"

const toggleHidden = (el) => {
  el.classList.toggle("hidden")
}

const openDropDown = (dropdown) => {
  dropdown.classList.replace("max-h-0", "max-h-dropdown")
  dropdown.classList.replace("opacity-0", "opacity-100")
  dropdown.classList.replace("pointer-events-none", "pointer-events-auto")
}

const toggleOnInput = (input, el) => {
  if (input.value.trim() === "") {
    el.style.display = "inline"
  } else {
    el.style.display = "none"
  }
}

const selectInput = (value, input, dropdown) => {
  let formattedValue = value.trim()
  const datePicker = document.querySelector("#datepicker")

  if (formattedValue.includes("AM") || formattedValue.includes("PM")) {
    publicationTime = formattedValue
    input.value = publicationTime
    if (datePicker.value !== "") {
      let dateValueArr = datePicker.value.split(" ")
      let timeArr = [dateValueArr[1], dateValueArr[2]].join(" ")
      timeArr = publicationTime

      dateValueArr[1] = timeArr
      dateValueArr.splice(2, 1)

      datePicker.value = dateValueArr.join(" ")
    }
  } else {
    publicationTimezone = formattedValue
    input.value = publicationTimezone
    if (datePicker.value !== "") {
      let dateValueArr = datePicker.value.split(" ")
      dateValueArr[3] = publicationTimezone
      let newValue = dateValueArr.join(" ")
      datePicker.value = newValue
    }
  }

  dropdown.classList.replace("max-h-dropdown", "max-h-0")
  dropdown.classList.replace("opacity-100", "opacity-0")
  dropdown.classList.replace("pointer-events-auto", "pointer-events-none")
}

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
    offset: 3,
    firstDay: 6,
    multipleDates: false,
    autoClose: true,
    toggleSelected: false,
    visible: true,
    onShow: moveAdditionalInput,
    onHide: moveAdditionalInputBack,
    onSelect: function () {
      datepicker.value = `${datepicker.value} ${publicationTime} ${publicationTimezone}`
      toggleOnInput(datepicker, document.querySelector("#placeholder-star"))
    },
  })
})

const dropdowns = document.querySelectorAll("#dropdown")

document.addEventListener("click", (event) => {
  dropdowns.forEach((e) => {
    const inputEl = e.parentElement.parentElement.querySelector("input")

    if (!e.contains(event.target) && !inputEl.contains(event.target)) {
      e.classList.replace("max-h-dropdown", "max-h-0")
      e.classList.replace("opacity-100", "opacity-0")
      e.classList.replace("pointer-events-auto", "pointer-events-none")
    }
  })
})

const generateTimeList = () => {
  let timeList = []
  for (let hours = 0; hours < 24; hours++) {
    for (let minutes = 0; minutes < 60; minutes += 30) {
      let hour = hours % 12 === 0 ? 12 : hours % 12
      let amPm = hours < 12 ? "AM" : "PM"
      let hourString = hour.toString().padStart(2, "0")
      let minuteString = minutes.toString().padStart(2, "0")
      timeList.push(`${hourString}:${minuteString} ${amPm}`)
    }
  }
  return timeList
}

const createDropdownButtons = () => {
  const dropdown = document.getElementById("dropdown")
  const timeList = generateTimeList()

  timeList.forEach((time) => {
    const button = document.createElement("button")
    button.className = "hover:bg-[#bb1919] hover:text-white p-1.5"
    button.textContent = time
    button.onclick = function () {
      selectInput(
        this.textContent,
        this.parentElement.parentElement.querySelector("input"),
        this.parentElement
      )
    }
    dropdown.appendChild(button)
  })
}

createDropdownButtons()
