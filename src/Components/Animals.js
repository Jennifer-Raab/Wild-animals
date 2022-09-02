import { Link } from "react-router-dom";

export default function Animals({ animals }) {
  return (
    <div className="App">
      {animals.length &&
        animals.map((animal) => {
          console.log(animal);
          return (
            <div key={animal.sys.id}>
              <Link to={`/animal/${animal.sys.id}`}>
                <img
                  src={animal.fields.bild.fields.file.url}
                  alt={animal.fields.bild.fields.description}
                />
                <p>{animal.fields.tierart}</p>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
