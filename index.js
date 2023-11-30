console.log('Inicio js');

async function getData(uri) {
  console.log('Inicio getData');
  const resp = await fetch(uri);
  console.log('obtuve Resp');
  const data = await resp.json();
  console.log('data', data);
  return data;
}

window.onload = async function () {
  const DATA_URL = 'http://localhost:4000/products';

  const products = await getData(DATA_URL);
  console.log('products', products);

  const table = document.getElementById('tabla');
  const tbody = document.createElement('tbody');

  products.forEach((product) => {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdImage = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdDelete = document.createElement('td');
    tdName.innerText = product.name;
    tdImage.innerText = product.image;
    tdPrice.innerText = product.price;
    tdDelete.innerText = 'Eliminar';
    tr.appendChild(tdName);
    tr.appendChild(tdImage);
    tr.appendChild(tdPrice);
    tr.appendChild(tdDelete);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
};
