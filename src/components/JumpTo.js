import React, { useState } from 'react'


function JumpTo() {
    const [channels, setChannels] = useState(
        [
            {
                name: "Development",
            },
            {
                name: "General",
            },
            {
                name: "Random",

            }
        ]
    );

    const [filteredChannel, setFiltered] = useState([""])
    const changeChannel = () => {
        const newState = [...channels];
        newState[1].name = "Catch Up Sessions";
        setFiltered(newState);
    }
    const searchMovies = (event) => {
        // console.log(event.target.value);
        const getState = [...channels];
        const myFilter = getState.filter((channel) => {
            return channel.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
        })
        // myFilter is looking for the index of ‘a’ so it would bring up cat and camel where as dog doesnt have an a so it wont show. 
        // console.log(animal.indexOf(event.target.value))
        console.log(myFilter);
        setFiltered(myFilter);
    }
    return (

            <div className="Container">
              <h1> Search for channels</h1>
              <input type="text" placeholder= "Jump to..." onChange={searchMovies} />
              <h2>Available Channels:</h2>
              {filteredChannel.map((el) => {
                return <h3> {el.name} </h3>
              })}
            
        </div>
        
    );
}
export default JumpTo;


// import React, { useState } from 'react'
// // import '../App.css';
// function App() {
//   const [movies, setMovies] = useState(
//     [
//       {
//         name: "The Matrix",
//         year: 1999
//       },
//       {
//         name: "Toy Story",
//         year: 1995
//       },
//       {
//         name: "Harry Potter",
//         year: 2001
//       }
//     ]
//   );
  
//   const [filteredMovies, setFiltered] = useState([""]);
//   const changeMovie = () => {
//     const newState = [...movies];
//     newState[1].name = "Gladiator";
//     newState[1].year = 1999;
//     setMovies(newState);
//   }
//   const searchMovies = (event) => {
//     // console.log(event.target.value);
//     const getState = [...movies];
//     const myFilter = getState.filter((movie) => {
//       return movie.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
//     })
//   // myFilter is looking for the index of ‘a’ so it would bring up cat and camel where as dog doesnt have an a so it wont show. 
//     // console.log(animal.indexOf(event.target.value))
//     console.log(myFilter);
//     setFiltered(myFilter);
//   }
//   return (
//     <div className="Container">
//       <h1> Search for movies</h1>
//       <input type="text" placeholder="Search" onChange={searchMovies} />
//       <h2>Movies:</h2>
//       {filteredMovies.map((el) => {
//         return <h3> {el.name} was released on {el.year}</h3>
//       })}
//       {/* <h2>{myFilter}</h2> */}
//       {/* <h3>list of {movies}</h3> */}
//       {/* {movies.map((el) => {
//         return <h3> {el.name} was released on {el.year}</h3>
//       })} */}
//       {/* <button onClick={changeMovie}>Change Movie</button> */}
//     </div>
//   );
// }
// export default App;