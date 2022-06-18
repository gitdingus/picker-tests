import {createTimePicker} from 'time-picker';

const timePickerDiv = document.querySelector("#time-picker");

console.log(createTimePicker);

const fucker = createTimePicker();

timePickerDiv.appendChild(fucker);
// timePickerDiv.appendChild( createBullshitDiv() );
// const newPicker = createTimePicker().timePickerElement;

// timePickerDiv.appendChild(newPicker);