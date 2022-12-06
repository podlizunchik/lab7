xmlDoc = loadXmlDoc("gradeReport.xml");
	  
      gradesNames = ["Very bad","Very bad", "Bad", "Satisfactory","Satisfactory", "Good", "Good", "Excellent", "Wonderful", "Very Good!"];
      headers = ["id", "Student", "Grade"];
      data = [xmlDoc.getElementsByTagName("gradeRecord"),
              xmlDoc.getElementsByTagName("student"),
              xmlDoc.getElementsByTagName("grade")];
      
      body = document.getElementsByTagName("body")[0];

      table = document.createElement("table");
      tableBody = document.createElement("tbody");
      headersRow = document.createElement("tr");
	  
      for (let i = 0; i < headers.length; i++) {
        let cell = document.createElement("th");
        let cellText = document.createTextNode(headers[i]);
        cell.appendChild(cellText);
        headersRow.appendChild(cell);
      }
      tableBody.appendChild(headersRow);
      
      for (let i = 0; i < data[0].length; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < data.length; j++) {
          cell = document.createElement("td");
          let cellText = null;
          if (j === 0) {
            cellText = document.createTextNode(data[j][i].getAttribute("id"));
          } else if (j === 1) {
            cellText = document.createTextNode(data[j][i].firstChild.nodeValue);
          } else if (j === 2) {


            cellText = document.createTextNode(data[j][i].firstChild.nodeValue);
            cellText = document.createTextNode(gradesNames[data[j][i].firstChild.nodeValue - 1]);
         
        
        }
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
        tableBody.appendChild(row);
      }

      table.appendChild(tableBody);
      body.appendChild(table);