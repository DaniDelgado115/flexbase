window.onload(){
  let datubase=[
    {
      "isbn": "1617293563",
      "egilea": "Raoul-Gabriel Urma",
      "data": "Nov 15, 2018",
      "izenburua": "Modern Java in Action: Lambdas, streams, functional and reactive programming",
      "filename": "https://covers.openlibrary.org/lb/id/8508261-L.jpg"
    },
  
   {
      "isbn": "9781617291302",
      "egilea": "Benjamin Muschko",
      "data": "Mar 09, 2014",
      "izenburua": "Gradle in Action",
      "filename": "https://covers.openlibrary.org/lb/id/8514400-L.jpg"
    },
  
       {
      "isbn": "1883601126",
      "egilea": "Matt Welsh",
      "data": "1995",
      "izenburua": "The Linux bible",
      "filename": "https://covers.openlibrary.org/lb/id/6764181-L.jpg"
    },
    
  {
      "isbn": "9781617293290",
      "egilea": "Dmitry Jemerov",
      "data": "Feb 19, 2017",
      "izenburua": "Kotlin in Action",
      "filename": "https://covers.openlibrary.org/lb/id/8507716-L.jpg"
    }
  ]
document.querySelector('body > div > div.flex.left > img').src=datubase[1].filename
}

