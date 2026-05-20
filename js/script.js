const url = "https://extinct-api.herokuapp.com/api/v1/animal/804";
try {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data); // gibt die Daten der API in der Konsole aus
} catch (error) {
  console.error(error);
}