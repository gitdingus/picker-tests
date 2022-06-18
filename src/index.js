import createTimePicker from 'time-picker';

const timePickerDiv = document.querySelector("#time-picker");
const newPicker = createTimePicker.timePickerElement;

timePickerDiv.appendChild(newPicker);