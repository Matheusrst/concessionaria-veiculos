const categories = [
    { name: "Seminovos", img: "/images/seminovos.png" },
    { name: "Usados", img: "/images/usados.png" },
    { name: "Hatchback", img: "/images/hatchback.png" },
    { name: "Sedã", img: "/images/seda.png" },
    { name: "SUV", img: "/images/suv.png" },
  ];
  
  const CategoryCarousel = () => {
    return (
      <div className="category-carousel">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <img src={category.img} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default CategoryCarousel;
  