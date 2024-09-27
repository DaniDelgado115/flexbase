window.onload=()=>{
  let datubase=[
    {
      "isbn": "1617293563",
      "egilea": "Raoul-Gabriel Urma",
      "data": "Nov 15, 2018",
      "izenburua": "Modern Java in Action: Lambdas, streams, functional and reactive programming",
      "filename": "https://covers.openlibrary.org/lb/id/8508261-M.jpg"
    },
  
   {
      "isbn": "9781617291302",
      "egilea": "Benjamin Muschko",
      "data": "Mar 09, 2014",
      "izenburua": "Gradle in Action",
      "filename": "https://covers.openlibrary.org/lb/id/8514400-M.jpg"
    },
  
       {
      "isbn": "1883601126",
      "egilea": "Matt Welsh",
      "data": "1995",
      "izenburua": "The Linux bible",
      "filename": "https://covers.openlibrary.org/lb/id/6764181-M.jpg"
    },
    
  {
      "isbn": "9781617293290",
      "egilea": "Dmitry Jemerov",
      "data": "Feb 19, 2017",
      "izenburua": "Kotlin in Action",
      "filename": "https://covers.openlibrary.org/lb/id/8507716-M.jpg"
    }
  ]
  let ezkb=document.getElementById("ezk")
  let eskb=document.getElementById("esk")

  let indizea=0;

  eguneraketa = (i) =>{ 
    document.getElementById('irudia').src=datubase[i].filename
    document.getElementById('izenb').value=datubase[i].izenburua
    document.getElementById('eg').value=datubase[i].egilea
    document.getElementById('isbn').value=datubase[i].isbn
    document.getElementById('data').value=datubase[i].data    
  }
  ezkb.onclick=() =>{
    indizea--;
    if (indizea<0) indizea=datubase.length-1
    eguneraketa(indizea)
  }
  eskb.onclick=() =>{
    indizea++;
    if (indizea>datubase.length-1) indizea=0;
    eguneraketa(indizea)
  }

  //document.getElementById('irudia').src=datubase[1].filename
}

