
function GetAdsData(){
    return [
      {
          "id": 1,
          "title": "car for sale",
          "text": "so cool",
          "category": "lowrider",
          "pictures": [
              {
                  "id": 1,
                  "adInfoId": 1,
                  "title": "testtitle",
                  "url": "testurl"
              }
          ]
      },
      {
        "id": 2,
          "title": "Nice cat",
          "text": "Very sweet!",
          "category": "animal",
          "pictures": [
              {
                  "id": 2,
                  "adInfoId": 2,
                  "title": "testtitle",
                  "url": "testurl"
              }
          ]
      },
      {
        "id": 3,
          "title": "Old computer",
          "text": "Big and beautiful.",
          "category": "Electronics",
          "pictures": [
            {
                "id": 3,
                "adInfoId": 3,
                "title": "testtitle",
                "url": "testurl"
            }
          ]
      },
      {
        "id": 4,
          "title": "Bed",
          "text": "New fresh n cosy bed",
          "category": "Furniture",
          "pictures": [
            {
                "id": 4,
                "adInfoId": 4,
                "title": "testtitle",
                "url": "test"
            }
          ]
      },
      
  ]
  }

    /*
  function AdsList (){
    const ads = GetAdsData();
  
    const listItems = ads.map((ad) =>
      <ListItem key={ad.id} value={ad} />
    );
  
    return(
      <ul>{listItems}</ul>
    );
  
  }
*/

export default GetAdsData;