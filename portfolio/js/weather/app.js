function populateTableRows() {
    let strTableRows = `<tr>
        <td><span>Summary</span></td>
        <td>Row 1, Cell 2</td>
    </tr>
    <tr>
        <td><span>Temperature</span></td>
        <td>Row 2, Cell 2</td>
    </tr>
    <tr>
        <td><span>Humidity</span></td>
        <td>Row 3, Cell 2</td>
   </tr>
   <tr>
        <td><span>Pressure</span></td>
        <td>Row 4, Cell 2</td>
    </tr>`;

    document.querySelector("#table-weather-dublin tbody").innerHTML = strTableRows;
}