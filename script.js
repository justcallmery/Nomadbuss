const toggle = document.getElementById("menu-toggle");
const drawer = document.getElementById("drawer");
const closeBtn = document.getElementById("close");
const overlay = document.getElementById("overlay");

toggle.addEventListener("click", () => {
  drawer.classList.add("active");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu() {
  drawer.classList.remove("active");
  overlay.classList.remove("active");
}

// Close drawer when clicking on specific links//
document.getElementById("contactLink").addEventListener("click", function() {
  document.getElementById("drawer").classList.remove("active");
  document.getElementById("overlay").style.display = "none";
});

document.getElementById("homepage").addEventListener("click", function() {
  document.getElementById("drawer").classList.remove("active");
  document.getElementById("overlay").style.display = "none";
});


// 1. Your Product Data
const products  = [
   { name: "Baggy Jeans Black", price: "$10", category: "pants", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRsxTwROG6tOok8oH9AOw6O4YMSkaCMLWcg&s" },
    { name: "Vintage Baggy", price: "$10", category: "pants", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbxrz09qFMBICv6pEswe1nYrODTIwXX_TYQ&s" },
     { name: "Vintage Baggy jeans", price: "$10", category: "pants", img: "https://images.asos-media.com/products/asos-design-super-baggy-jeans-in-washed-blue/207041148-1-washedblue?$n_640w$&wid=513&fit=constrain" },
      { name: "New Look Vintage Baggy pants", price: "$10", category: "pants", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLoD14NEgSlGkpHf6MqUhJsqouPg1gnoqrgA&s" },
       { name: "Y2K Vintage Baggy pants", price: "$10", category: "pants", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeXiMIuwQ1SGyn4K9NoF2yGLrJ3Iyh9b7zAA&s" },

   { name: "Gray Vintage shirt", price: "$10", category: "Shirt", img: "https://down-ph.img.susercontent.com/file/32fc34a8190d07bef0fbb9824df16456" },
    { name: "Vintage Baggy", price: "$10", category: "Shirt", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReonx78_W0lqM4b9j43XKWN59xiV8Cq1k4ug&s" },
     { name: "Vintage Baggy jeans", price: "$10", category: "Shirt", img: "https://p16-oec-general-useast8.ttcdn-us.com/tos-useast8-i-rt0ujvrtvp-tx2/f776451788674f51a3c21fc4f7fe15f8~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=e1be8f53&idc=useast5&from=2378011839" },
      { name: "New Look Vintage Baggy pants", price: "$10", category: "Shirt", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_k4lO370KRW_QKQXTxtwNlECCSvxhnIXziw&s" },
       { name: "Y2K Vintage Baggy pants", price: "$10", category: "Shirt", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Y3_J4SGxEGIW2dZcnbFPz4av9zfusF6SCQ&s" },
           
  { name: "Sky Blue Hoodie", price: "$10", category: "hoodies", img: "https://originalfavorites.com/cdn/shop/products/CloudyBlueHoodieFront2.jpg?v=1650990146&width=3000.jpg" },
  { name: "Red Hoodie", price: "$15", category: "hoodies", img: "https://hourscollection.com/cdn/shop/files/DropShoulderHoodie-Red-ProductPhoto_1000x.png?v=1762199916.jpg" },
  { name: "Brown Hoddie", price: "$20", category: "hoodies", img: "https://onepercentclothing.ca/cdn/shop/files/h5.jpg?v=1706801727&width=3333" },
  { name: "Dark Blue Hoddie", price: "$20", category: "hoodies", img: "https://sfycdn.speedsize.com/d31641c5-60cb-4a0b-8662-59094f81bb6e/row.representclo.com/cdn/shop/files/UkQUEU2uIdCa2SXYAMhKT1QaeF08UcQzrXooSWIwdGA.jpg?v=1769418166&width=2000" },
  { name: "Gray hoddie", price: "$25", category: "hoodies", img: "https://createfashionbrand.com/wp-content/uploads/2024/02/grey-corretc-size--1000x1250.webp" }
 
];






const grid = document.getElementById('product-grid');
const filters = document.querySelectorAll('.filter-item');

// 2. The Filtering Function
function filterProducts(category) {
  // Clear the current grid
  grid.innerHTML = "";

  // Filter the array based on category
  const filteredList = category === "all" 
    ? products 
    : products.filter(p => p.category === category);

  // Generate HTML for each filtered product
  filteredList.forEach(product => {
    const item = document.createElement('div');
    item.className = 'product-item';
    item.innerHTML = `
      <div class="card">
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      </div>
    `;
    grid.appendChild(item);
  });
}

// 3. Event Listeners for Clicks
filters.forEach(button => {
  button.addEventListener('click', () => {
    // Switch the 'active' class for the underline
    filters.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Run the filter function
    const selectedCategory = button.getAttribute('data-category');
    filterProducts(selectedCategory);
  });
});

// Initial Load: Show everything
filterProducts('all');

