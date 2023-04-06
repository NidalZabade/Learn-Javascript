async function myFunction() {
  try {
    const response = await fetch(
      "https://api.github.com/users/NidalZabade/repos"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

myFunction();
