const marvel = {
 render:()=> {
  //1c484ece45d89cd1bd29f37c3aa2141131cbf55137d025ddde8a0a38eb28dd1f519543c24
   
    const urlAPI ='https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=7d025ddde8a0a38eb28dd1f519543c24&hash=febf5db732892fd7de0f5dd5ff61cc46';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlAPI)
        .then(res => res.json())
        .then((json)=> {
              //  console.log(json, 'RES.JSON');
              for(const hero of json.data.results)
              {
                let urlHero = hero.urls[0].url;
                contentHTML += `<div class="col-md-4">
                <a href="${urlHero}" target="_blank">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" 
                    class="img-thumbnail">

                </a>
        <h3 class="title">${hero.name}</h3>

            </div>`;

              } 
      container.innerHTML= contentHTML;
            })
    }
  };
 marvel.render();