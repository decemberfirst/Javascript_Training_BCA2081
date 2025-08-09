let container = document.getElementsByClassName('container')[0];

fetch('https://fakestoreapi.com/products')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let NewHtmlWithData = data.map((elem) => {
      return ` <div class="product">
        <div class="product_image">
          <img
            src=${elem.image}
            alt=""
          />
        </div>
        <div class="product_detail">
          <h1>${elem.title.substring(0, 20)}</h1>
          <p class="description">
           ${elem.description.substring(0, 100)}
          </p>
          <h3 class="price">$${elem.price}</h3>
        </div>
      </div>`;
    });
    container.innerHTML = NewHtmlWithData.join('');
  });
