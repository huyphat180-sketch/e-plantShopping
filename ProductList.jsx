const plants = [
{
id: 1,
name: "Snake Plant",
price: 15,
category: "Air Purifying",
image: "image-url"
},
{
id: 2,
name: "Peace Lily",
price: 20,
category: "Air Purifying",
image: "image-url"
}
];
<button
onClick={() => dispatch(addItem(plant))}
disabled={addedItems.includes(plant.id)}

>

{addedItems.includes(plant.id)
? "Added"
: "Add to Cart"} </button>

