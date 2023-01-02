const getMeal = async () => {
  const request = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const data = await request.json();
  return data.categories[0];
};

export default getMeal;
const newLike = async () => {
  const base =
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/";
  const query = "apps/:app_id/likes/";
  const response = await fetch(base + query);
};
