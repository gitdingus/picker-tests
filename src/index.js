import {createTimePicker} from 'time-picker';
import {DatePicker} from 'date-picker';
const timePickerDiv = document.querySelector("#time-picker");
const body = document.querySelector("body");

const fucker = createTimePicker();
const booger = DatePicker();

timePickerDiv.appendChild(fucker);

body.appendChild(booger.datePickerElement);
// timePickerDiv.appendChild( createBullshitDiv() );
// const newPicker = createTimePicker().timePickerElement;

// timePickerDiv.appendChild(newPicker);