url = "https://www.themealdb.com/api/json/v1/1/categories.php";

const getMeal = async (url) => {
  const request = await fetch(url);
  const data = await request.json();
  return data.categories[0];
};

export default getMeal;
