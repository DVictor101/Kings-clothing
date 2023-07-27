import "./App.css";

const App = () => {
 const data = [
  {
   id: 1,
   title: "HATS",
  },
  {
   id: 2,
   title: "JACKETS",
  },
  {
   id: 3,
   title: "SNEAKERS",
  },
  {
   id: 4,
   title: "MENS",
  },
  {
   id: 5,
   title: "WOMENS",
  },
 ];
 return (
  <div className="App">
   {data.map(({ title, id }) => {
    return (
     <div className="category-conainert">
      <div className="background-image" />
      <div className="content-container">
       <h2 className="content-head">{title}</h2>
       <p className="content-p">Shop Now</p>
      </div>
     </div>
    );
   })}
  </div>
 );
};

export default App;
