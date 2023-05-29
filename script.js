function createTable() {
    //Write your code here
	var r=prompt("Input number of rows")
	var c=prompt("Input number of columns")
	let row=parseInt(r);
	let col=parseInt(c);
    let table = document.getElementById("myTable");

	for(let i=0; i<row; i++)
		{
			let row=table.insertRow();
			for(let j=0; j<col; j++)
				{
					let cl=row.insertCell();
					cl.innerText=`Row-${i} Column-${j}`
				}
		}
	
}